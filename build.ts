/// <reference types="bun-types" />
import type { BuildConfig, BuildOutput } from "bun";
import { mkdir, readdir, rm } from "fs/promises";

// ============USER CONFIG==============

// This is where you NEED to add the user configs, in this case, these are the script names and their
// respective injectors. These are absolutely required by the build process.
const outDir = "dist";
const injectors = ["loading.ts"];
const injectScripts = ["loading.ts"];
const entryPoint = "main.ts";

/**************************************/
/**************************************/
/**************************************/
/**************************************/
/**************************************/
/**************************************/
// ============BUILD PROCESS============

// ? It is recommended to not modify the build (because we all know how JS build systems are created)
// ? But if you need to, then you have to modify this part. Remember, *this is confusing*

await rm(`./${outDir}`, { recursive: true });

const buildConfig: Omit<BuildConfig, "entrypoints"> = {
  minify: true,
  format: "esm",
  target: "browser",
};

const builds: Promise<BuildOutput>[] = [];

const mainBuild = Bun.build({
  ...buildConfig,
  entrypoints: [`./app/${entryPoint}`],
  outdir: `./${outDir}`,
});

builds.push(mainBuild);

const injectBuild = Bun.build({
  ...buildConfig,
  entrypoints: injectors.map((injector) => `./app/injects/${injector}`),
  outdir: `./${outDir}/injects`,
});

builds.push(injectBuild);

const injectScriptsBuild = Bun.build({
  ...buildConfig,
  entrypoints: injectScripts.map(
    (injectScript) => `./app/injects/scripts/${injectScript}`
  ),
  outdir: `./${outDir}/injects/scripts`,
});

builds.push(injectScriptsBuild);

await Promise.all(builds);

const manifest = Bun.file("manifest.json");

await Promise.all([
  Bun.write(`./${outDir}/manifest.json`, manifest),
  mkdir(`./${outDir}/styles`),
  mkdir(`./${outDir}/icons`),
  mkdir(`./${outDir}/images`),
]);

for (const styleFile of await readdir("./styles")) {
  await Bun.write(
    `./${outDir}/styles/${styleFile}`,
    await Bun.file(`./styles/${styleFile}`).text()
  );
}

for (const iconFile of await readdir("./icons")) {
  await Bun.write(
    `./${outDir}/icons/${iconFile}`,
    await Bun.file(`./icons/${iconFile}`).arrayBuffer()
  );
}

for (const imageFile of await readdir("./images")) {
  await Bun.write(
    `./${outDir}/images/${imageFile}`,
    await Bun.file(`./images/${imageFile}`).arrayBuffer()
  );
}

console.log("Built!");

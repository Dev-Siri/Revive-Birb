import { styled } from "../macros/styled" assert { type: "macro" };

const injectedScript = document.createElement("script");
injectedScript.type = "module";
injectedScript.src = chrome.runtime.getURL("injects/scripts/loading.js");

const injectedCSS = document.createElement("style");

const styles = styled({ display: "none" });
injectedCSS.innerHTML = `* ::-webkit-scrollbar {${styles}}`;

const faviconUrl = document.createElement("div");

faviconUrl.id = "favicon-url";
faviconUrl.innerHTML = chrome.runtime.getURL("images/favicon.ico");
faviconUrl.style.display = "none";

document.documentElement.append(injectedScript, faviconUrl, injectedCSS);

export function isDarkMode() {
  const htmlTagHasDarkScheme = document.documentElement
    .getAttribute("style")
    ?.includes("color-scheme: dark");

  return htmlTagHasDarkScheme;
}

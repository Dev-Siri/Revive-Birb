export function listener(fn: () => void, element?: HTMLElement) {
  const observer = new MutationObserver(() => requestAnimationFrame(fn));
  const watchElement = element ?? document.documentElement;

  observer.disconnect();

  fn();

  const config = { childList: true, subtree: true };
  if (watchElement) observer.observe(watchElement, config);
}

export function isDarkMode() {
  const htmlTagHasDarkScheme = document.documentElement
    .getAttribute("style")
    ?.includes("color-scheme: dark");

  return htmlTagHasDarkScheme;
}

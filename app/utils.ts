export function listener(fn: () => void, element?: HTMLElement) {
  const observer = new MutationObserver(fn);
  const watchElement = element ?? document.documentElement;

  observer.disconnect();

  fn();

  const config = { childList: true, subtree: true };
  if (watchElement) observer.observe(watchElement, config);
}

const memoizationCache: Record<string, Element | null> = {};

export function querySelectorMemoized<T extends HTMLElement>(selector: string) {
  if (memoizationCache[selector]) return memoizationCache[selector] as T;

  const element = document.querySelector<T>(selector);
  memoizationCache[selector] = element;

  return element as T | null;
}

export function isDarkMode() {
  const htmlTagHasDarkScheme = document.documentElement
    .getAttribute("style")
    ?.includes("color-scheme: dark");

  return htmlTagHasDarkScheme;
}

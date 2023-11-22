export function listener(fn: () => void, element?: HTMLElement) {
  const observer = new MutationObserver(fn);
  const watchElement = element ?? document.documentElement;

  observer.disconnect();

  fn();

  const config = { childList: true, subtree: true };
  if (watchElement) observer.observe(watchElement, config);
}

const memoizationCache = new WeakMap<
  HTMLElement,
  Map<string, Element | null>
>();

export function querySelectorMemoized<T extends HTMLElement>(selector: string) {
  const rootElement = document.documentElement;

  if (!memoizationCache.has(rootElement))
    memoizationCache.set(rootElement, new Map<string, Element | null>());

  const cache = memoizationCache.get(rootElement)!;

  if (cache.has(selector)) {
    return cache.get(selector) as T | null;
  }

  const element = document.querySelector<T>(selector);
  cache.set(selector, element);

  return element;
}

export function isDarkMode() {
  const htmlTagHasDarkScheme = document.documentElement
    .getAttribute("style")
    ?.includes("color-scheme: dark");

  return htmlTagHasDarkScheme;
}

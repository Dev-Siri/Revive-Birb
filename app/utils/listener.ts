export function listener(fn: () => void, element?: HTMLElement) {
  const observer = new MutationObserver(() => setTimeout(fn, 0));
  const watchElement = element ?? document.documentElement;

  observer.disconnect();

  fn();

  if (watchElement) observer.observe(watchElement, {
    childList: true,
    subtree: true,
    attributes: false,
    characterData: false,
  });
}

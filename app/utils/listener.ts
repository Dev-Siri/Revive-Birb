export function listener(fn: () => void, element?: HTMLElement) {
  const observer = new MutationObserver(() => setTimeout(fn, 0));
  const watchElement = element ?? document.documentElement;

  observer.disconnect();

  fn();

  const config = { childList: true, subtree: true };
  if (watchElement) observer.observe(watchElement, config);
}

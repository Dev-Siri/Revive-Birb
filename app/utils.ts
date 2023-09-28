export function listener(fn: () => void, element?: HTMLElement) {
  const observer = new MutationObserver(fn);
  const watchElement = element ?? document.querySelector("title");

  observer.disconnect();

  fn();

  const config = { childList: true };
  if (watchElement) observer.observe(watchElement, config);
}

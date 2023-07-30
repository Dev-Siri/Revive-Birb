function runFunction(fn) {
  const observer = new MutationObserver(fn);
  const target = document.body;
  const config = { childList: true };
  observer.observe(target, config);
}

globalThis.runFunction = runFunction;

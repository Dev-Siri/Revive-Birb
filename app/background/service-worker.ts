chrome.webNavigation.onBeforeNavigate.addListener((details) => {
  if (
    details.frameId === 0 &&
    details.url.includes("twitter.com") &&
    !details.url.includes("?mx=1")
  ) {
    chrome.tabs.update(details.tabId, { url: `${details.url}?mx=1` });
  }
});

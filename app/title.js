function modifyHead() {
  const observer = new MutationObserver(modifyHead);
  const titleElement = document.querySelector("title");
  if (!document.title.endsWith("X")) return;

  // The original site uses twitter.3.ico which is the new X logo
  // twitter.2 is still present, but it could get removed so this is not really reliable.
  // It maybe possible to link to external sources, but due the CSP, it is unable to.
  const TWITTER_FAVICON_URL = "https://abs.twimg.com/favicons/twitter.2.ico";

  observer.disconnect();

  if (document.title === "X") {
    document.title = "Messages / Twitter";
  } else if (document.title[0] === "X") {
    document.title = "Twitter (@twitter) / Twitter";
  } else {
    document.title = document.title.replace("/ X", "/ Twitter");
  }

  const faviconElement = document.querySelector("link[rel~=icon]");
  if (faviconElement) faviconElement.href = TWITTER_FAVICON_URL;

  const config = { childList: true };
  observer.observe(titleElement, config);
}

runFunction(modifyHead);

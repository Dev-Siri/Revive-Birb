import { querySelectorMemoized } from "../utils";

export default function head() {
  const observer = new MutationObserver(head);
  const titleElement = querySelectorMemoized("title");

  if (!document.title.endsWith("X")) return;

  observer.disconnect();

  if (document.title === "X") {
    document.title = "Messages / Twitter";
  } else if (document.title[0] === "X") {
    document.title = "Twitter (@twitter) / Twitter";
  } else {
    document.title = document.title.replace("/ X", "/ Twitter");
  }

  const postTitleRegex = /(^| )on [^\s:]+(?=[: ]|$)/g;
  document.title = document.title.replace(postTitleRegex, " on Twitter");

  const faviconElement =
    querySelectorMemoized<HTMLLinkElement>("link[rel~=icon]");

  if (faviconElement)
    faviconElement.href = chrome.runtime.getURL("images/favicon.ico");

  const config = { childList: true };
  observer.observe(titleElement!, config);
}

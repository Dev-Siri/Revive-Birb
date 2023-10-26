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

  // The check is a bit more specific to narrow down inaccuracies
  if (document.title.includes("Posts with replies by"))
    document.title = document.title.replace(
      "Posts with replies",
      "Tweets with replies"
    );

  if (document.title.includes("Media posts by"))
    document.title = document.title.replace("Media posts", "Media tweets");

  if (document.title.includes("Posts liked by"))
    document.title = document.title.replace("Posts liked", "Tweets liked");

  const postTitleRegex = /(^| )on [^\s:]+(?=[: ]|$)/g;
  document.title = document.title.replace(postTitleRegex, " on Twitter");

  const faviconElement =
    querySelectorMemoized<HTMLLinkElement>("link[rel~=icon]");

  if (faviconElement)
    faviconElement.href = chrome.runtime.getURL("images/favicon.ico");

  const config = { childList: true };
  observer.observe(titleElement!, config);
}

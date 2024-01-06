/*
  dont use direct document.title = 'new title' assign
  when there's a notification, twitter adds a (<number of noto's>) at the start to indicate the number
  of notifications. so directly assigning a new value might cause a crash because
  react on twitter will continuously try to add that pre-text and the extension will also react to that
  and replace it again causing an infinite loop. aka always use document.title = document.title.replace(...)
*/
export default function head() {
  if (!document.title.endsWith("X")) return;

  const faviconElement =
    document.querySelector<HTMLLinkElement>("link[rel~=icon]");
  const faviconUrl = document.getElementById("favicon-url");

  if (faviconElement && faviconUrl) {
    faviconElement.href = faviconUrl.innerHTML;
    document.documentElement.removeChild(faviconUrl);
  }

  if (document.title === "X") {
    document.title = document.title.replace("X", "Twitter");
  } else {
    document.title = document.title.replace("/ X", "/ Twitter");
  }

  if (document.title === "X (@X) / Twitter")
    document.title = document.title.replace(
      "X (@X) / Twitter",
      "Twitter (@twitter) / Twitter"
    );

  // The check is a bit more specific to narrow down inaccuracies
  if (document.title.includes("Posts with replies by"))
    document.title = document.title.replace(
      "Posts with replies",
      "Tweets with replies"
    );

  if (document.title.includes("Media posts by"))
    document.title = document.title.replace("Media posts", "Media Tweets");

  if (document.title.includes("Posts liked by"))
    document.title = document.title.replace("Posts liked", "Tweets liked");

  if (document.title.includes("Users who liked this post"))
    document.title = document.title.replace(
      "Users who liked this post",
      "Users who liked this tweet"
    );

  if (document.title.includes("Quotes of this post"))
    document.title = document.title.replace(
      "Quotes of this post",
      "Quotes of this tweet"
    );

  if (document.title.includes("Users who reposted this post"))
    document.title = document.title.replace(
      "Users who reposted this post",
      "Users who retweeted this tweet"
    );

  const tweetTitleRegex = /(^| )on [^\s:]+(?=[: ]|$)/g;
  document.title = document.title.replace(tweetTitleRegex, " on Twitter");
}

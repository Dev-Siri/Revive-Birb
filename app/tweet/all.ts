function getEngagementEmptyText(): [string, string] {
  if (location.pathname.endsWith("/quotes"))
    return [
      "No Quote Tweets yet",
      "You will find a list of everyone who quoted this Tweet here.",
    ];

  if (location.pathname.endsWith("/retweets"))
    return [
      "No Retweets yet",
      "Share someone else’s Tweet on your timeline by Retweeting it. When you do, it’ll show up here.",
    ];

  return [
    "No likes yet",
    "When someone taps the heart to Like this Tweet, it’ll show up here.",
  ];
}

export default function tweetPage() {
  if (!location.pathname.includes("/status/")) return;

  const tweetPlaceholder = document.querySelector(
    "div[data-testid=tweetTextarea_0RichTextInputContainer] > div > div > div"
  );
  const headerText = document.querySelector(
    "#react-root > div > div > div.css-175oi2r.r-13qz1uu.r-417010.r-18u37iz > main > div > div > div > div > div > div.css-175oi2r.r-aqfbo4.r-gtdqiz.r-1gn8etr.r-1g40b8q > div:nth-child(1) > div > div > div > div > div > div.css-175oi2r.r-16y2uox.r-1wbh5a2.r-1pi2tsx.r-1777fci > div > h2 > span"
  );
  const tweetEngagementText = document.querySelector(
    "a[data-testid=analyticsButton] > div > span"
  );
  const engagementEmptyText = document.querySelector(
    "#react-root > div > div > div.css-175oi2r.r-13qz1uu.r-417010.r-18u37iz > main > div > div > div > div > div > div.css-175oi2r.r-1kihuf0.r-1jgb5lz.r-764hgp.r-jzhu7e.r-1dye5f7.r-13qz1uu > div > div.css-1rynq56.r-bcqeeo.r-qvutc0.r-37j5jr.r-fdjqy7.r-1yjpyg1.r-ueyrd6.r-1vr29t4.r-5oul0u > span"
  );
  const quoteTab = document.querySelector(
    "#react-root > div > div > div.css-175oi2r.r-13qz1uu.r-417010.r-18u37iz > main > div > div > div > div > div > div.css-175oi2r.r-aqfbo4.r-gtdqiz.r-1gn8etr.r-1g40b8q > div.css-175oi2r.r-1e5uvyk.r-5zmot > div:nth-child(2) > nav > div > div.css-175oi2r.r-1adg3ll.r-16y2uox.r-1wbh5a2.r-1pi2tsx > div > div:nth-child(1) > a > div > div > span"
  );
  const retweetTab = document.querySelector(
    "#react-root > div > div > div.css-175oi2r.r-13qz1uu.r-417010.r-18u37iz > main > div > div > div > div > div > div.css-175oi2r.r-aqfbo4.r-gtdqiz.r-1gn8etr.r-1g40b8q > div.css-175oi2r.r-1e5uvyk.r-5zmot > div:nth-child(2) > nav > div > div.css-175oi2r.r-1adg3ll.r-16y2uox.r-1wbh5a2.r-1pi2tsx > div > div:nth-child(2) > a > div > div > span"
  );
  const engagementEmptySubText = document.querySelector(
    "#react-root > div > div > div.css-175oi2r.r-13qz1uu.r-417010.r-18u37iz > main > div > div > div > div > div > div.css-175oi2r.r-1kihuf0.r-1jgb5lz.r-764hgp.r-jzhu7e.r-1dye5f7.r-13qz1uu > div > div.css-1rynq56.r-bcqeeo.r-qvutc0.r-37j5jr.r-fdjqy7.r-a023e6.r-rjixqe.r-16dba41.r-1nxhmzv > span"
  );

  if (engagementEmptyText && engagementEmptySubText) {
    const [mainText, subText] = getEngagementEmptyText();

    engagementEmptyText.textContent = mainText;
    engagementEmptySubText.textContent = subText;
  }

  if (quoteTab) quoteTab.textContent = "Quote Tweets";
  if (retweetTab) retweetTab.textContent = "Retweets";

  if (
    tweetPlaceholder &&
    !tweetPlaceholder.hasAttribute("data-focusvisible-polyfill") &&
    tweetPlaceholder.textContent === "Post your reply"
  )
    tweetPlaceholder.textContent = "Tweet your reply";
  if (headerText) headerText.textContent = "Tweet";
  if (tweetEngagementText)
    tweetEngagementText.textContent = "View Tweet engagements";
}

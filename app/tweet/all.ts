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

  if (
    tweetPlaceholder &&
    !tweetPlaceholder.hasAttribute("data-focusvisible-polyfill") &&
    tweetPlaceholder.textContent === "Post your reply"
  )
    tweetPlaceholder.textContent = "Tweet your reply";
  if (headerText) headerText.textContent = "Tweet";
  if (tweetEngagementText)
    tweetEngagementText.textContent = "View tweet engagements";
}

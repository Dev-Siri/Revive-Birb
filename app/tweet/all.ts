export default function tweetPage() {
  if (!location.pathname.includes("/status/")) return;

  const tweetPlaceholder = document.querySelector(
    "div[data-testid=tweetTextarea_0RichTextInputContainer] > div > div > div"
  );
  const headerText = document.querySelector(
    "#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > main > div > div > div > div.css-1dbjc4n.r-kemksi.r-1kqtdi0.r-1ljd8xs.r-13l2t4g.r-1phboty.r-16y2uox.r-1jgb5lz.r-11wrixw.r-61z16t.r-1ye8kvj.r-13qz1uu.r-184en5c > div > div.css-1dbjc4n.r-aqfbo4.r-gtdqiz.r-1gn8etr.r-1g40b8q > div:nth-child(1) > div > div > div > div > div > div.css-1dbjc4n.r-16y2uox.r-1wbh5a2.r-1pi2tsx.r-1777fci > div > h2 > span"
  );
  const tweetEngagementText = document.querySelector(
    "#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > main > div > div > div > div.css-1dbjc4n.r-kemksi.r-1kqtdi0.r-1ljd8xs.r-13l2t4g.r-1phboty.r-16y2uox.r-1jgb5lz.r-11wrixw.r-61z16t.r-1ye8kvj.r-13qz1uu.r-184en5c > div > section > div > div > div:nth-child(1) > div > div > article > div > div > div:nth-child(3) > div.css-1dbjc4n.r-1awozwy.r-2sztyj.r-1efd50x.r-5kkj8d.r-18u37iz.r-1wtj0ep > a > div > span"
  );

  if (
    tweetPlaceholder &&
    !tweetPlaceholder.hasAttribute("data-focusvisible-polyfill")
  )
    tweetPlaceholder.textContent = "Tweet your reply";
  if (headerText) headerText.textContent = "Tweet";
  if (tweetEngagementText)
    tweetEngagementText.textContent = "View tweet engagements";
}

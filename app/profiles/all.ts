export default function allProfiles() {
  const tweetCountText = document.querySelector(
    "#react-root > div > div > div.css-175oi2r.r-13qz1uu.r-417010.r-18u37iz > main > div > div > div > div > div > div.css-175oi2r.r-aqfbo4.r-gtdqiz.r-1gn8etr.r-1g40b8q > div:nth-child(1) > div > div > div > div > div > div.css-175oi2r.r-16y2uox.r-1wbh5a2.r-1pi2tsx.r-1777fci > div > div"
  );
  const tweetsTabText = document.querySelector(
    "#react-root > div > div > div.css-175oi2r.r-13qz1uu.r-417010.r-18u37iz > main > div > div > div > div > div > div:nth-child(3) > div > div > nav > div > div.css-175oi2r.r-1adg3ll.r-16y2uox.r-1wbh5a2.r-1pi2tsx > div > div:nth-child(1) > a > div > div > span"
  );
  const retweetedTexts = document.querySelectorAll(
    "span[data-testid=socialContext]"
  );
  const showMoreTweetsText = document.querySelector(
    "a[data-testid=show-similar-posts-pivot] > div > div > span"
  );
  const articlesEmptyText = document.querySelector(
    "div[data-testid=empty_state_header_text] > span"
  );
  const articlesEmptySubtext = document.querySelector(
    "div[data-testid=empty_state_body_text] > span"
  );

  if (location.pathname.endsWith("/articles")) {
    if (articlesEmptyText)
      articlesEmptyText.textContent = "Write Articles on Twitter";
    if (articlesEmptySubtext)
      articlesEmptySubtext.textContent =
        "You must be subscribed to Premium+ to write Articles on Twitter";
  }

  if (location.pathname.endsWith("/highlights") && articlesEmptySubtext) {
    articlesEmptySubtext.textContent =
      "You must be subscribed to Premium to highlight Tweets on your profile.";
  }

  if (tweetsTabText) tweetsTabText.textContent = "Tweets";
  if (tweetCountText?.textContent)
    tweetCountText.textContent = tweetCountText.textContent.replace(
      "post",
      "Tweet"
    );
  if (showMoreTweetsText)
    showMoreTweetsText.textContent = "Show similar Tweets";

  let index = 0;

  function processRetweetedText() {
    const retweetedText = retweetedTexts[index];

    if (retweetedText && retweetedText.textContent)
      retweetedText.textContent = retweetedText.textContent.replace(
        "reposted",
        "Retweeted"
      );

    index++;

    if (index < retweetedTexts.length) setTimeout(processRetweetedText, 0);
  }

  setTimeout(processRetweetedText, 0);
}

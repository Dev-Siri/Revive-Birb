export default function trends() {
  const trendsTweetCountsText = document.querySelectorAll(
    "div[data-testid=trend] > div > div:nth-child(3) > span"
  );
  const trends = document.querySelectorAll("div[data-testid=trend]");

  for (let i = 0; i < trendsTweetCountsText.length; i++) {
    const trend = trendsTweetCountsText[i];

    if (trend.innerHTML.includes("Only on X"))
      trend.innerHTML = trend.innerHTML.replace("Only on X", "Only on Twitter");

    if (trend?.textContent)
      trend.textContent = trend.textContent.replace("posts", "Tweets");
  }

  for (let i = 0; i < trends.length; i++) {
    const trend = trends[i];

    const onlyOnTwitter = trend.querySelector(
      ":scope div[id^=id__] > div > div > span"
    );

    if (onlyOnTwitter?.textContent === "Only on X · Trending")
      onlyOnTwitter.textContent = "Only on Twitter · Trending";
  }
}

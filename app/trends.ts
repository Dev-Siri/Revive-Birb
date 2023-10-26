export default function trends() {
  const trends = document.querySelectorAll(
    "div[data-testid=trend] > div > div:nth-child(3) > span"
  );

  for (const trend of trends) {
    if (trend?.textContent)
      trend.textContent = trend.textContent.replace("posts", "tweets");
  }
}

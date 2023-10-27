export default function tweet() {
  const tweetEngagementText = document.querySelector(
    "a[data-testid=tweetEngagements] > div:nth-child(2) > div > span"
  );
  const tweetAnalyticsText = document.querySelector(
    "a[data-testid=analytics] > div:nth-child(2) > div > span"
  );

  if (tweetEngagementText)
    tweetEngagementText.textContent = "View tweet engagements";
  if (tweetAnalyticsText)
    tweetAnalyticsText.textContent = "View tweet analytics";
}

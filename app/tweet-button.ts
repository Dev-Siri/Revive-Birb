export default function tweetButton() {
  const tweetComposeText = document.querySelector(
    "div[data-testid=tweetButton] > div > span > span"
  );
  const tweetBtnText = document.querySelector(
    "a[data-testid=SideNav_NewTweet_Button] > div > span > div > div > span > span"
  );
  const tweetOnHome = document.querySelector(
    "div[data-testid=tweetButtonInline] > div > span > span"
  );

  if (tweetComposeText?.textContent) {
    if (tweetComposeText.textContent === "Post all")
      tweetComposeText.textContent = "Tweet all";
    else tweetComposeText.textContent = "Tweet";
  }

  if (tweetBtnText) tweetBtnText.textContent = "Tweet";
  if (tweetOnHome) tweetOnHome.textContent = "Tweet";
}

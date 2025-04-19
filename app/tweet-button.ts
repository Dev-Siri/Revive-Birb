export default function tweetButton() {
  const tweetComposeText = document.querySelector(
    "button[data-testid=tweetButton] > div > span > span"
  );
  const tweetBtnText = document.querySelector(
    "a[data-testid=SideNav_NewTweet_Button] > div > span > div > div > span > span"
  );
  const tweetOnHomeAndReply = document.querySelector(
    "button[data-testid=tweetButtonInline] > div > span > span"
  );

  if (tweetComposeText?.textContent) {
    if (tweetComposeText.textContent === "Post")
      tweetComposeText.textContent = "Tweet";
  }

  if (tweetBtnText) tweetBtnText.textContent = "Tweet";
  if (tweetOnHomeAndReply?.textContent === "Post")
    tweetOnHomeAndReply.textContent = "Tweet";
}

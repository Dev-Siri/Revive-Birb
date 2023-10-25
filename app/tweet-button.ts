import { querySelectorMemoized } from "./utils";

export default function tweetButton() {
  const tweetComposeText = querySelectorMemoized(
    "div[data-testid=tweetButton] > div > span > span"
  );
  const tweetBtnText = document.querySelector(
    "a[data-testid=SideNav_NewTweet_Button] > div > span > div > div > span > span"
  );
  const tweetOnHome = document.querySelector(
    "div[data-testid=tweetButtonInline] > div > span > span"
  );

  if (tweetBtnText) tweetBtnText.textContent = "Tweet";
  if (tweetComposeText) tweetComposeText.textContent = "Tweet";
  if (tweetOnHome) tweetOnHome.textContent = "Tweet";
}

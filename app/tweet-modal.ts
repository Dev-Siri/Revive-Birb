export default function tweetModal() {
  const saveTweet = document.querySelector(
    "div[data-testid=confirmationSheetDialog] > h1 > span"
  );

  if (saveTweet?.textContent === "Save post?")
    saveTweet.textContent = "Save Tweet?";

  if (saveTweet?.textContent === "Delete post?")
    saveTweet.textContent = "Delete Tweet?";
}

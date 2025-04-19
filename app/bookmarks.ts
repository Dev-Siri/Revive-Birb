export default function bookmarks() {
  if (location.pathname !== "/i/bookmarks") return;

  const saveTweetsForLaterText = document.querySelector(
    "div[data-testid=empty_state_header_text]"
  );
  const saveTweetsSubtext = document.querySelector(
    "div[data-testid=empty_state_body_text] > span"
  );

  if (saveTweetsForLaterText?.textContent)
    saveTweetsForLaterText.textContent =
      saveTweetsForLaterText.textContent.replace("posts", "Tweets");

  if (saveTweetsSubtext?.textContent)
    saveTweetsSubtext.textContent = saveTweetsSubtext.textContent.replace(
      "post",
      "Tweet"
    );
}

export default function messages() {
  if (location.pathname !== "/messages") return;

  const subtext = document.querySelector(
    "div[data-testid=empty_state_body_text] > span"
  );

  if (
    subtext?.textContent?.includes(
      "Drop a line, share posts and more with private conversations between you and others on X."
    )
  )
    subtext.textContent =
      "Drop a line, share Tweets and more with private conversations between you and others on Twitter. ";
}

export default function twitterBlue() {
  const twitterBluePopup =
    document.querySelector("aside[aria-label='Subscribe to Premium']") ??
    document.querySelector("aside[aria-label='Subscribe to Premium+']");

  if (twitterBluePopup?.parentNode) {
    const parentDiv = twitterBluePopup.parentNode;

    parentDiv.parentNode?.removeChild(parentDiv);
  }
}

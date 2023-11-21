import { styled } from "./macros/styled" assert { type: "macro" };

import { TWITTER_LOGO_MARKUP_PATH } from "./constants/logo";
import { querySelectorMemoized } from "./utils";

export default function jobs() {
  const xLogo = querySelectorMemoized(
    "#react-root > div > div > div.css-175oi2r.r-13qz1uu.r-417010.r-18u37iz > main > div > div > div > div.css-175oi2r.r-1awozwy.r-eabgco.r-8fdsdq > div.css-175oi2r.r-1awozwy.r-6koalj.r-18u37iz.r-f4gmv6.r-2rinds > svg"
  );

  if (xLogo) {
    const logoStyles = styled({
      height: "55px",
      width: "70px",
      marginLeft: "-80px",
    });

    xLogo.outerHTML = `<svg viewBox="0 0 220 220" id="twitter-bird-logo" height="55" width="70" style="${logoStyles}" aria-hidden="true">${TWITTER_LOGO_MARKUP_PATH}</svg>`;
  }
}

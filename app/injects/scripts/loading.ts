import { TWITTER_LOGO_MARKUP_PATH } from "../../constants/logo";

document.title = "Twitter";

setTimeout(() => {
  const faviconElement =
    document.querySelector<HTMLLinkElement>("link[rel~=icon]");
  const faviconUrl = document.getElementById("favicon-url");

  if (faviconElement && faviconUrl) {
    faviconElement.href = faviconUrl.innerHTML;
    document.documentElement.removeChild(faviconUrl);
  }

  const placeholder = document.getElementById("placeholder");

  if (placeholder)
    placeholder.innerHTML = `<svg viewBox="0 0 220 220" height="70" width="85" id="twitter-bird-logo" style="height: 70px; width: 85px;" aria-hidden="true" class="r-4qtqp9 r-yyyyoo r-dnmrzs r-1plcrui r-lrvibr r-1p0dtai r-1nao33i r-zchlnj r-wy61xf r-ywje51 r-u8s1d r-1d2f490 r-ipm5af r-1blnp2b">${TWITTER_LOGO_MARKUP_PATH}</svg>`;
}, 100);

import { TWITTER_LOGO_MARKUP_PATH } from "../../constants/logo";

document.title = "Twitter";

const placeholder = document.getElementById("placeholder");
const faviconElement =
  document.querySelector<HTMLLinkElement>("link[rel~=icon]");
const faviconUrl = document.getElementById("favicon-url");

if (faviconElement && faviconUrl) {
  faviconElement.href = faviconUrl.innerHTML;
  document.documentElement.removeChild(faviconUrl);
}

if (placeholder)
  placeholder.innerHTML = `<svg viewBox="0 0 220 220" height="66" width="77" id="twitter-bird-logo" aria-hidden="true" class="r-1nao33i r-4qtqp9 r-yyyyoo r-16y2uox r-8kz0gk r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-lrsllp">${TWITTER_LOGO_MARKUP_PATH}</svg>`;

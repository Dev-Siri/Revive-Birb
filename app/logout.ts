import { TWITTER_LOGO_MARKUP_PATH } from "./constants/logo";

export default function logout() {
  const logo = document.querySelector(
    "div[data-testid=confirmationSheetDialog] > svg"
  );

  if (logo)
    logo.innerHTML = `<svg viewBox="0 0 220 260" aria-hidden="true" class="r-1nao33i r-4qtqp9 r-yyyyoo r-16y2uox r-8kz0gk r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-lrsllp">${TWITTER_LOGO_MARKUP_PATH}</svg>`;
}

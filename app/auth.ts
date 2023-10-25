import { TWITTER_LOGO_MARKUP_PATH } from "./constants/logo";

export default function auth() {
  const heroText = document.querySelector(
    "#react-root > div > div > div.css-1dbjc4n.r-13qz1uu.r-417010 > main > div > div > div.css-1dbjc4n.r-tv6buo > div > div > div.css-901oao.r-1nao33i.r-fm7h5w.r-19oahor.r-b88u0q.r-nm9kes.r-1ncnki0.r-4afqvc.r-bcqeeo.r-qvutc0 > span"
  );
  const smallerText = document.querySelector(
    "#react-root > div > div > div.css-1dbjc4n.r-13qz1uu.r-417010 > main > div > div > div.css-1dbjc4n.r-tv6buo > div > div > div.css-901oao.r-1nao33i.r-fm7h5w.r-1yjpyg1.r-b88u0q.r-ueyrd6.r-zd98yo.r-bcqeeo.r-qvutc0 > span"
  );
  const smallLogo = document.querySelector(
    "#react-root > div > div > div.css-1dbjc4n.r-13qz1uu.r-417010 > main > div > div > div.css-1dbjc4n.r-tv6buo > div > div > svg"
  );
  const xCorp = document.querySelector(
    "#react-root > div > div > div.css-1dbjc4n.r-13qz1uu.r-417010 > main > div > div > div.css-1dbjc4n.r-p1pxzi.r-wfqgy4.r-zd22at > nav > div > span"
  );
  const xForBusiness = document.querySelector(
    "#react-root > div > div > div.css-1dbjc4n.r-13qz1uu.r-417010 > main > div > div > div.css-1dbjc4n.r-p1pxzi.r-wfqgy4.r-zd22at > nav > a:nth-child(14) > span"
  );

  const newHeroText = "See what’s happening in the world right now";

  if (heroText) heroText.textContent = newHeroText;
  if (smallerText) smallerText.textContent = "Join Twitter today.";
  if (xCorp)
    xCorp.textContent = (xCorp.textContent || "Twitter Inc").replace(
      "X Corp",
      "Twitter Inc"
    );
  if (xForBusiness)
    xForBusiness.textContent = (xForBusiness.textContent || "Twitter").replace(
      "X",
      "Twitter"
    );
  if (smallLogo) {
    if (innerWidth < 1000)
      smallLogo.outerHTML = `<svg viewBox="0 0 220 220" height="66" width="77" aria-hidden="true" class="r-k200y r-1nao33i r-4qtqp9 r-yyyyoo r-5sfk15 r-dnmrzs r-kzbkwu r-bnwqim r-1plcrui r-lrvibr">${TWITTER_LOGO_MARKUP_PATH}</svg>`;
    else
      smallLogo.outerHTML = `
        <img src="${chrome.runtime.getURL(
          "images/auth-hero-banner.avif"
        )}" alt="Twitter Hero Image" />
      `;
  }
}

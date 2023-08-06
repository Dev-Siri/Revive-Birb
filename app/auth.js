function revertAuthPage() {
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
    xCorp.textContent = xCorp.textContent.replace("X Corp", "Twitter Corp");
  if (xForBusiness)
    xForBusiness.textContent = xForBusiness.textContent.replace("X", "Twitter");
  if (smallLogo) {
    if (innerWidth < 1000)
      smallLogo.outerHTML = `
        <svg viewBox="0 0 220 220" height="66" width="77" aria-hidden="true" class="r-k200y r-1nao33i r-4qtqp9 r-yyyyoo r-5sfk15 r-dnmrzs r-kzbkwu r-bnwqim r-1plcrui r-lrvibr">
          <g>
            <path xmlns="http://www.w3.org/2000/svg" fill="#1d9bf0" d="M221.95 51.29c.15 2.17.15 4.34.15 6.53 0 66.73-50.8 143.69-143.69 143.69v-.04c-27.44.04-54.31-7.82-77.41-22.64 3.99.48 8 .72 12.02.73 22.74.02 44.83-7.61 62.72-21.66-21.61-.41-40.56-14.5-47.18-35.07 7.57 1.46 15.37 1.16 22.8-.87-23.56-4.76-40.51-25.46-40.51-49.5v-.64c7.02 3.91 14.88 6.08 22.92 6.32C11.58 63.31 4.74 33.79 18.14 10.71c25.64 31.55 63.47 50.73 104.08 52.76-4.07-17.54 1.49-35.92 14.61-48.25 20.34-19.12 52.33-18.14 71.45 2.19 11.31-2.23 22.15-6.38 32.07-12.26-3.77 11.69-11.66 21.62-22.2 27.93 10.01-1.18 19.79-3.86 29-7.95-6.78 10.16-15.32 19.01-25.2 26.16z"/>
          </g>
        </svg>
      `;
    else
      smallLogo.outerHTML = `
        <img src="${chrome.runtime.getURL(
          "images/auth-hero-banner.avif"
        )}" alt="Twitter Hero Image" />
      `;
  }
}

runFunction(revertAuthPage);

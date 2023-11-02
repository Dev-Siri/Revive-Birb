import { TWITTER_LOGO_MARKUP_PATH } from "./constants/logo.js";

import { minifySVG } from "./macros/minify-svg.js" assert { type: "macro" };
import { isDarkMode } from "./utils.js";

// still a part of /home so placed it here
export function moreTweetsLoaded() {
  const loadedMoreTweetsText = document.querySelector(
    "#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > main > div > div > div > div.css-1dbjc4n.r-kemksi.r-1kqtdi0.r-1ljd8xs.r-13l2t4g.r-1phboty.r-16y2uox.r-1jgb5lz.r-11wrixw.r-61z16t.r-1ye8kvj.r-13qz1uu.r-184en5c > div > div.css-1dbjc4n.r-1jgb5lz.r-1ye8kvj.r-13qz1uu > div > section > div > div > div:nth-child(1) > div > div > div > div > span"
  );
  const tweetPile = document.querySelector(
    "#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > main > div > div > div > div.css-1dbjc4n.r-kemksi.r-1kqtdi0.r-1ljd8xs.r-13l2t4g.r-1phboty.r-16y2uox.r-1jgb5lz.r-11wrixw.r-61z16t.r-1ye8kvj.r-13qz1uu.r-184en5c > div > div.css-1dbjc4n.r-aqfbo4.r-gtdqiz.r-1gn8etr.r-1g40b8q > div.css-1dbjc4n.r-633pao.r-u8s1d.r-dkhcqf.r-axxi2z.r-18jm5s1.r-13qz1uu.r-1wyyakw > div > div > div > div > div.css-901oao.css-1hf3ou5.r-1kihuf0.r-jwli3a.r-37j5jr.r-a023e6.r-16dba41.r-rjixqe.r-13hce6t.r-bcqeeo.r-qvutc0 > span > span > span"
  );

  if (tweetPile) tweetPile.textContent = "tweeted";
  if (loadedMoreTweetsText?.textContent)
    loadedMoreTweetsText.textContent = loadedMoreTweetsText.textContent.replace(
      "posts",
      "tweets"
    );
}

export default function home() {
  const verified = document.querySelector("a[aria-label=Premium] > div > div");
  const logo = document.querySelector("a[aria-label=X]>div");
  const licenseText = document.querySelector(
    "#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > main > div > div > div > div.css-1dbjc4n.r-aqfbo4.r-zso239.r-1hycxz > div > div.css-1dbjc4n.r-gtdqiz.r-1hycxz > div > div > div > div.css-1dbjc4n.r-1niwhzg.r-1kqtdi0.r-1867qdf.r-1phboty.r-1yadl64.r-1ifxtd0.r-1udh08x > nav > div.css-901oao.r-37j5jr.r-n6v787.r-16dba41.r-1cwl3u0.r-hrzydr.r-bcqeeo.r-j2kj52.r-qvutc0 > span"
  );

  if (logo) {
    logo.innerHTML = `<svg viewBox="0 0 220 220" aria-hidden="true" class="r-1nao33i r-4qtqp9 r-yyyyoo r-16y2uox r-8kz0gk r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-lrsllp">${
      isDarkMode()
        ? TWITTER_LOGO_MARKUP_PATH.replace("#1d9bf0", "lightgray")
        : TWITTER_LOGO_MARKUP_PATH
    }</svg>`;

    logo.ariaLabel = "Twitter";
  }

  if (verified)
    verified.innerHTML = minifySVG(`
      <svg viewBox="0 0 24 24" aria-hidden="true" class="r-1nao33i r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-cnnz9e">
        <g>
          <path d="M8.52 3.59c.8-1.1 2.04-1.84 3.48-1.84s2.68.74 3.49 1.84c1.34-.21 2.74.14 3.76 1.16s1.37 2.42 1.16 3.77c1.1.8 1.84 2.04 1.84 3.48s-.74 2.68-1.84 3.48c.21 1.34-.14 2.75-1.16 3.77s-2.42 1.37-3.76 1.16c-.8 1.1-2.05 1.84-3.49 1.84s-2.68-.74-3.48-1.84c-1.34.21-2.75-.14-3.77-1.16-1.01-1.02-1.37-2.42-1.16-3.77-1.09-.8-1.84-2.04-1.84-3.48s.75-2.68 1.84-3.48c-.21-1.35.14-2.75 1.16-3.77s2.43-1.37 3.77-1.16zm3.48.16c-.85 0-1.66.53-2.12 1.43l-.38.77-.82-.27c-.96-.32-1.91-.12-2.51.49-.6.6-.8 1.54-.49 2.51l.27.81-.77.39c-.9.46-1.43 1.27-1.43 2.12s.53 1.66 1.43 2.12l.77.39-.27.81c-.31.97-.11 1.91.49 2.51.6.61 1.55.81 2.51.49l.82-.27.38.77c.46.9 1.27 1.43 2.12 1.43s1.66-.53 2.12-1.43l.39-.77.82.27c.96.32 1.9.12 2.51-.49.6-.6.8-1.55.48-2.51l-.26-.81.76-.39c.91-.46 1.43-1.27 1.43-2.12s-.52-1.66-1.43-2.12l-.77-.39.27-.81c.32-.97.12-1.91-.48-2.51-.61-.61-1.55-.81-2.51-.49l-.82.27-.39-.77c-.46-.9-1.27-1.43-2.12-1.43zm4.74 5.68l-6.2 6.77-3.74-3.74 1.41-1.42 2.26 2.26 4.8-5.23 1.47 1.36z"></path>
        </g>
      </svg>
    `);

  if (licenseText?.textContent)
    licenseText.textContent = licenseText.textContent.replace(
      "X Corp",
      "Twitter Inc"
    );
}

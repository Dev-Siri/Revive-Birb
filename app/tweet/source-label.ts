import { styled } from "../macros/styled" with { type: "macro" };

import getTweetSource from "../api/tweet-source";
import { addToCache, checkCache } from "../utils/cache";
import { extractInnerText } from "../utils/formatting";


export default async function sourceLabel() {
  if (!location.pathname.includes("/status")) return;

  const tweetId = location.pathname.split("/").at(-1) ?? "";

  let sourceToPresent = await checkCache(tweetId);

  // This waits since `lisener()` calls a function either 1, or 50 times depending on the state of the page
  // So to avoid multiple requests, it waits so incase the previous 1 or 2 sources already fetched, then they will fill the cache
  // and the next 49 attempts or so will not send a request again. Avoiding rate limits
  await new Promise((r) => setTimeout(r, 500))

  if (!sourceToPresent) {
    const source = extractInnerText(await getTweetSource(tweetId));
    addToCache(tweetId, source);
    sourceToPresent = source;
  }

  const sourceLabelDotStyles = styled({
    marginLeft: "4px",
    marginRight: "4px",
    color: "rgb(113, 118, 123)",
  });
  const sourceLabelStyles = styled({
    color: "#1d9bf0",
  })

  const viewContainer = document.querySelector(
    "#react-root > div > div > div.css-175oi2r.r-1f2l425.r-13qz1uu.r-417010.r-18u37iz > main > div > div > div > div > div > section > div > div > div:nth-child(1) > div > div > article > div > div > div:nth-child(3) > div.css-175oi2r.r-12kyg2d > div > div.css-175oi2r.r-1wbh5a2.r-1a11zyx > div > div:nth-child(3)"
  );

  const sourceLabelMarkup = `<span class="css-1jxf684 r-bcqeeo r-1ttztb7 r-qvutc0 r-poiln3" style="${sourceLabelDotStyles}">·</span><a href="https://help.twitter.com/using-twitter/how-to-tweet#source-labels" rel="noopener noreferrer nofollow" target="_blank" class="css-1jxf684 r-bcqeeo r-1ttztb7 r-qvutc0 r-poiln3" style="${sourceLabelStyles}">${sourceToPresent}</a>`;

  if (viewContainer && !viewContainer.innerHTML.includes("https://help.twitter.com/using-twitter/how-to-tweet#source-labels"))
    viewContainer.innerHTML = `${viewContainer.innerHTML}${sourceLabelMarkup}`;
}

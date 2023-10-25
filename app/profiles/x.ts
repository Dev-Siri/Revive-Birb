// Script for https://twitter.com/X
import { querySelectorMemoized } from "../utils";

export default function xProfile() {
  if (document.title !== "Twitter (@twitter) / Twitter") return;

  const parent =
    "#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > main > div > div > div > div > div >";

  // please don't even try to understand this, these are copied from the DOM
  const xTitle = querySelectorMemoized(
    `${parent} div:nth-child(3) > div > div > div > div > div.css-1dbjc4n.r-6gpygo.r-14gqq1x > div.css-1dbjc4n.r-1wbh5a2.r-dnmrzs.r-1ny4l3l > div > div.css-1dbjc4n.r-1wbh5a2.r-dnmrzs.r-1ny4l3l > div > div > span > span:nth-child(1)`
  );
  const xMention = querySelectorMemoized(
    `${parent} div:nth-child(3) > div > div > div > div > div.css-1dbjc4n.r-6gpygo.r-14gqq1x > div.css-1dbjc4n.r-1wbh5a2.r-dnmrzs.r-1ny4l3l > div > div.css-1dbjc4n.r-1awozwy.r-18u37iz.r-1wbh5a2 > div > div > div > span`
  );
  const userUrl = querySelectorMemoized(
    `${parent} div:nth-child(3) > div > div > div > div > div:nth-child(4) > div > a > span`
  );
  // kill me
  const pfp = querySelectorMemoized<HTMLImageElement>(
    `${parent} div:nth-child(3) > div > div > div > div > div.css-1dbjc4n.r-1habvwh.r-18u37iz.r-1w6e6rj.r-1wtj0ep > div.css-1dbjc4n.r-1adg3ll.r-16l9doz.r-6gpygo.r-2o1y69.r-1v6e3re.r-bztko3.r-1xce0ei > div.r-1p0dtai.r-1pi2tsx.r-1d2f490.r-u8s1d.r-ipm5af.r-13qz1uu > div > div.r-1p0dtai.r-1pi2tsx.r-1d2f490.r-u8s1d.r-ipm5af.r-13qz1uu > div > a > div.css-1dbjc4n.r-kemksi.r-1wyvozj.r-633pao.r-u8s1d.r-1v2oles.r-desppf > div > div.r-1p0dtai.r-1pi2tsx.r-1d2f490.r-u8s1d.r-ipm5af.r-13qz1uu > div > img`
  );
  const pfpDiv = querySelectorMemoized(
    `${parent} div:nth-child(3) > div > div > div > div > div.css-1dbjc4n.r-1habvwh.r-18u37iz.r-1w6e6rj.r-1wtj0ep > div.css-1dbjc4n.r-1adg3ll.r-16l9doz.r-6gpygo.r-2o1y69.r-1v6e3re.r-bztko3.r-1xce0ei > div.r-1p0dtai.r-1pi2tsx.r-1d2f490.r-u8s1d.r-ipm5af.r-13qz1uu > div > div.r-1p0dtai.r-1pi2tsx.r-1d2f490.r-u8s1d.r-ipm5af.r-13qz1uu > div > a > div.css-1dbjc4n.r-kemksi.r-1wyvozj.r-633pao.r-u8s1d.r-1v2oles.r-desppf > div > div.r-1p0dtai.r-1pi2tsx.r-1d2f490.r-u8s1d.r-ipm5af.r-13qz1uu > div > div`
  );
  const banner = querySelectorMemoized<HTMLImageElement>(
    `${parent} div:nth-child(3) > div > div > div > a > div > div.r-1p0dtai.r-1pi2tsx.r-1d2f490.r-u8s1d.r-ipm5af.r-13qz1uu > div > img`
  );
  const bannerDiv = querySelectorMemoized(
    `${parent} div:nth-child(3) > div > div > div > a > div > div.r-1p0dtai.r-1pi2tsx.r-1d2f490.r-u8s1d.r-ipm5af.r-13qz1uu > div > div`
  );
  const headerText = querySelectorMemoized(
    `${parent} div.css-1dbjc4n.r-aqfbo4.r-gtdqiz.r-1gn8etr.r-1g40b8q > div:nth-child(1) > div > div > div > div > div > div.css-1dbjc4n.r-16y2uox.r-1wbh5a2.r-1pi2tsx.r-1777fci > div > h2 > div > div > div > div > span.css-901oao.css-16my406.r-1awozwy.r-1nao33i.r-6koalj.r-poiln3.r-b88u0q.r-bcqeeo.r-1udh08x.r-3s2u2q.r-qvutc0 > span > span:nth-child(1)`
  );

  if (userUrl)
    userUrl.textContent = (userUrl.textContent || "twitter.com").replace(
      "x.com",
      "twitter.com"
    );
  if (xTitle) xTitle.textContent = "Twitter";
  if (xMention) xMention.textContent = "@twitter";
  if (pfp) pfp.src = chrome.runtime.getURL("images/twitter.avif");
  if (pfpDiv) {
    const birdBgStyle = `background-image: url(${chrome.runtime.getURL(
      "images/twitter.avif"
    )}); background-color: #1cb8eb`;

    pfpDiv.setAttribute("style", birdBgStyle);
  }
  if (banner) banner.src = chrome.runtime.getURL("images/banner.avif");
  if (bannerDiv) {
    const birdBgStyle = `background-image: url(${chrome.runtime.getURL(
      "images/banner.avif"
    )})`;

    bannerDiv.setAttribute("style", birdBgStyle);
  }
  if (headerText) headerText.textContent = "Twitter";
}

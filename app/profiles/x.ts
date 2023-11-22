// Script for https://twitter.com/X
export default function xProfile() {
  if (document.title !== "Twitter (@twitter) / Twitter") return;

  const xTitle = document.querySelector(
    "#react-root > div > div > div.css-175oi2r.r-13qz1uu.r-417010.r-18u37iz > main > div > div > div > div > div > div:nth-child(3) > div > div > div > div > div.css-175oi2r.r-6gpygo.r-14gqq1x > div.css-175oi2r.r-1wbh5a2.r-dnmrzs.r-1ny4l3l > div > div.css-175oi2r.r-1wbh5a2.r-dnmrzs.r-1ny4l3l > div > div > span > span:nth-child(1)"
  );
  const xMention = document.querySelector(
    "#react-root > div > div > div.css-175oi2r.r-13qz1uu.r-417010.r-18u37iz > main > div > div > div > div > div > div:nth-child(3) > div > div > div > div > div.css-175oi2r.r-6gpygo.r-14gqq1x > div.css-175oi2r.r-1wbh5a2.r-dnmrzs.r-1ny4l3l > div > div.css-175oi2r.r-1awozwy.r-18u37iz.r-1wbh5a2 > div > div > div > span"
  );
  const userUrl = document.querySelector(
    "#react-root > div > div > div.css-175oi2r.r-13qz1uu.r-417010.r-18u37iz > main > div > div > div > div > div > div:nth-child(3) > div > div > div > div > div:nth-child(4) > div > a > span"
  );

  setTimeout(() => {
    const pfp = document.querySelector<HTMLImageElement>(
      "#react-root > div > div > div.css-175oi2r.r-13qz1uu.r-417010.r-18u37iz > main > div > div > div > div.css-175oi2r.r-kemksi.r-1kqtdi0.r-13l2t4g.r-1ljd8xs.r-1phboty.r-16y2uox.r-184en5c.r-61z16t.r-11wrixw.r-1jgb5lz.r-13qz1uu.r-1ye8kvj > div > div:nth-child(3) > div > div > div > div > div.css-175oi2r.r-1habvwh.r-18u37iz.r-1w6e6rj.r-1wtj0ep > div.css-175oi2r.r-1adg3ll.r-bztko3.r-16l9doz.r-6gpygo.r-2o1y69.r-1v6e3re.r-1xce0ei > div.r-1p0dtai.r-1pi2tsx.r-u8s1d.r-1d2f490.r-ipm5af.r-13qz1uu > div > div.r-1p0dtai.r-1pi2tsx.r-u8s1d.r-1d2f490.r-ipm5af.r-13qz1uu > div > a > div:nth-child(3) > div > div.r-1p0dtai.r-1pi2tsx.r-u8s1d.r-1d2f490.r-ipm5af.r-13qz1uu > div > img"
    );
    const pfpDiv = document.querySelector(
      "#react-root > div > div > div.css-175oi2r.r-13qz1uu.r-417010.r-18u37iz > main > div > div > div > div.css-175oi2r.r-kemksi.r-1kqtdi0.r-13l2t4g.r-1ljd8xs.r-1phboty.r-16y2uox.r-184en5c.r-61z16t.r-11wrixw.r-1jgb5lz.r-13qz1uu.r-1ye8kvj > div > div:nth-child(3) > div > div > div > div > div.css-175oi2r.r-1habvwh.r-18u37iz.r-1w6e6rj.r-1wtj0ep > div.css-175oi2r.r-1adg3ll.r-bztko3.r-16l9doz.r-6gpygo.r-2o1y69.r-1v6e3re.r-1xce0ei > div.r-1p0dtai.r-1pi2tsx.r-u8s1d.r-1d2f490.r-ipm5af.r-13qz1uu > div > div.r-1p0dtai.r-1pi2tsx.r-u8s1d.r-1d2f490.r-ipm5af.r-13qz1uu > div > a > div:nth-child(3) > div > div.r-1p0dtai.r-1pi2tsx.r-u8s1d.r-1d2f490.r-ipm5af.r-13qz1uu > div > div"
    );

    const banner = document.querySelector<HTMLImageElement>(
      "#react-root > div > div > div.css-175oi2r.r-13qz1uu.r-417010.r-18u37iz > main > div > div > div > div > div > div:nth-child(3) > div > div > div > a > div > div.r-1p0dtai.r-1pi2tsx.r-u8s1d.r-1d2f490.r-ipm5af.r-13qz1uu > div > img"
    );
    const bannerDiv = document.querySelector(
      "#react-root > div > div > div.css-175oi2r.r-13qz1uu.r-417010.r-18u37iz > main > div > div > div > div > div > div:nth-child(3) > div > div > div > a > div > div.r-1p0dtai.r-1pi2tsx.r-u8s1d.r-1d2f490.r-ipm5af.r-13qz1uu > div > div"
    );
    const headerText = document.querySelector(
      "#react-root > div > div > div.css-175oi2r.r-13qz1uu.r-417010.r-18u37iz > main > div > div > div > div > div > div.css-175oi2r.r-aqfbo4.r-gtdqiz.r-1gn8etr.r-1g40b8q > div:nth-child(1) > div > div > div > div > div > div.css-175oi2r.r-16y2uox.r-1wbh5a2.r-1pi2tsx.r-1777fci > div > h2 > div > div > div > div > span.css-1qaijid.r-bcqeeo.r-qvutc0.r-poiln3.r-b88u0q.r-1awozwy.r-6koalj.r-1udh08x.r-3s2u2q > span > span:nth-child(1)"
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
  }, 50);
}

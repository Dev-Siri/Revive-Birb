export default function theme() {
  if (location.pathname !== "/i/display") return;

  const xMention = document.querySelector(
    "#id__7yd192hxgiq > div.css-175oi2r.r-18u37iz.r-1wbh5a2.r-13hce6t > div > div.css-175oi2r.r-1wbh5a2.r-dnmrzs.r-1ny4l3l > div > span"
  );
  const xUsername = document.querySelector(
    "#id__46bvtms54fn > div.css-175oi2r.r-1awozwy.r-18u37iz.r-1wbh5a2.r-dnmrzs > div > div > div.css-1rynq56.r-bcqeeo.r-qvutc0.r-37j5jr.r-a023e6.r-rjixqe.r-b88u0q.r-1awozwy.r-6koalj.r-1udh08x.r-3s2u2q > span > span"
  );
  const tweet = document.querySelector(
    "div[data-testid=tweetText] > span:nth-child(1)"
  );
  const tweetMention = document.querySelector(
    "div[data-testid=tweetText] > div > span > a"
  );
  const infoText = document.querySelector(
    "#react-root > div > div > div.css-175oi2r.r-13qz1uu.r-417010 > main > div > div > div.css-175oi2r.r-16y2uox.r-1jgb5lz.r-13qz1uu > div > div.css-1rynq56.r-bcqeeo.r-qvutc0.r-37j5jr.r-q4m81j.r-a023e6.r-rjixqe.r-16dba41.r-117bsoe.r-1x0uki6 > span"
  );

  const pfp = document.querySelector<HTMLImageElement>(
    "#layers > div:nth-child(2) > div > div > div > div > div > div.css-175oi2r.r-1ny4l3l.r-18u37iz.r-1pi2tsx.r-1777fci.r-1xcajam.r-ipm5af.r-g6jmlv.r-1awozwy > div.css-175oi2r.r-1wbh5a2.r-htvplk.r-1udh08x.r-1867qdf.r-rsyp9y.r-1pjcn9w > div > div > div > div.css-175oi2r.r-11rk87y.r-1dye5f7 > div.css-175oi2r.r-1ifxtd0.r-1n7yuxj > div > article > div > div > div.css-175oi2r.r-18u37iz > div.css-175oi2r.r-18kxxzh.r-1b7u577.r-onrtq4.r-1awozwy > div > div > div > div.r-1p0dtai.r-1pi2tsx.r-u8s1d.r-1d2f490.r-ipm5af.r-13qz1uu > div > div.r-1p0dtai.r-1pi2tsx.r-u8s1d.r-1d2f490.r-ipm5af.r-13qz1uu > div > div > div:nth-child(3) > div > div.r-1p0dtai.r-1pi2tsx.r-u8s1d.r-1d2f490.r-ipm5af.r-13qz1uu > div > img"
  );
  const pfpDiv = document.querySelector(
    "#layers > div:nth-child(2) > div > div > div > div > div > div.css-175oi2r.r-1ny4l3l.r-18u37iz.r-1pi2tsx.r-1777fci.r-1xcajam.r-ipm5af.r-g6jmlv.r-1awozwy > div.css-175oi2r.r-1wbh5a2.r-htvplk.r-1udh08x.r-1867qdf.r-rsyp9y.r-1pjcn9w > div > div > div > div.css-175oi2r.r-11rk87y.r-1dye5f7 > div.css-175oi2r.r-1ifxtd0.r-1n7yuxj > div > article > div > div > div.css-175oi2r.r-18u37iz > div.css-175oi2r.r-18kxxzh.r-1b7u577.r-onrtq4.r-1awozwy > div > div > div > div.r-1p0dtai.r-1pi2tsx.r-u8s1d.r-1d2f490.r-ipm5af.r-13qz1uu > div > div.r-1p0dtai.r-1pi2tsx.r-u8s1d.r-1d2f490.r-ipm5af.r-13qz1uu > div > div > div:nth-child(3) > div > div.r-1p0dtai.r-1pi2tsx.r-u8s1d.r-1d2f490.r-ipm5af.r-13qz1uu > div > div"
  );

  if (xMention && xUsername)
    setTimeout(() => {
      xMention.textContent = "@twitter";
      xUsername.textContent = "Twitter";
    }, 50);

  if (tweet)
    tweet.textContent =
      "At the heart of Twitter are short messages called Tweets — just like this one — which can include photos, videos, links, text, hashtags, and mentions like ";
  if (tweetMention) tweetMention.textContent = "@twitter";
  if (infoText)
    infoText.textContent =
      "These settings affect all the Twitter accounts on this browser.";
  if (pfp) pfp.src = chrome.runtime.getURL("images/twitter.avif");
  if (pfpDiv) {
    const birdBgStyle = `background-image: url(${chrome.runtime.getURL(
      "images/twitter.avif"
    )}); background-color: #1cb8eb`;

    pfpDiv.setAttribute("style", birdBgStyle);
  }
}

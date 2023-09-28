export default function theme() {
  if (location.pathname !== "/i/display") return;

  const xMention = document.querySelector(
    "div.css-1dbjc4n.r-18u37iz.r-1wbh5a2.r-13hce6t > div > div.css-1dbjc4n.r-1wbh5a2.r-dnmrzs.r-1ny4l3l > div > span"
  );
  const xUsername = document.querySelector(
    "div.css-1dbjc4n.r-1awozwy.r-18u37iz.r-1wbh5a2.r-dnmrzs > div > div > div.css-901oao.r-1awozwy.r-1nao33i.r-6koalj.r-37j5jr.r-a023e6.r-b88u0q.r-rjixqe.r-bcqeeo.r-1udh08x.r-3s2u2q.r-qvutc0 > span > span"
  );
  const tweet = document.querySelector(
    "div[data-testid=tweetText] > span:nth-child(1)"
  );
  const tweetMention = document.querySelector(
    "div[data-testid=tweetText] > div > span > a"
  );

  const pfpWrapperPath =
    "#layers > div:nth-child(2) > div > div > div > div > div > div.css-1dbjc4n.r-1awozwy.r-18u37iz.r-1pi2tsx.r-1777fci.r-1xcajam.r-ipm5af.r-g6jmlv > div.css-1dbjc4n.r-1867qdf.r-1wbh5a2.r-rsyp9y.r-1pjcn9w.r-htvplk.r-1udh08x > div > div > div > div.css-1dbjc4n.r-11rk87y.r-1dye5f7 > div.css-1dbjc4n.r-1ifxtd0.r-1n7yuxj > div > article > div > div > div.css-1dbjc4n.r-18u37iz > div.css-1dbjc4n.r-1awozwy.r-onrtq4.r-18kxxzh.r-1b7u577 > div > div > div > div.r-1p0dtai.r-1pi2tsx.r-1d2f490.r-u8s1d.r-ipm5af.r-13qz1uu > div > div.r-1p0dtai.r-1pi2tsx.r-1d2f490.r-u8s1d.r-ipm5af.r-13qz1uu > div > div > div.css-1dbjc4n.r-kemksi.r-sdzlij.r-1wyvozj.r-1udh08x.r-633pao.r-u8s1d.r-1v2oles.r-desppf > div > div.r-1p0dtai.r-1pi2tsx.r-1d2f490.r-u8s1d.r-ipm5af.r-13qz1uu > div >";

  const pfp = document.querySelector<HTMLImageElement>(`${pfpWrapperPath} img`);
  const pfpDiv = document.querySelector(`${pfpWrapperPath} div`);

  if (xMention) xMention.textContent = "@twitter";
  if (xUsername) xUsername.textContent = "Twitter";
  if (tweet)
    tweet.textContent =
      "At the heart of Twitter are short messages called tweets — just like this one — which can include photos, videos, links, text, hashtags, and mentions like ";
  if (tweetMention) tweetMention.textContent = "@twitter";
  if (pfp) pfp.src = chrome.runtime.getURL("images/twitter.avif");
  if (pfpDiv) {
    const birdBgStyle = `background-image: url(${chrome.runtime.getURL(
      "images/twitter.avif"
    )}); background-color: #1cb8eb`;

    pfpDiv.setAttribute("style", birdBgStyle);
  }
}

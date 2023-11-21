export default function tooltip() {
  const tweetButtonTip = document.querySelector(
    "#layers > div.css-175oi2r.r-zchlnj.r-u8s1d.r-1d2f490.r-ipm5af.r-1p0dtai.r-105ug2t > div > div > div > div > span"
  );

  if (tweetButtonTip?.textContent)
    tweetButtonTip.textContent = tweetButtonTip.textContent.replace(
      "Post",
      "Tweet"
    );
}

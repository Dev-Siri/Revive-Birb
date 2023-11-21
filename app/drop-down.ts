export default function dropDown() {
  const dropdownCopyLink = document.querySelector<HTMLDivElement>(
    "#layers > div.css-175oi2r.r-zchlnj.r-u8s1d.r-1d2f490.r-ipm5af.r-1p0dtai.r-105ug2t > div > div > div > div.css-175oi2r.r-1ny4l3l > div > div.css-175oi2r.r-thhjwx.r-kemksi.r-1q9bdsx.r-qo02w8.r-1udh08x.r-u8s1d > div > div > div > div:nth-child(1)"
  );

  if (dropdownCopyLink) {
    const originalEventListener = dropdownCopyLink.onclick as
      | ((e: MouseEvent) => void)
      | null;

    dropdownCopyLink.onclick = (e) => {
      if (originalEventListener) originalEventListener(e);

      navigator.clipboard.writeText(
        `https://twitter.com${location.pathname}?s=20`
      );
    };
  }
}

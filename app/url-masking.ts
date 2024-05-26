export function replaceXwithTwitterDotCom() {
  if (location.hostname !== "x.com") return;

  location.href = `https://twitter.com${location.pathname}?mx=1`;
}

export default function maskUrls() {
  const pathname = location.pathname.toLowerCase();

  if (pathname === "/x")
    history.replaceState({}, "", "https://twitter.com/twitter");

  if (pathname.startsWith("/compose/post"))
    history.replaceState(
      {},
      "",
      `https://twitter.com${pathname.replace("/post", "/tweet")}`
    );
}

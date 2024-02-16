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

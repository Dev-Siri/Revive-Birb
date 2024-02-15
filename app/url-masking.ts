export default function maskUrls() {
  const pathname = location.pathname.toLowerCase();

  if (pathname === "/x")
    history.pushState({}, "", "https://twitter.com/twitter");

  if (pathname === "/compose/post")
    history.pushState({}, "", "https://twitter.com/compose/tweet");
}

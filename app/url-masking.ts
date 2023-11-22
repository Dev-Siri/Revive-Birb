export default function maskUrls() {
  if (location.pathname.toLowerCase() === "/x")
    history.pushState({}, "", "https://twitter.com/twitter");
}

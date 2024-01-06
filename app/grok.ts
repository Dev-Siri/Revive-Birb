export default function grok() {
  const grokLink = document.querySelector("a[href='/i/grok']");

  // who the hell needs grok
  if (grokLink) grokLink.remove();
}

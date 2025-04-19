function replaceXDotComLinks(nodes: NodeListOf<Element>) {
  for (const node of nodes) {
    if (node instanceof HTMLAnchorElement) {
      if (node.innerText?.includes("x.com"))
        node.innerText = node.innerText.replace("x.com", "twitter.com");
    } else {
      if (node.textContent?.includes("x.com"))
        node.textContent = node.textContent.replace("x.com", "twitter.com");
    }
  }
}

export default function links() {
  const tweetTextLinks = document.querySelectorAll(
    "[data-testid=tweetText] > a"
  );
  const tweetTextSpans = document.querySelectorAll(
    "[data-testid=tweetText] > span"
  );

  replaceXDotComLinks(tweetTextLinks);
  replaceXDotComLinks(tweetTextSpans);
}

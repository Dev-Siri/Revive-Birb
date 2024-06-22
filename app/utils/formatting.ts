export function extractInnerText(htmlString: string) {
  const match = htmlString.match(/<a[^>]*>([^<]*)<\/a>/);
  return match ? match[1] : "";
}

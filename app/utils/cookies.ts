export function getCookie(key: string) {
  const name = `${key}=`;
  const decodedCookie = decodeURIComponent(document.cookie);

  const regex = new RegExp(`(?:^|;\\s*)${name}([^;]*)`);
  const match = decodedCookie.match(regex);

  const value = match?.[1] ? match[1] : "";

  return value;
}

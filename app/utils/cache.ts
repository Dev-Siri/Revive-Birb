import { TWEET_SOURCE_CACHE_NAME_PREFIX } from "../constants/cache";

export function checkCache(tweetId: string) {
  const source = new Promise<string | null>((r) =>
    r(sessionStorage.getItem(`${TWEET_SOURCE_CACHE_NAME_PREFIX}${tweetId}`))
  );

  return source;
}

export function addToCache(tweetId: string, source: string) {
  sessionStorage.setItem(`${TWEET_SOURCE_CACHE_NAME_PREFIX}${tweetId}`, source);
}

import analyticsModal from "./analytics-modal.js";
import auth from "./auth.js";
import bookmarks from "./bookmarks.js";
import dropDown from "./drop-down.js";
import grok from "./grok.js";
import head from "./head/title.js";
import home, { license, moreTweetsLoaded } from "./home.js";
import links from "./links.js";
import logout from "./logout.js";
import messages from "./messages.js";
import allProfiles from "./profiles/all.js";
import xProfile from "./profiles/x.js";
import changeSearchBar from "./search-bar.js";
import theme from "./theme.js";
import tooltip from "./tooltip.js";
import trends from "./trends.js";
import tweetButton from "./tweet-button.js";
import tweetModal from "./tweet-modal.js";
import tweet from "./tweet.js";
import tweetPage from "./tweet/all.js";
import sourceLabel from "./tweet/source-label.js";
import twitterBlue from "./twitter-blue.js";
import maskUrls from "./url-masking.js";
import { listener } from "./utils/listener.js";

// stuff normally called like `home()` and `auth()` only run once.
// the other ones wrapped in `listener()` run on every page update.
function main() {
  // Remove this if you don't have an api key
  let sourceLabelRanOnce = false;

  home();
  auth();
  logout();
  tweetPage();
  grok();
  listener(links);
  listener(head);
  listener(twitterBlue);
  listener(messages);
  listener(bookmarks);
  listener(changeSearchBar);
  listener(license);
  listener(analyticsModal);
  listener(dropDown);
  listener(tweetButton);
  listener(tweet);
  listener(allProfiles);
  listener(trends);
  listener(tweetPage);
  listener(xProfile);
  listener(maskUrls);
  listener(tooltip);
  listener(theme);
  listener(tweetModal);
  listener(moreTweetsLoaded);
  // remove all of this if you don't have an api key
  listener(() => {
    if (!location.pathname.includes("/status")) sourceLabelRanOnce = false;
  });
  listener(async () => {
    if (sourceLabelRanOnce) return;

    await sourceLabel();

    sourceLabelRanOnce = true;
  }, document.getElementsByTagName("title")[0]);
}

// HACK: Runs when the page loads enough (SPA workaround)
const observer = new MutationObserver(main);

observer.observe(document.body, { childList: true });

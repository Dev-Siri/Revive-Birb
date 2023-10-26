import auth from "./auth.js";
import head from "./head/title.js";
import home, { moreTweetsLoaded } from "./home.js";
import logout from "./logout.js";
import allProfiles from "./profiles/all.js";
import xProfile from "./profiles/x.js";
import changeSearchBar from "./search-bar.js";
import theme from "./theme.js";
import trends from "./trends.js";
import tweetButton from "./tweet-button.js";
import tweetPage from "./tweet/all.js";
import { listener } from "./utils.js";

function main() {
  head();
  home();
  auth();
  logout();
  tweetPage();
  changeSearchBar();
  listener(moreTweetsLoaded);
  listener(tweetButton);
  listener(allProfiles);
  listener(trends);
  listener(tweetPage);
  listener(xProfile);
  listener(theme);
}

// HACK: Runs when the page loads enough (SPA workaround)
const observer = new MutationObserver(main);

observer.observe(document.body, { childList: true });

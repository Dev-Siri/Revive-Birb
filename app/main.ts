import auth from "./auth.js";
import head from "./head/title.js";
import home from "./home.js";
import logout from "./logout.js";
import xProfile from "./profiles/x.js";
import theme from "./theme.js";
import tweetButton from "./tweet-button.js";
import { listener } from "./utils.js";

function main() {
  head();
  home();
  auth();
  theme();
  logout();
  tweetButton();
  theme();
  xProfile();
  listener(xProfile);
  listener(theme);
}

const observer = new MutationObserver(main);

const config = { childList: true };
observer.observe(document.body, config);

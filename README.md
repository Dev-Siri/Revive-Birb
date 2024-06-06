# Blue Bird

An extremely simple chrome extension I made for personal use to replace the new Twitter logo (𝕏) with the old bird.

## What does this do?

1. It replaces the 𝕏 logo svg with the previously used blue bird in the main application. (visible on the sidebar)

2. Modifies the tab title (`document.title`)

- If its just a normal navigation (eg. Home / X or Notification), then it checks if the last character is "X", then it replaces it with "Twitter". So Home / X would become Home / Twitter.

- While viewing a Tweet (basically being on the `/status/[statusId]` url), It says "\[username\] on X: rest of the tweet". This Extension uses a regex (that I didn't write) to revert it back to "\[username\] on Twitter: rest of the tweet"

- When the title contains the word "post" that was set by the Twitter website itself, then it replaces it with the word "Tweet".

3. It also preloads and injects a `loading.js` (with its styles) which replaces the logo on the loading screen.

4. For the new Twitter official account which is now @X, it now replaces its profile picture title, name and other stuff with the previous "Twitter" info. This may not be accurate with the account but still its just an addon I thought would be nice.

5. Most common one to spot, the "Tweet" button on the sidebar is now also back to "Tweet" instead of "Post"

6. This is very hard to notice, but a detail nevertheless. When you hover over the compose Tweet button (or what it shows as just a leaf) while on a medium sized screen, then it says the word "Post" in the tooltip. This extension DOES replace that as well. Same happens when you hover over the Retweet button, it says "Repost", but this extension reverts that back to "Retweet" as well.

7. Clicking on the Retweet button reveals a dropdown with two options, "Quote" and "Repost". Both of which are not what Twitter really calls them. So this reverts even that back to "Quote Tweet" and "Retweet"

8. This extension even replaces the retweet text above a tweet. So if someone retweets a tweet, it shows a little gray text on the top that says "\[username\] reposted" (that is now after the rebrand). This extensions actually does replace this text to again say "\[username\] retweeted". Don't worry, I tested this on [teo](https://twitter.com/teo_b0)'s account. The account has 211k Tweets, and most of them are retweets (the bio literally says "i retweet a lot"). I went and checked the performance of the extension on the account, and with the recursive approach this extension takes, it surprisingly didn't slow down at all or slow down to be even noticed. I'd doubt you'll have any performance problems. But all of the "reposted" texts will be replaced with "retweeted".

9. In the right view with the Trends and stuff, you'll notice the legal text saying "X Corp". But this extension changes that to the now non-existent Twitter Inc. Still, why not. I'm trying to restore as much of the experience as possible.

10. When opening a profile, look at the top to the Tweet count, with this extension, it replaces the "N posts" to "N Tweets". Also, look to the right at the trends (The "what's happening" section below the search bar), you'll notice the number of tweets for each trend says "N Tweets" instead of "N posts". Then if you look at a certain trend that might say "Only on X", you'll see its replaced with "Only on Twitter". Can't miss those small details.

There are still way more X replacements with this extension, you can see for yourself. Remember, I'm still working on this extension, and Elon is updating the website too. So if you see any X replacement that has not yet been replaced, then you can send a PR fixing it / an issue pointing it out and I'll try to implement its replacement.

### When was this last updated meaningfully?

#### May 29th, 2024

## How to use this?

- Clone the repo

```sh
$ git clone https://github.com/Dev-Siri/Blue-Bird.git
```

- For this step, you need to make sure you have [buntime](https://bun.sh) installed. Then run the build script:

```
$ bun ./build.ts
```

This will create a `dist` directory.

- Then open chrome, goto **chrome://extensions** and then turn on Developer Mode (if not already on).

- Click on load unpacked and then select the `dist` directory.

And now you have achieved bird.

## License

This project is [MIT Licensed](LICENSE).

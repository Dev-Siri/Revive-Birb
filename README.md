# Blue Bird

An extremely simple chrome extension I made for personal use to replace the new Twitter logo (𝕏) with the old bird.

## What does this do?

First of all, it replaces the 𝕏 logo svg with the previously used blue bird in the main application. And lastly, it also modifies the `document.title`. This modification goes many ways.

- If its just a normal navigation (eg. Home / X or Notification), then it checks if the last character is "X", then it replaces it with "Twitter"
- For the messages tab in Twitter, it for some reason sets the title as just X. So to fix this, a extra patch is written which checks if the `document.title` is just X, and then transforms it to "Messages / Twitter".

It also preloads and injects a `loading.js` (with its styles) which replaces the logo on the loading screen.
For the new Twitter official account which is now @X, it now replaces its profile picture title, name and other stuff with the previous "Twitter" info. This may not be accurate with the account but still its just an addon I thought would be nice.

The extension does very little, but these little changes can make you still make you feel like the logo never changed, primarily because of the X that is shown on every page now transforming into the old bird.

#### Update (November 21, 2023)

The update to [twitter.com](https://twitter.com) broke the extension on the loading screen / tweet header texts. This update patches those issues + addresses another long existing issue where reply tweet text will get reset to "Tweet your reply". now the extension adds one more conditional check to ensure nothing breaks. This issue persisted because Twitter uses content editable divs and makes them act as inputs, so its not as straight forward as setting the `placeholder` property.

#### Update (October 25, 2023)

The extension now memoizes certain `querySelector` calls to improve performance but increases memory usage. And now it also works for more headerTexts, post replacements and other page updates without sacrificing UX (perf).
The extension also fixes the previously existing issue where some stuff would revert back on client-side navigation. Now the `MutationObserver` listens to the `document.documentElement` which surprisingly works with little overhead and listens to updates on SPAs correctly.

#### Update (August 23, 2023)

Again, another change has been made on the site. The verified (twitter blue) navigation icon has been changed to the X logo. This extension reverts it back to the verified symbol used before.

#### Update (August 15, 2023)

Now the "new tweet" buttons texts have been changed from "Tweet" to "Post". (why elon) The recent update of this extension fixes this too by reverting the change.

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

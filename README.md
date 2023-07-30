# Blue Bird

An extremely simple chrome extension I made for personal use to replace the new Twitter logo (𝕏) with the old bird.

## What does this do?

First of all, it replaces the 𝕏 logo svg with the previously used blue bird in the main application. And lastly, it also modifies the `document.title`. This modification goes many ways.

- If its just a normal navigation (eg. Home / X or Notification), then it checks if the last character is "X", then it replaces it with "Twitter"
- For the url (specifically) `https://twitter.com/X` which is now the new official Twitter account with /twitter being locked, doesn't stop me to change the title. Whenever you visit it, instead of the title being _X (@X) / X_, it will instead display as _Twitter (@twitter) / Twitter_. This may not be accurate but this does drive it home to the original logo.
- For the messages tab in Twitter, it for some reason sets the title as just X. So to fix this, a extra patch is written which checks if the `document.title` is just X, and then transforms it to "Messages / Twitter".
- Preloads and injects a `loading.js` (with its styles) which replaces the logo on the loading screen.

The extension does very little, but these little changes can make you still make you feel like the logo never changed, primarily because of the X that is shown on every page now transforming into the old bird.

## How to use this?

- Clone the repo

```sh
$ git clone https://github.com/Dev-Siri/Blue-Bird.git
```

- Then open chrome, goto **chrome://extensions** and then turn on Developer Mode (if not already on).

- Click on load unpacked and then select the cloned folder.

And now you have achieved bird.

## License

This project is [MIT Licensed](LICENSE).

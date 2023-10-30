const injectedScript = document.createElement("script");
injectedScript.type = "module";
injectedScript.src = chrome.runtime.getURL("injects/scripts/loading.js");

const faviconUrl = document.createElement("div");

faviconUrl.id = "favicon-url";
faviconUrl.innerHTML = chrome.runtime.getURL("images/favicon.ico");

document.documentElement.append(injectedScript, faviconUrl);

const injectedScript = document.createElement("script");
injectedScript.src = chrome.runtime.getURL("injects/scripts/loading.js");

document.documentElement.append(injectedScript);

const injectedScript = document.createElement("script");
injectedScript.src = chrome.runtime.getURL("app/loading.js");

document.documentElement.append(injectedScript);

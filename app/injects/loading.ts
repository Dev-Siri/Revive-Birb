const injectedScript = document.createElement("script");
injectedScript.type = "module";
injectedScript.src = chrome.runtime.getURL("injects/scripts/loading.js");

document.documentElement.appendChild(injectedScript);

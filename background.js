// Remove the missing WG-polyfill.js import
importScripts('lib/browser-polyfill.js');
importScripts('umami.js'); // Only import the files you have

console.log("Service worker initialized.");

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "ping") {
        sendResponse({ success: true });
    }
    return true;  // Keep the message channel open for asynchronous response
});

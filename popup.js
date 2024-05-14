import { questionAnswerBank } from "./answers.js";

document.getElementById("runScript").addEventListener("click", function () {
  browser.tabs
    .query({ active: true, currentWindow: true })
    .then(function (tabs) {
      const tabId = tabs[0].id;
      // Check if the content script has already been injected
      browser.tabs
        .executeScript(tabId, { code: "typeof injected === 'undefined'" })
        .then(function (result) {
          if (result && result[0]) {
            // Content script hasn't been injected, so inject it
            browser.tabs.executeScript(tabId, {
              // load answers.js first
              code:
                "var questionAnswerBank = " +
                JSON.stringify(questionAnswerBank),
            });
            browser.tabs.executeScript(tabId, {
              file: "contentScript.js",
            });
          } else {
            console.log("Content script already injected");
            // Send a message to the content script to trigger some action
            browser.tabs
              .sendMessage(tabId, { action: "fillForm" })
              .then(function (response) {
                console.log("Message sent to content script:", response);
              })
              .catch(function (error) {
                console.error(
                  "Error sending message to content script:",
                  error
                );
              });
          }
        })
        .catch(function (error) {
          console.error("Error checking injection status:", error);
        });
    });
});

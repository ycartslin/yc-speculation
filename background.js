chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.type === "notify") {
        chrome.notifications.create("", {
            type: "basic",
            iconUrl: "icon.png",
            title: "Application Status Update",
            message: request.message,
            priority: 2
        });
    }
});
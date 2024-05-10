function checkStatus() {
    const statusElement = document.querySelector("selector-for-status"); // Add the correct selector for status
    const resultElement = document.querySelector("selector-for-result"); // Add the correct selector for result

    if (!statusElement || !resultElement) {
        console.log("Status elements not found.");
        return;
    }

    const stage = statusElement.textContent.trim();
    const result = resultElement.textContent.trim();
    let message = "";

    if (stage === 'done_voting' && result === 'undecided') {
        message = "Interview stage reached: Decision is still pending.";
    } else if (stage === 'done_voting' && result === 'decided' && !document.querySelector("selector-for-interview-request")) {
        message = "Application rejected: No interview request made.";
    } else if (stage === 'in_voting' && result === 'undecided') {
        message = "Application is still being decided on.";
    }

    if (message) {
        chrome.runtime.sendMessage({ type: "notify", message: message });
    }
}

// Check status every 30 seconds
setInterval(checkStatus, 30000);

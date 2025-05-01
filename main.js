document.querySelectorAll(".copy").forEach(copyButton => {
    copyButton.addEventListener("click", () => {
        const targetSelector = '.' + copyButton.dataset.copy;
        const targetElement = document.querySelector(targetSelector);
        if (targetElement) {
            const text = targetElement.textContent.trim();
            navigator.clipboard.writeText(text)
                .then(() => alert("Code copied!"))
                .catch(err => alert("Failed to copy: " + err));
        } else {
            alert("Target element not found.");
        }
    });
});

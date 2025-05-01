document.querySelectorAll(".copy").forEach(copyButton => {
    copyButton.addEventListener("click", () => {
        const targetSelector = '.' + copyButton.dataset.copy;
        const targetElement = document.querySelector(targetSelector);
        if (targetElement) {
            const rawText = targetElement.textContent;
            const cleanedText = rawText.replace(/\s+/g, ''); // Remove all whitespace
            navigator.clipboard.writeText(cleanedText)
                .then(() => alert("Code copied without whitespace!"))
                .catch(err => alert("Failed to copy: " + err));
        } else {
            alert("Target element not found.");
        }
    });
});

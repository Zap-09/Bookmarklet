document.addEventListener("DOMContentLoaded", function () {
    const copyButton = document.getElementById('copyButton');
    const codeElement = document.querySelector('code[data-code="booklet"]');
  
    copyButton.addEventListener('click', async function () {
      const codeText = codeElement?.textContent?.trim();
      if (!codeText) return;
  
      try {
        await navigator.clipboard.writeText(codeText);
        copyButton.classList.add('copied');
        copyButton.textContent = "Copied!";
        
        setTimeout(() => {
          copyButton.classList.remove('copied');
          copyButton.textContent = "Copy";
        }, 1500);
      } catch (err) {
        console.error("Copy failed:", err);
      }
    });
  });
  

  document.addEventListener("DOMContentLoaded", function () {
    const copyButton = document.getElementById('copyButton2');
    const codeElement = document.querySelector('pre[data-code="code"]');
  
    copyButton.addEventListener('click', async function () {
      const codeText = codeElement?.textContent?.trim();
      if (!codeText) return;
  
      try {
        await navigator.clipboard.writeText(codeText);
        copyButton.classList.add('copied');
        copyButton.textContent = "Copied!";
        
        setTimeout(() => {
          copyButton.classList.remove('copied');
          copyButton.textContent = "Copy";
        }, 1500);
      } catch (err) {
        console.error("Copy failed:", err);
      }
    });
  });
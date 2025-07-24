function copyText(section,buttonEle){
    let toCopy = document.getElementById(section);
    let text = toCopy.textContent.trim();

    let button = document.getElementById(buttonEle)
    
    navigator.clipboard.writeText(text).then(() => {
        button.classList.add("copied");
        button.textContent = "Copied!";
        setTimeout(() => {
            button.classList.remove("copied");
            button.textContent = "Copy"
        }, 1500);
    })
}

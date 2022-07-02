document.addEventListener('DOMContentLoaded', () => {
    const codeBlock = document.getElementById('code');
    const copyButton = document.getElementById('copy-button');
    const copySuccess = document.getElementById('copy-success');

    const copyTextHandler = () => {
        // copy to the clipboard
        const text = codeBlock.innerText;
        var element = document.createElement('textarea');
        document.body.appendChild(element);
        element.value = text;
        element.select();
        document.execCommand('copy');
        document.body.removeChild(element);

        // shoe the copy success message
        copySuccess.classList.add('show-message');
        setTimeout(() => {
            copySuccess.classList.remove('show-message')
        }, 2500);
    };

    copyButton.addEventListener('click', copyTextHandler);
    hljs.highlightAll();

})

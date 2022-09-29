const inputText = document.querySelector('#name-input');
const output = document.querySelector('#name-output');
inputText.addEventListener('input', () => {
    output.textContent = inputText.value;
})

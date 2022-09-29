const inputRange = document.querySelector('#font-size-control');
const spanText = document.querySelector('#text')
inputRange.addEventListener('input', () => {
    spanText.style.fontSize = `${inputRange.value}px`;
    console.log(inputRange.value);
})
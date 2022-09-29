const formLogEl = document.querySelector('.login-form')

formLogEl.addEventListener('submit', onTextForm)

function onTextForm(event) {
    event.preventDefault();
    const email = event.currentTarget.email.value;
    const password = event.currentTarget.password.value;
if (email.length < 1 || password.length < 1) {
    alert('Не заповнене поле((')
} else {
    const passwordValue = event.currentTarget.elements.password.value;
    const emailValue = event.currentTarget.elements.email.value
    console.log({email: emailValue, password: passwordValue});
}
    // const objectInfo = new FormData(event.currentTarget)
    // objectInfo.forEach((value, name) => {
    //     console.log(name, value);
    // })
    event.currentTarget.reset();
}
const inputName = document.querySelector('#validation-input');


inputName.addEventListener('input', () => {
    
})



inputName.addEventListener('blur', () => {
if (inputName.value.length === 6 && inputName.classList.contains('invalid')) {
      return  inputName.classList.replace('invalid','valid')
} else if (inputName.value.length === 6 ) {
       return inputName.classList.add('valid')
    }
        inputName.classList.add('invalid')
})


// inputName.addEventListener('blur', () => {
// if (inputName.value.length === 6 && inputName.classList.contains('invalid')) {
//       inputName.classList.remove('invalid')
//      return inputName.classList.add('valid')
// } else if (inputName.value.length === 6 ) {
//        return inputName.classList.add('valid')
//     }
//         inputName.classList.add('invalid')
// })

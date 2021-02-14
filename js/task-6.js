const textInput = document.querySelector('#validation-input');

textInput.addEventListener('blur', validationOfInput)

function validationOfInput() {
    if (textInput.value.length != Number(textInput.getAttribute('data-length'))) {
        textInput.classList.remove('valid')
        textInput.classList.add('invalid')
    } else {
        textInput.classList.remove('invalid');
        textInput.classList.add('valid');
    }
 }
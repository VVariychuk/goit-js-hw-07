const refs = {
    input: document.querySelector('#name-input'),
    spanFill: document.querySelector('#name-output')
}

refs.input.addEventListener('input', onInputChange);
function onInputChange(event) {
    if (event.currentTarget.value === '') { 
        refs.spanFill.textContent = 'незнакомец'
    } else {
        refs.spanFill.textContent = event.currentTarget.value;
    }
  }
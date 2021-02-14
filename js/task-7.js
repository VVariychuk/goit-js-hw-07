const range = document.querySelector('#font-size-control')
const text = document.querySelector('#text')
text.style.fontSize = range.value + 'px'
range.addEventListener('input', fontSizeChange)

function fontSizeChange() {
    text.style.fontSize = range.value + 'px'
    }
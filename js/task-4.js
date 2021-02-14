const refs = {
  btnIncr: document.querySelector('[data-action="increment"]'),
  btnDecr: document.querySelector('[data-action="decrement"]'),
  counterRef: document.querySelector('#value'),
};

let counterValue = Number(refs.counterRef.textContent);

const increment = () => {
  counterValue += 1;
  refs.counterRef.textContent = counterValue;
};

const decrement = () => {
    if (counterValue >= 1) {
        counterValue -= 1;
        refs.counterRef.textContent = counterValue;
    }  
};

refs.btnIncr.addEventListener('click', increment);
refs.btnDecr.addEventListener('click', decrement);

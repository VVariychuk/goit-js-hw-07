const itemsEl = document.querySelectorAll('.item');
console.log(`В списке ${itemsEl.length} категории.`);

const makeMassege = () => {
    const titlesEl = document.querySelectorAll('h2')
    const itemListEl = document.querySelectorAll('.item > ul')
    for (let i = 0; i < titlesEl.length; i += 1) {
        console.log('Категория:', titlesEl[i].textContent);
        console.log('Количество элементов:', itemListEl[i].childElementCount);
    }
    return
}
makeMassege()
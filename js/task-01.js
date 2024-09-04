const categories = document.querySelector('#categories')
console.log(`Number of categories: ${categories.children.length}`);

const category = document.querySelectorAll('.item').forEach(elem => {
    console.log(`Category: ${elem.firstElementChild.textContent}`);
    console.log(`Elements: ${elem.lastElementChild.children.length}`);
})


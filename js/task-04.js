const counter = document.querySelector('#value')

const decrement = document.querySelector('button[data-action="decrement"]')
decrement.addEventListener('click', onClickDecr)

const increment = document.querySelector('button[data-action="increment"]')
increment.addEventListener('click', onClickIncr)

let value = Number(counter.textContent)

function onClickDecr(evt) {
    value -= 1;
    return counter.textContent = value;

}

function onClickIncr(evt) {
    value += 1;
    return counter.textContent = value;
}

const input = document.querySelector('#validation-input')

input.addEventListener('blur', onInput)

function onInput(evt) {
    if (Number(evt.currentTarget.dataset.length) === evt.currentTarget.value.length) {
        input.classList.replace('invalid', 'valid')
    }
    else if ((Number(evt.currentTarget.dataset.length) !== evt.currentTarget.value.length)) {
        input.classList.add('invalid')
    }
}

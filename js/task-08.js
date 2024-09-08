const form = document.querySelector('.login-form')

form.addEventListener('submit', onSubmit)

function onSubmit(evt) {
    evt.preventDefault();
    const elem = evt.target.elements;
    if (elem.email.value === "" || elem.password.value === "") {
        alert('Заполни все поля!')
        return;
    }

    console.log(`user = {email: ${elem.email.value}, password: ${elem.password.value}}`);
    form.reset();
}
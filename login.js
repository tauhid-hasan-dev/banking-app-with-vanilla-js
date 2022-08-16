console.log('first')
const btnSubmit = document.getElementById('btn-submit');
btnSubmit.addEventListener('click', () => {
    const inputEmail = document.getElementById('user-email');
    const inputEmailValue = inputEmail.value;
    console.log(inputEmailValue);
    const inputPassword = document.getElementById('user-password');
    const inputPasswordValue = inputPassword.value;
    console.log(inputPasswordValue);
    if (inputEmailValue === 'tauhidhasan@gmail.com' && inputPasswordValue === 'bankproject') {
        window.location.href = 'bank.html'
    } else {
        alert('Plese try again')
    }
})
console.log('first')
const btnSubmit = document.getElementById('btn-submit');
btnSubmit.addEventListener('click', () => {
    const inputEmail = document.getElementById('user-email');
    const email = inputEmail.value;
    console.log(email);
    const inputPassword = document.getElementById('user-password');
    const password = inputPassword.value;
    console.log(password);
    if (email === 'tauhidhasan@gmail.com' && password === 'bankproject') {
        window.location.href = 'bank.html'
    } else {
        alert('Plese try again')
    }
})
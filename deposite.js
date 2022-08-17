//deposite 
const btnDeposit = document.getElementById('btn-deposite');

btnDeposit.addEventListener('click', () => {
    const inputDeposit = document.getElementById('input-deposit');
    let newDepositeAmount = parseFloat(inputDeposit.value);
    inputDeposit.value = '';
    if (isNaN(newDepositeAmount)) {
        alert('Please enter a valid number');
        return;
    }
    //for non-input (element other that input and textarea) use innerText to get the text
    const depositeTotalElement = document.getElementById('deposite-total');
    let previousDepositeTotal = parseFloat(depositeTotalElement.innerText);
    const currentDepositeTotal = previousDepositeTotal + newDepositeAmount;

    //add numbers to set the total deposite
    depositeTotalElement.innerText = currentDepositeTotal;
    // clear the deposite input field
    inputDeposit.value = ''; // akhane .value diyei likhte hobe

    //get balance current total
    const balanceTotal = document.getElementById('balance-total');
    const previousBalance = parseFloat(balanceTotal.innerText);

    //current balance total
    const currentBalanceTotal = previousBalance + newDepositeAmount;
    //set the balance total
    balanceTotal.innerText = currentBalanceTotal;

})







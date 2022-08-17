const btnWithdraw = document.getElementById('btn-withdraw');

btnWithdraw.addEventListener('click', () => {
    //get the input element and the value
    const inputWithdraw = document.getElementById('input-withdraw');
    const withdrawAmount = parseFloat(inputWithdraw.value);
    inputWithdraw.value = '';
    if (isNaN(withdrawAmount)) {
        alert('Please enter a valid number');
        return;
    }
    //get the withdraw total element and the current inner text of it 
    const withdrawTotal = document.getElementById('withdraw-total');
    const currentWithdrawTotal = parseFloat(withdrawTotal.innerText);

    //get the balance total
    const balanceTotal = document.getElementById('balance-total');
    const previousBalance = parseFloat(balanceTotal.innerText);


    if (previousBalance < withdrawAmount) {
        alert('taka nai');
        return;
    }
    // update the inner text of the withdraw total element and add to the previous total
    withdrawTotal.innerText = withdrawAmount + currentWithdrawTotal;
    //update the balance total
    balanceTotal.innerText = previousBalance - withdrawAmount;
})
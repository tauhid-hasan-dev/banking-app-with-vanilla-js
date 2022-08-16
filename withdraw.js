const btnWithdraw = document.getElementById('btn-withdraw');

btnWithdraw.addEventListener('click', () => {
    //get the input element and the value
    const inputWithdraw = document.getElementById('input-withdraw');
    const withdrawAmount = inputWithdraw.value;

    //get the withdraw total element and the current inner text of it 
    const withdrawTotal = document.getElementById('withdraw-total');
    const currentWithdrawTotal = withdrawTotal.innerText;

    // update the inner text of the withdraw total element and add to the previous total
    withdrawTotal.innerText = +withdrawAmount + +currentWithdrawTotal;

    //get the balance total
    const balanceTotal = document.getElementById('balance-total');
    const previousBalance = balanceTotal.innerText;

    balanceTotal.innerText = +previousBalance - +withdrawAmount;
})
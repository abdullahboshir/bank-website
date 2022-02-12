
// handle deposit button event
document.getElementById("deposit-button").addEventListener("click", function () {
    // get the amount deposited 
    const depositInput = document.getElementById("deposit-input");
    const newDepositText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositText);
    // update deposit total 
    const depositTotal = document.getElementById("deposit-total");
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);
    const newDepositTotal = previousDepositAmount + newDepositAmount;
    depositTotal.innerText = newDepositTotal;
    
    // update account balance 
    const balanceTotal = document.getElementById("balance-total");
    const balanceTotalText = balanceTotal.innerText;
    const previousbalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousbalanceTotal + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;
      // clear the deposit input field 
      depositInput.value = "";
});

    // handle withdraw event handler
    document.getElementById("withdraw-button").addEventListener("click", function () {
    const withdrawInput = document.getElementById("withdraw-input");
    const withdrawAmountText = withdrawInput.value;
        const newWithdrawAmount = parseFloat(withdrawAmountText);
        withdrawInput.value = ""; 
        // set withdraw total 
        const withdrawTotal = document.getElementById("withdraw-total");
        const previousWithdrawText = withdrawTotal.innerText;
        const previousWithdrawTotal = parseFloat(previousWithdrawText);
        const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
        withdrawTotal.innerText = newWithdrawTotal;

        
        // update balance 
        const balanceTotal = document.getElementById("balance-total");
        const previousBalanceText = balanceTotal.innerText;
        const previousbalanceTotal = parseFloat(previousBalanceText);

        const newBalanceTotal = previousbalanceTotal - newWithdrawAmount;
        balanceTotal.innerText = newBalanceTotal;
    
    
});
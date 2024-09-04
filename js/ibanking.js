document.getElementById('deposit-button').addEventListener('click',function(){
    const depositInputField = document.getElementById('deposit-input');
 
    const inputText = depositInputField.value;
    const newDepositAmount = parseFloat(inputText);
    console.log(typeof newDepositAmount);
 
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositText = depositTotal.innerText;
    // console.log(previousDepositText);
    const previousDepositAmount = parseFloat(previousDepositText);
    // console.log(typeof previousDepositAmount);
 
    const newDepositTotal = previousDepositAmount + newDepositAmount; 
   
    depositTotal.innerText = newDepositTotal;
 
 
    depositInputField.value = ''
 
 
 
    const previousBalanceTotal = document.getElementById('balance-total');
    const previousBalanceTotalText = previousBalanceTotal.innerText;
    const previousBalanceTotalAmount = parseFloat(previousBalanceTotalText);
    const newBalanceTotal = previousBalanceTotalAmount + newDepositAmount;

    previousBalanceTotal.innerText = newBalanceTotal;
    
 
})




document.getElementById("withdraw-button").addEventListener('click',function(){
    const withdrawInputField = document.getElementById('withdraw-input');
    const withdrawInputText = withdrawInputField.value;
    const newWithdrawAmount =parseFloat(withdrawInputText);
    

    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawTotalAmount = parseFloat(withdrawTotalText);
    

    const newWithdrawTotal = previousWithdrawTotalAmount -  newWithdrawAmount;
    withdrawTotal.innertext = newWithdrawTotal;


    const previousBalanceTotal = document.getElementById('balance-total');
    const previousBalanceTotalText = previousBalanceTotal.innerText;
    const previousBalanceTotalAmount = parseFloat(previousBalanceTotalText);
    const newBalanceTotal = previousBalanceTotalAmount - newWithdrawAmount;
    previousBalanceTotal.innerText = newBalanceTotal;


    withdrawInputField.value =''





})


 
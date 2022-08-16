// step 1 : add event listener in withdraw button
document.getElementById("withdraw_btn").addEventListener("click", function () {
  //   step 2 : get the input ammount from input field
  const withdrawInput = document.getElementById("withdraw_input");
  //   step 2.1 : get the value of the withdraw field by .value
  const newWithdrawValueString = withdrawInput.value;
  //   step 2.2 : when we get a value from html that would comes as a string make it number by using parseFloat for our calculation
  //   step 7 : clear the input field after the operation
  withdrawInput.value = "";
  const newWithdrawValue = parseFloat(newWithdrawValueString);
  if (isNaN(newWithdrawValue)) {
    alert("Sir, Please put the amount number of your withdraw!!");
    return;
  }
  //   step 3 : get the previous value of the withdraw field
  const previousWithdrawCount = document.getElementById("withdraw_count");
  //   step 3.1 : get the value of the withdraw field by .value
  const previousWithdrawString = previousWithdrawCount.innerText;
  //   step 3.2 : when we get a value from html that would comes as a string make it number by using parseFloat for our calculation
  const previousWithdraw = parseFloat(previousWithdrawString);
  //   step 5 : get the total balance amount
  const totalBalance = document.getElementById("total_balance");
  const totalBalanceAmountString = totalBalance.innerText;
  const totalBalanceAmount = parseFloat(totalBalanceAmountString);
  // step extra 1 : Withdraw is more then balance
  if (newWithdrawValue > totalBalanceAmount) {
    alert("Sorry Sir!!! Apnar Bap er bank a eto taka nai!");
    return;
  }
  //   step 4 : calculate the withdraw amount
  const totalWithdrawAmount = previousWithdraw + newWithdrawValue;

  //   step 4.1 : set the total amount on the withdraw output in html
  previousWithdrawCount.innerText = totalWithdrawAmount;
  //   step 6 : calculate the balance total
  const currentTotal = totalBalanceAmount - newWithdrawValue;

  //   step 6.5 : set the calculated value on balance total
  totalBalance.innerText = currentTotal;
});

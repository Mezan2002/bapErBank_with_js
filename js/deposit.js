// step 1 : add the click handler on the button
document.getElementById("deposit_btn").addEventListener("click", function () {
  // step 2 : get the deposit input by id and store it
  const depositInput = document.getElementById("deposit_input");
  const depositAddString = depositInput.value;
  const newDepositAdd = parseFloat(depositAddString);
  // step extra : if the input is not a number
  if (isNaN(newDepositAdd)) {
    alert("Sir, Please put the amount number of your deposit!!");
    return;
  }
  //   step 3 : get the deposit count
  const depositCount = document.getElementById("deposit_count");
  const previousDepositCountAmountString = depositCount.innerText;
  const previousDepositCountAmount = parseFloat(
    previousDepositCountAmountString
  );
  //   step 4 :
  const totalDeposit = newDepositAdd + previousDepositCountAmount;
  depositCount.innerText = totalDeposit;

  //   step 5 :
  const totalBalance = document.getElementById("total_balance");
  const previousTotalBalanceString = totalBalance.innerText;
  const previousTotalBalance = parseFloat(previousTotalBalanceString);
  //   step 6 :
  const currentTotalBalance = previousTotalBalance + newDepositAdd;

  totalBalance.innerText = currentTotalBalance;

  //   step 7 : remove the deposit number
  depositInput.value = "";
});

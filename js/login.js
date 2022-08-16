// step 1 : add click handler with the submit button
document.getElementById("submit_btn").addEventListener("click", function () {
  // step 2   : get the email
  // step 2.1 : set an id on the email field on html to take the email
  // step 2.2 : get the email field by the id and set it on a variable
  // step 2.3 : call the email field with .value and put the value on a new variable
  // you can check it by console.log
  const emailField = document.getElementById("user_email");
  const email = emailField.value;
  // step 3   : get the password
  // step 3.1 : set an id on the password field on html to take the email
  // step 3.2 : get the email field by the id and set it on a variable
  // step 3.3 : call the email field with .value and put the value on a new variable
  const password_field = document.getElementById("user_password");
  const password = password_field.value;
  // Danger : this is not the right way to verify an user info but as a begginer we do this
  // step 4 : verify email and password
  if (email === "baper@bank.com" && password === "bapKaBeta") {
    window.location.href = "bank.html";
  } else {
    alert("Sorry Sir!!! You put a wrong email or password.");
  }
});

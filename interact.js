//######## LAB 2-3 EMAIL SIGNUP ########
// alert("hey 2.3");//COMMENT OUT ONCE CONNECTED TO YOUR HTML PAGE
//==== VARIABLES =========
var joinList;
var userInput;
var confirmAction = "me@example.com";
var validEmail = "idayatsanni@gmail.com";
//==== LOGIC =============

joinList = window.confirm("Would you like to join my mailing list?");
if (joinList === true) {
  userInput = window.prompt(confirmAction);
}

if (userInput === confirmAction || userInput === "" || userInput === null) {
  window.alert("Thank you we will not bother you again");
} else if (userInput === validEmail) {
  window.alert("Thank you, our next newsletter willbe sent to" + validEmail);
} else if (
  userInput !== validEmail ||
  userInput === "" ||
  userInput === null ||
  userInput === confirmAction
) {
  window.alert("Thank you, your email was not valid");
} else {
  userInput = window.prompt(confirmAction);
}

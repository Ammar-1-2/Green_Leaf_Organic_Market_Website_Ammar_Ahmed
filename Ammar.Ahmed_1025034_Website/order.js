// Line 2-5: Finds the order form on the page and stores it in a variable called form.
// Name: Ammar | Registration number: 1025034
// order.js - checks the order form when the customer clicks "Submit order".

var form = document.getElementById("orderForm");

/* Line 10-12: addEventListener waits for the "submit" event (when the customer clicks Submit order) 
 and then runs the function. event.preventDefault() stops the page from reloading so our own code decides what happens. */
// listen for the form being sent
form.addEventListener("submit", function (event) {
  // stop the page from reloading
  event.preventDefault();

  // Line 16-18: Reads the three text boxes. .value is what was typed and .trim() removes spaces at the start and end.
  // get what the customer typed (trim removes spaces at the start and end)
  var fullName = document.getElementById("fullName").value.trim();
  var email = document.getElementById("email").value.trim();
  var quantity = document.getElementById("quantity").value.trim();

  /*Line 22-31: Empties the three error messages and the message box, so old messages do not stay. 
   Then it makes a variable allGood that stays true unless a mistake is found. */
  // clear the old messages
  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("quantityError").textContent = "";
  var message = document.getElementById("formMessage");
  message.textContent = "";
  message.className = "form-message";

  // this stays true unless we find a mistake
  var allGood = true;

  //Line 35-41: If the name box is empty, or has fewer than 2 letters, it writes a message under the box and sets allGood to false.
  // check the name
  if (fullName == "") {
    document.getElementById("nameError").textContent = "Enter your full name.";
    allGood = false;
  } else if (fullName.length < 2) {
    document.getElementById("nameError").textContent = "Your name needs at least 2 letters.";
    allGood = false;
  }

  /* Line 45-53: Finds the @ sign and the last dot. It shows a message if the box is empty, or if there is no @, the @ is first,
   there is no dot after the @, or the dot is last. The || means "or". */
  // check the email
  var at = email.indexOf("@");
  var dot = email.lastIndexOf(".");
  if (email == "") {
    document.getElementById("emailError").textContent = "Enter your email address.";
    allGood = false;
  } else if (at < 1 || dot < at + 2 || dot == email.length - 1) {
    document.getElementById("emailError").textContent = "Enter an email like name@example.com.";
    allGood = false;
  }

  // Line 58-67: Shows a message if the box is empty, if it is not a whole number (isNaN checks for letters and % 1 checks for decimals like 2.5), or if it is less than 1 or more than 50.
  // check the quantity
  if (quantity == "") {
    document.getElementById("quantityError").textContent = "Enter a quantity.";
    allGood = false;
  } else if (isNaN(quantity) || quantity % 1 != 0) {
    document.getElementById("quantityError").textContent = "Quantity must be a whole number, like 2.";
    allGood = false;
  } else if (quantity < 1 || quantity > 50) {
    document.getElementById("quantityError").textContent = "Quantity must be between 1 and 50.";
    allGood = false;
  }

  /* Line 71-80: If allGood is still true, the message box turns green, says thank you with the customer's name, and the form is emptied (reset). 
     Otherwise the box turns red and asks the customer to fill in all fields correctly. The last line ends the function and the event listener. */
  // show the result
  if (allGood == true) {
    message.className = "form-message ok";
    message.textContent = "Thank you, " + fullName + ". Your order has been received (test only, nothing was sent).";
    form.reset();
  } else {
    message.className = "form-message bad";
    message.textContent = "Please fill in all fields correctly.";
  }
});

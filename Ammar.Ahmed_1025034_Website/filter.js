/* Line 4-17: The function runs when a filter button is clicked and receives the category and the button that was clicked.
 The loop goes through every card. If All was chosen, or the card has the chosen word (fruit, vegetable or herb) in its class, the card is shown.
  Otherwise it is hidden (display "none"). */
// Name: Ammar.Ahmed| Registration number: 1025034
// filter.js - Products page only. Shows All, Fruits, Vegetables or Herbs.

// runs when someone clicks a filter button
function filterProducts(category, clickedButton) {
  // go through every product card
  var cards = document.getElementsByClassName("card");
  for (var i = 0; i < cards.length; i++) {
    if (category == "all" || cards[i].classList.contains(category)) {
      cards[i].style.display = "block";
    } else {
      cards[i].style.display = "none";
    }
  }

  /* Line 21-26: Another loop takes the "selected" class off all four buttons. Then the clicked button gets "selected", so only that one is green. */
  // make only the clicked button green
  var buttons = document.getElementsByClassName("filter-button");
  for (var j = 0; j < buttons.length; j++) {
    buttons[j].classList.remove("selected");
  }
  clickedButton.classList.add("selected");
}

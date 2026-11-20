/* Line 3-13: The cart is an empty box (an object) that will hold the items. Then the code asks the browser for a cart saved earlier (sessionStorage).
 If there is one, JSON.parse turns the saved text back into the cart. This is how the cart follows you from page to page.*/
// Name: Ammar.Ahmed | Registration number: 1025034
// cart.js - runs on every page. It keeps the cart and shows the totals.

// the cart is a box that holds items, for example: Apples with price 4.5 and quantity 2
var cart = {};

// when the page opens, get the saved cart (if there is one)
var saved = sessionStorage.getItem("greenLeafCart");
if (saved != null) {
  cart = JSON.parse(saved);
}

/* Line 18-25: A function is a group of steps with a name. This one runs when someone clicks Add to cart. If the item is not in the cart yet, it adds it with quantity 0.
 Then it adds 1 to the quantity, saves the cart in the browser (JSON.stringify turns it into text) and calls showCart to update the page. */
// runs when someone clicks "Add to cart"
function addToCart(itemName, itemPrice) {
  if (cart[itemName] == undefined) {
    cart[itemName] = { price: itemPrice, qty: 0 };
  }
  cart[itemName].qty = cart[itemName].qty + 1;
  sessionStorage.setItem("greenLeafCart", JSON.stringify(cart));
  showCart();
}

/* Line 28-33: Runs when someone clicks Clear cart. It empties the cart, saves it and updates the page. */
// runs when someone clicks "Clear cart"
function clearCart() {
  cart = {};
  sessionStorage.setItem("greenLeafCart", JSON.stringify(cart));
  showCart();
}

/* Line 37-43: Starts the showCart function.
 The for loop goes through each item in the cart and adds up the number of items (count) and the total price (quantity x price). */
// works out the totals and shows them on the page
function showCart() {
  var count = 0;
  var total = 0;
  for (var itemName in cart) {
    count = count + cart[itemName].qty;
    total = total + cart[itemName].qty * cart[itemName].price;
  }

  /* Line 47-48: Finds the span with id="cartCount" in the header and puts the number of items in it. */
  // the number in the Cart button at the top
  document.getElementById("cartCount").textContent = count;

  /* Line 52-59: Finds the message bar. The "if (status != null)" check makes sure this only runs on pages that have a bar (the Order page does not). 
  It shows the empty-cart message, or the number of items and the total price. toFixed(2) shows 2 decimal places. */
  // the green message bar (Home and Products pages)
  var status = document.getElementById("cartStatus");
  if (status != null) {
    if (count == 0) {
      status.textContent = "Your cart is empty. Add something fresh.";
    } else {
      status.textContent = count + " item(s) in your cart, total AED " + total.toFixed(2);
    }
  }

  /* Line 65-77: Finds the cart box. This only runs on the Order page. If the cart is empty it shows a message.
   Otherwise a loop builds one list line per item (quantity x name) and puts the list and the total in the box. */
  // the cart list on the Order page
  var summary = document.getElementById("orderSummary");
  if (summary != null) {
    if (count == 0) {
      summary.textContent = "Nothing in your cart yet.";
    } else {
      var list = "";
      for (var item in cart) {
        list = list + "<li>" + cart[item].qty + " x " + item + "</li>";
      }
      summary.innerHTML = "<ul>" + list + "</ul><p>Total: AED " + total.toFixed(2) + "</p>";
    }
  }
}

// Line 81: Calls showCart straight away, so the numbers are right as soon as any page opens.
// show the cart as soon as the page opens
showCart();

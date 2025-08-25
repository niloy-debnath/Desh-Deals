// ----- Reuseable Functions ------

// ------ Element Getter ------
function getElementById(id) {
  const element = document.getElementById(id);
  return element;
}

// adding to cart

function addingToCart(btnId, amountId) {
  getElementById(btnId).addEventListener("click", function () {
    const amount = parseInt(getElementById(amountId).innerText);
    //   console.log(amount);

    let totalPrice = parseInt(getElementById("total-price").innerText);

    //   console.log(totalPrice);

    totalPrice = totalPrice + amount;

    getElementById("total-price").innerText = totalPrice;
    //   console.log(totalPrice);
  });
}

// ------------------------------------

// kitchen card 1

addingToCart("kitchen-cart-button-1", "kitchen-cart-amount-1");

// kitchen card 2

addingToCart("kitchen-cart-button-2", "kitchen-cart-amount-2");

// kitchen card 3

addingToCart("kitchen-cart-button-3", "kitchen-cart-amount-3");

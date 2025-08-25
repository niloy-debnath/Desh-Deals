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

    totalPrice = totalPrice + amount;

    getElementById("total-price").innerText = totalPrice;
    const cardListContainer = getElementById("cart-list-container");

    const newCart1 = document.createElement("div");
    const newCart2 = document.createElement("div");
    const newCart3 = document.createElement("div");

    newCart1.innerHTML = `
    <div
              class="p-4 flex justify-center items-center w-60 bg-base-100 shadow-sm"
            >
              <figure class="bg-[#1111110d] p-10">
                <img src="./assets/kitchen-1.png" alt="Shoes" />
              </figure>
              <div class="">
                <h2 class="text-center">K. Accessories</h2>
                <p class="text-center text-[#11111180]">
                  <span id="kitchen-cart-amount-3">49.00 TK</span>
                </p>

                <div class="card-actions justify-end"></div>
              </div>
            </div>
    `;
    newCart2.innerHTML = `
    <div
              class="p-4 flex justify-center items-center w-60 bg-base-100 shadow-sm"
            >
              <figure class="bg-[#1111110d] p-10">
                <img src="./assets/kitchen-2.png" alt="Shoes" />
              </figure>
              <div class="">
                <h2 class="text-center">K. Accessories</h2>
                <p class="text-center text-[#11111180]">
                  <span id="kitchen-cart-amount-3">49.00 TK</span>
                </p>

                <div class="card-actions justify-end"></div>
              </div>
            </div>
    `;
    newCart3.innerHTML = `
    <div
              class="p-4 flex justify-center items-center w-60 bg-base-100 shadow-sm"
            >
              <figure  class="bg-[#1111110d] p-10">
                <img src="./assets/kitchen-3.png" alt="Shoes" />
              </figure>
              <div class="">
                <h2 class="text-center">Home Cooker</h2>
                <p class="text-center text-[#11111180]">
                  <span id="kitchen-cart-amount-3">49.00 TK</span>
                </p>

                <div class="card-actions justify-end"></div>
              </div>
            </div>
    `;
    if (btnId === "kitchen-cart-button-1") {
      cardListContainer.append(newCart1);
    }
    if (btnId === "kitchen-cart-button-2") {
      cardListContainer.append(newCart2);
    }
    if (btnId === "kitchen-cart-button-3") {
      cardListContainer.append(newCart3);
    }
  });
}

// ------------------------------------

// kitchen card 1

addingToCart("kitchen-cart-button-1", "kitchen-cart-amount-1");

// kitchen card 2

addingToCart("kitchen-cart-button-2", "kitchen-cart-amount-2");

// kitchen card 3

addingToCart("kitchen-cart-button-3", "kitchen-cart-amount-3");

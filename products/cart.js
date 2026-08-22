var cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const cartTotalDisplay = document.getElementById("cart-total-display");

// Display cart products

function displayCart() {


cartItems.innerHTML = "";

var total = 0;


// Check empty cart

if (cart.length === 0) {

    cartItems.innerHTML = `
        <h2>Your cart is empty</h2>
    `;

    cartTotal.innerText = "0";

    if (cartTotalDisplay) {
        cartTotalDisplay.innerText = "0";
    }

    return;
}


// Display products

cart.forEach((item, index) => {

    total += item.price * item.quantity;

    cartItems.innerHTML += `

        <div class="cart-item">

            <img
                src="${item.image}"
                alt="${item.name}"
            >

            <div>

                <h3>
                    ${item.name}
                </h3>

                <p>
                    Price: ₹${item.price}
                </p>

                <div class="quantity-controls">

                    <button
                        onclick="decreaseQuantity(${index})">
                        −
                    </button>

                    <span>
                        ${item.quantity}
                    </span>

                    <button
                        onclick="increaseQuantity(${index})">
                        +
                    </button>

                    <button
                        onclick="removeItem(${index})">
                        Remove
                    </button>

                </div>

            </div>

        </div>

        <hr>

    `;
});


// Update total

cartTotal.innerText = total;

if (cartTotalDisplay) {
    cartTotalDisplay.innerText = total;
}


}

// Increase quantity

function increaseQuantity(index) {


cart[index].quantity++;

localStorage.setItem(
    "cart",
    JSON.stringify(cart)
);

displayCart();


}

// Decrease quantity

function decreaseQuantity(index) {


if (cart[index].quantity > 1) {

    cart[index].quantity--;

} else {

    cart.splice(index, 1);

}

localStorage.setItem(
    "cart",
    JSON.stringify(cart)
);

displayCart();


}

// Remove product

function removeItem(index) {


cart.splice(index, 1);

localStorage.setItem(
    "cart",
    JSON.stringify(cart)
);

displayCart();


}

// Clear entire cart

function clearCart() {


cart = [];

localStorage.removeItem("cart");

displayCart();


}

// Display cart when page loads

displayCart();

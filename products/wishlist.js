
const wishlistContainer = document.getElementById("wishlistContainer");
const emptyWishlist = document.getElementById("emptyWishlist");

let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

function displayWishlist() {

    wishlistContainer.innerHTML = "";

    if (wishlist.length === 0) {
        emptyWishlist.style.display = "block";
        return;
    }

    emptyWishlist.style.display = "none";

    wishlist.forEach(product => {

        const productCard = document.createElement("div");

        productCard.className = "wishlist-card";

        productCard.innerHTML = `
            <div class="wishlist-image">
                <img src="${product.image}" alt="${product.name}">

                <button class="remove-wishlist" data-id="${product.id}">
                    <i class="fa-solid fa-heart"></i>
                </button>
            </div>

            <div class="wishlist-info">

                <p class="wishlist-brand">
                    ${product.brand}
                </p>

                <h3>
                    ${product.name}
                </h3>

                <div class="wishlist-price">
                    <strong>₹${product.price}</strong>

                    <del>₹${product.oldPrice}</del>

                    <span>${product.discount}</span>
                </div>

                <button class="view-product" data-id="${product.id}">
                    VIEW PRODUCT
                </button>

            </div>
        `;

        wishlistContainer.appendChild(productCard);
    });

    addWishlistEvents();
}


function addWishlistEvents() {

    const removeButtons =
        document.querySelectorAll(".remove-wishlist");

    removeButtons.forEach(button => {

        button.addEventListener("click", () => {

            const productId = Number(button.dataset.id);

            wishlist = wishlist.filter(
                product => product.id !== productId
            );

            localStorage.setItem(
                "wishlist",
                JSON.stringify(wishlist)
            );

            displayWishlist();
        });
    });


    const viewButtons =
        document.querySelectorAll(".view-product");

    viewButtons.forEach(button => {

        button.addEventListener("click", () => {

            const productId = button.dataset.id;

            window.location.href =
                `./product-details.html?id=${productId}`;
        });
    });
}


function updateCartCount() {

    const cart =
        JSON.parse(localStorage.getItem("cart")) || [];

    const totalQuantity =
        cart.reduce(
            (total, item) => total + item.quantity,
            0
        );

    const cartCount =
        document.getElementById("cartCount");

    if (cartCount) {
        cartCount.textContent = totalQuantity;
    }
}


displayWishlist();
updateCartCount();


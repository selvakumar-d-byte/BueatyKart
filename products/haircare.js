

let searchInput = document.getElementById("search-input");

let products = document.querySelectorAll(".hair-product-card");


if (searchInput) {

    searchInput.addEventListener("input", function () {

        let searchValue = searchInput.value.toLowerCase();

        products.forEach(function (product) {

            let productName =
                product.querySelector("h3").textContent.toLowerCase();

            if (productName.includes(searchValue)) {

                product.style.display = "block";

            } else {

                product.style.display = "none";

            }

        });

    });

}

let cartButtons =
    document.querySelectorAll(".hair-add-cart");


cartButtons.forEach(function (button) {

    button.addEventListener("click", function () {

 
        let productCard = button.closest(".hair-product-card");


        button.textContent = "Added ✓";


        productCard.style.opacity = "0.55";


        productCard.style.transform = "scale(0.98)";


        button.disabled = true;

    });

});

document.addEventListener("DOMContentLoaded", function () {

    document.querySelectorAll(".hair-product-card").forEach(card => {

        card.addEventListener("click", function (e) {
            if (e.target.closest(".hair-add-cart")) {
                return;
            }

            const id = this.dataset.id;

            window.location.href =
                `./product-details.html?id=${id}`;

        });

    });

});
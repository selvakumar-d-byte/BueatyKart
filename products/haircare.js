

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



document.addEventListener("DOMContentLoaded", function () {

    document.querySelectorAll(".hair-product-card").forEach(card => {

        card.addEventListener("click", function (e) {

            const id = this.dataset.id;

            window.location.href =
                `./product-details.html?id=${id}`;

        });

    });

});
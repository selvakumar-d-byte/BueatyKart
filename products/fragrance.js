document.addEventListener("DOMContentLoaded", () => {

    const products =
        document.querySelectorAll(".fragrance-product");

    const searchInput =
        document.getElementById("search-input");

    const shopButton =
        document.querySelector(".fragrance-shop-btn");

    const countElement =
        document.getElementById("fragrance-count");



    if (shopButton) {

        shopButton.addEventListener("click", () => {

            document.querySelector(".fragrance-products")
                .scrollIntoView({
                    behavior: "smooth"
                });

        });

    }

    if (searchInput) {

        searchInput.addEventListener("input", () => {

            const searchValue =
                searchInput.value
                    .toLowerCase()
                    .trim();

            let visibleCount = 0;


            products.forEach(product => {

                const productText =
                    product.textContent.toLowerCase();


                if (productText.includes(searchValue)) {

                    product.style.display = "";

                    visibleCount++;

                } else {

                    product.style.display = "none";

                }

            });


            if (countElement) {

                countElement.textContent =
                    visibleCount;

            }

        });

    }
});

document.addEventListener("DOMContentLoaded", function () {

    document.querySelectorAll(".fragrance-product").forEach(card => {

        card.addEventListener("click", function (e) {
            const id = this.dataset.id;

            window.location.href =
                `./product-details.html?id=${id}`;

        });

    });

});
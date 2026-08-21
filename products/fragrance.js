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

    products.forEach(product => {

        const addButton =
            product.querySelector(".fragrance-add-bag");

        if (!addButton) return;


        addButton.addEventListener("click", () => {

            const originalText =
                addButton.textContent;


            addButton.textContent =
                "ADDED ✓";

            addButton.disabled = true;


            setTimeout(() => {

                addButton.textContent =
                    originalText;

                addButton.disabled = false;

            }, 1500);

        });

    });
    products.forEach(product => {

        const wishlistButton =
            product.querySelector(".fragrance-wishlist");

        if (!wishlistButton) return;


        wishlistButton.addEventListener("click", () => {

            wishlistButton.classList.toggle(
                "wishlist-active"
            );


            if (
                wishlistButton.classList.contains(
                    "wishlist-active"
                )
            ) {

                wishlistButton.classList.remove(
                    "fa-regular"
                );

                wishlistButton.classList.add(
                    "fa-solid"
                );

            } else {

                wishlistButton.classList.remove(
                    "fa-solid"
                );

                wishlistButton.classList.add(
                    "fa-regular"
                );

            }

        });

    });

});

document.addEventListener("DOMContentLoaded", function () {

    document.querySelectorAll(".fragrance-product").forEach(card => {

        card.addEventListener("click", function (e) {
            if (e.target.closest(".fragrance-add-bag")) {
                return;
            }

            const id = this.dataset.id;

            window.location.href =
                `./product-details.html?id=${id}`;

        });

    });

});
// ================= OFFER CLOSE =================

const offer = document.getElementById("offer");
const offerClose = document.getElementById("offer_close");

offerClose.addEventListener("click", function () {
    offer.style.display = "none";
});


// ================= OFFER POPUP =================

const offerButton = document.getElementById("offer-button");
const offerOverlay = document.getElementById("offer-overlay");
const offerPopupClose = document.getElementById("offer-close");

offerButton.addEventListener("click", function (event) {
    event.preventDefault();
    offerOverlay.style.display = "block";
});

offerPopupClose.addEventListener("click", function () {
    offerOverlay.style.display = "none";
});


// ================= MOBILE MENU =================

const menu = document.getElementById("menu");
const menuContent = document.getElementById("menu-content");
const menuClose = document.getElementById("menu_close");

menu.addEventListener("click", function () {
    menuContent.classList.add("show");
    menuContent.style.left = "0";
});

menuClose.addEventListener("click", function () {
    menuContent.classList.remove("show");
    menuContent.style.left = "-100%";
});


// ================= PRODUCT ELEMENTS =================

const searchInput = document.getElementById("search-input");
const productCards = document.querySelectorAll(".product-card");
const productCount = document.getElementById("productCount");
const noProducts = document.getElementById("noProducts");

const categoryFilters = document.querySelectorAll(".category-filter");
const priceFilters = document.querySelectorAll(".price-filter");


// ================= RATING FILTER =================

const filterGroups = document.querySelectorAll(".filter-group");

let ratingGroup;

filterGroups.forEach(function (group) {

    const heading = group.querySelector("h3");

    if (heading && heading.textContent.trim() === "Rating") {
        ratingGroup = group;
    }

});


if (ratingGroup) {

    const oldLabels = ratingGroup.querySelectorAll("label");

    oldLabels.forEach(function (label) {
        label.remove();
    });


    ratingGroup.innerHTML += `
        <label>
            <input type="checkbox" class="rating-filter" value="3">
            ★★★☆☆ 3 Star & above
        </label>

        <label>
            <input type="checkbox" class="rating-filter" value="4">
            ★★★★☆ 4 Star & above
        </label>

        <label>
            <input type="checkbox" class="rating-filter" value="5">
            ★★★★★ 5 Star
        </label>
    `;
}


const ratingFilters = document.querySelectorAll(".rating-filter");


// ================= FILTER PRODUCTS =================

function filterProducts() {

    const searchText =
        searchInput.value.toLowerCase().trim();


    // CATEGORY

    let selectedCategories = [];

    categoryFilters.forEach(function (filter) {

        if (filter.checked) {
            selectedCategories.push(filter.value);
        }

    });


    // PRICE

    let selectedPrice = "all";

    priceFilters.forEach(function (filter) {

        if (filter.checked) {
            selectedPrice = filter.value;
        }

    });


    // RATING

    let selectedRatings = [];

    ratingFilters.forEach(function (filter) {

        if (filter.checked) {
            selectedRatings.push(Number(filter.value));
        }

    });


    let visibleProducts = 0;


    // CHECK PRODUCTS

    productCards.forEach(function (card) {

        const name =
            card.querySelector("h3").textContent.toLowerCase();

        const brand =
            card.querySelector(".brand").textContent.toLowerCase();

        const category = card.dataset.category;
        const price = Number(card.dataset.price);
        const rating = Number(card.dataset.rating);


        // SEARCH

        const searchMatch =
            name.includes(searchText) ||
            brand.includes(searchText);


        // CATEGORY

        const categoryMatch =
            selectedCategories.length === 0 ||
            selectedCategories.includes(category);


        // PRICE

        let priceMatch = true;

        if (selectedPrice === "500") {
            priceMatch = price < 500;
        }

        else if (selectedPrice === "1000") {
            priceMatch = price >= 500 && price <= 1000;
        }

        else if (selectedPrice === "1500") {
            priceMatch = price > 1000 && price <= 1500;
        }

        else if (selectedPrice === "2000") {
            priceMatch = price > 1500;
        }


        // RATING

        let ratingMatch = true;

        if (selectedRatings.length > 0) {

            ratingMatch = false;

            selectedRatings.forEach(function (selectedRating) {

                if (selectedRating === 3 && rating >= 3) {
                    ratingMatch = true;
                }

                if (selectedRating === 4 && rating >= 4) {
                    ratingMatch = true;
                }

                if (selectedRating === 5 && rating >= 5) {
                    ratingMatch = true;
                }

            });

        }


        // SHOW / HIDE PRODUCT

        if (
            searchMatch &&
            categoryMatch &&
            priceMatch &&
            ratingMatch
        ) {

            card.style.display = "";
            visibleProducts++;

        }

        else {

            card.style.display = "none";

        }

    });


    // PRODUCT COUNT

    productCount.textContent =
        visibleProducts + " Products";


    // NO PRODUCTS

    if (visibleProducts === 0) {
        noProducts.style.display = "block";
    }

    else {
        noProducts.style.display = "none";
    }

}


// ================= SEARCH =================

searchInput.addEventListener("input", function () {
    filterProducts();
});


// ================= CATEGORY FILTER =================

categoryFilters.forEach(function (filter) {

    filter.addEventListener("change", function () {
        filterProducts();
    });

});


// ================= PRICE FILTER =================

priceFilters.forEach(function (filter) {

    filter.addEventListener("change", function () {
        filterProducts();
    });

});


// ================= RATING FILTER =================

ratingFilters.forEach(function (filter) {

    filter.addEventListener("change", function () {
        filterProducts();
    });

});


// ================= SORT PRODUCTS =================

const sortSelect = document.getElementById("sortSelect");
const productGrid = document.getElementById("productGrid");

sortSelect.addEventListener("change", function () {

    const cards = Array.from(productCards);

    cards.sort(function (a, b) {

        const priceA = Number(a.dataset.price);
        const priceB = Number(b.dataset.price);

        const ratingA = Number(a.dataset.rating);
        const ratingB = Number(b.dataset.rating);

        const discountA = Number(a.dataset.discount);
        const discountB = Number(b.dataset.discount);


        if (sortSelect.value === "low") {
            return priceA - priceB;
        }

        if (sortSelect.value === "high") {
            return priceB - priceA;
        }

        if (sortSelect.value === "rating") {
            return ratingB - ratingA;
        }

        if (sortSelect.value === "discount") {
            return discountB - discountA;
        }

        return 0;

    });


    cards.forEach(function (card) {
        productGrid.appendChild(card);
    });

});


// ================= CLEAR FILTERS =================

const clearFilters =
    document.getElementById("clearFilters");

clearFilters.addEventListener("click", function () {

    // Clear category

    categoryFilters.forEach(function (filter) {
        filter.checked = false;
    });


    // Reset price

    document.querySelector(
        '.price-filter[value="all"]'
    ).checked = true;


    // Clear rating

    ratingFilters.forEach(function (filter) {
        filter.checked = false;
    });


    // Clear search

    searchInput.value = "";


    // Reset sorting

    sortSelect.value = "default";


    // Show all products

    productCards.forEach(function (card) {
        card.style.display = "";
    });


    // Reset count

    productCount.textContent =
        productCards.length + " Products";

    noProducts.style.display = "none";

});


// ================= WISHLIST =================

const wishlistButtons =
    document.querySelectorAll(".wishlist-btn");

wishlistButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        button.classList.toggle("active");

        const icon = button.querySelector("i");

        icon.classList.toggle("fa-regular");
        icon.classList.toggle("fa-solid");

    });

});


// ================= VIEW DETAILS =================

const viewDetailsButtons =
    document.querySelectorAll(".view-details");

viewDetailsButtons.forEach(function (button) {

    button.addEventListener("click", function (event) {

        // Prevent the product-card click event
        event.stopPropagation();

        // Find the product card
        const card =
            button.closest(".product-card");

        // Get product ID
        const id =
            card.dataset.id;

        // Go to product details page
        window.location.href =
            `./product-details.html?id=${id}`;

    });

});


// ================= PRODUCT CARD CLICK =================

document.querySelectorAll(".product-card").forEach(function (card) {

    card.addEventListener("click", function (event) {

        // Don't open details when wishlist is clicked
        if (
            event.target.closest(".view-details") ||
            event.target.closest(".wishlist-btn")
        ) {
            return;
        }

        // Get product ID
        const id =
            card.dataset.id;

        // Open product details page
        window.location.href =
            `./product-details.html?id=${id}`;

    });

});


// ================= PAGE LOAD =================

document.addEventListener("DOMContentLoaded", function () {

    filterProducts();

});
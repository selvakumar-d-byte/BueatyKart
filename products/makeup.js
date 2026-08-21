// SELECT HTML ELEMENS
let filterButtons = document.querySelectorAll("#category-filters button")
let allCards = document.querySelectorAll(".makeup-card")
let sortSelect = document.getElementById("sort-select")
let productGrid = document.getElementById("product-grid")
let addToCartButtons = document.querySelectorAll(".add-to-cart-btn")


//CATEGORY BUTTONS CLICK EVENT (Lipstick, Foundion,eyeliner,mascara.)
for (let filters = 0; filters < filterButtons.length; filters++) {
    
    filterButtons[filters].addEventListener("click", function() {
        
        //REMOVE ACIVATE CLASS FORM ALL FUNCTIONS
        for (let act = 0; act < filterButtons.length; act++) {
            filterButtons[act].classList.remove("active")
        }
        
        // ACIVATE FUNCTION FOR CLICK ITEMS
        this.classList.add("active")

        // CHOOSE CLICKING IEMS CATEGORY ONLY
        let selectedCategory = this.getAttribute("data-category")

        // CHECK ALL PORDUCT COLUNM
        for (let card = 0; card < allCards.length; card++) {
            let cardCategory = allCards[card].getAttribute("data-category")

            // Oru vela "all" click panniruntha ellathayum kaattu, illena matching category mattum kaattu
            if (selectedCategory === "all" || cardCategory == selectedCategory) {
                allCards[card].style.display = "flex" // Kaattudu
            } else {
                allCards[card].style.display = "none"  // Maraikuthu
            }
        }
    })
}


// PRICE SORTING (Low to High / High to Low)
sortSelect.addEventListener("change", function() {
    let sortValue = sortSelect.value
    let cardsArray = Array.from(allCards)

    if (sortValue == "low-high") {
        cardsArray.sort(function(a, b) {
            let priceA = Number(a.getAttribute("data-price"))
            let priceB = Number(b.getAttribute("data-price"))
            return priceA - priceB;
        })
    } 
    else if (sortValue === "high-low") {
        cardsArray.sort(function(a, b) {
            let priceA = Number(a.getAttribute("data-price"))
            let priceB = Number(b.getAttribute("data-price"))
            return priceB - priceA
        })
    }

    // Grid-ah clear panni, sorted cards-ah podrom
    productGrid.innerHTML = ""
    for (let sort = 0; sort < cardsArray.length; sort++) {
        productGrid.appendChild(cardsArray[sort])
    }
})


// ADD TO CART ALERT
for (let filters = 0; filters < addToCartButtons.length; filters++) {
    addToCartButtons[filters].addEventListener("click", function() {
        let name = this.getAttribute("data-name")
        let price = this.getAttribute("data-price")
        
        alert(name + " (₹" + price + ") added to your cart!")
    })
}
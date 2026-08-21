
const products = [
    {
        id: 1,
        brand: "CETAPHIL",
        name: "Cleanser",
        category: "Cleanser",
        image: "https://images.unsplash.com/photo-1750085036829-ae889357991f?q=80&w=1944&auto=format&fit=crop",
        price: 449,
        oldPrice: 560,
        discount: "20% OFF",
        rating: "⭐⭐⭐⭐",
        reviews: 248,
        description:
            "A gentle cleanser that helps remove dirt, oil and impurities while keeping the skin fresh, clean and comfortable.",
        benefits: [
            "Gentle on skin",
            "Removes dirt and excess oil",
            "Suitable for daily use",
            "Helps maintain clean and fresh skin"
        ]
    },

    {
        id: 2,
        brand: "THE ORDINARY",
        name: "Vitamin C Face Serum",
        category: "Serum",
        image: "https://images-static.nykaa.com/media/catalog/product/2/f/2f64156769915195668_1.jpg",
        price: 899,
        oldPrice: 1199,
        discount: "25% OFF",
        rating: "⭐⭐⭐⭐",
        reviews: 421,
        description:
            "A Vitamin C face serum designed to improve skin brightness and give your skin a healthy glowing appearance.",
        benefits: [
            "Helps improve skin brightness",
            "Lightweight formula",
            "Suitable for daily skincare routine",
            "Helps give a healthy glow"
        ]
    },

    {
        id: 3,
        brand: "DOT & KEY",
        name: "Brightening Face Moisturizer",
        category: "Moisturizer",
        image: "https://m.media-amazon.com/images/I/61S3Oum8BmL.jpg",
        price: 699,
        oldPrice: 849,
        discount: "18% OFF",
        rating: "⭐⭐⭐⭐⭐",
        reviews: 186,
        description:
            "A lightweight face moisturizer that helps keep the skin hydrated, soft and bright throughout the day.",
        benefits: [
            "Provides hydration",
            "Lightweight texture",
            "Helps keep skin soft",
            "Suitable for everyday use"
        ]
    },

    {
        id: 4,
        brand: "THE DERMA CO",
        name: "SPF 50 Sunscreen",
        category: "Sunscreen",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbHq42ZfHLVwO4cjnMKnkAOmkupVQGV2tgDSlYci06mA&s=10",
        price: 599,
        oldPrice: 749,
        discount: "20% OFF",
        rating: "⭐⭐⭐⭐⭐",
        reviews: 312,
        description:
            "SPF 50 sunscreen designed to provide everyday sun protection while keeping the skin comfortable.",
        benefits: [
            "SPF 50 protection",
            "Suitable for everyday use",
            "Lightweight feel",
            "Easy to apply"
        ]
    },

    {
        id: 5,
        brand: "SIMPLE",
        name: "Refreshing Face Wash",
        category: "Face Wash",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTartZ3Y8Vd0hlnqVsWTyPRwMBFFwOyW1xJlLGRH379Sw&s=10",
        price: 349,
        oldPrice: 410,
        discount: "15% OFF",
        rating: "⭐⭐⭐⭐⭐",
        reviews: 143,
        description:
            "A refreshing face wash that helps remove dirt and impurities while leaving the skin feeling clean and fresh.",
        benefits: [
            "Refreshing formula",
            "Helps remove impurities",
            "Gentle cleansing",
            "Suitable for regular use"
        ]
    },

    {
        id: 6,
        brand: "LANEIGE",
        name: "Hydrating Face Toner",
        category: "Toner",
        image: "https://main.thgimages.com/?url=https://static.thcdn.com/productimg/original/13319821-5154896470762406.jpg&format=webp&width=1500&height=1500&fit=cover",
        price: 799,
        oldPrice: 999,
        discount: "20% OFF",
        rating: "⭐⭐⭐",
        reviews: 205,
        description:
            "A hydrating toner that helps refresh the skin and maintain a comfortable hydrated feel.",
        benefits: [
            "Helps hydrate skin",
            "Refreshing feel",
            "Easy to use",
            "Suitable for daily skincare"
        ]
    },


    {
        id: 7,
        brand: "MINIMALIST",
        name: "Niacinamide Serum",
        category: "Serum",
        image: "https://www.clinikally.com/cdn/shop/files/Minimalist5_NiacinamideFaceSerum30ml1.jpg?v=1733832629&width=2667",
        price: 1299,
        oldPrice: 1849,
        discount: "30% OFF",
        rating: "⭐⭐⭐⭐",
        reviews: 389,
        description:
            "A lightweight Niacinamide serum designed to support a simple and effective skincare routine.",
        benefits: [
            "Lightweight serum",
            "Easy to add to skincare routine",
            "Suitable for regular use",
            "Helps support healthy-looking skin"
        ]
    },

    {
        id: 8,
        brand: "CLINIQUE",
        name: "72H Hydrating Moisturizer",
        category: "Moisturizer",
        image: "https://www.caretobeauty.com/cdn-cgi/image/f=auto/media/catalog/product//c/l/clinique-dramatically-different-moisturizing-gel-125ml.jpg",
        price: 1599,
        oldPrice: 2099,
        discount: "50% OFF",
        rating: "⭐⭐⭐⭐",
        reviews: 278,
        description:
            "A hydrating moisturizer designed to provide long-lasting moisture and leave the skin feeling soft and comfortable.",
        benefits: [
            "Long-lasting hydration",
            "Lightweight texture",
            "Helps keep skin soft",
            "Suitable for daily skincare routine"
        ]
    }
];

// Get Product ID from URL

const params = new URLSearchParams(window.location.search);
const productId = Number(params.get("id"));

// Find Products

const product = products.find(
    item => item.id === productId
);

// Check Product

if (!product) {
    document.body.innerHTML = `
        <div style="
            text-align:center;
            padding:100px 20px;
            font-family:Poppins, sans-serif;
        ">
            <h1>Product Not Found</h1>

            <p> The product you are looking for does not exist.</p>
            <br>

            <a href="./skincare.html"> Back to Skincare</a>
        </div>
    `;

}

else {
    // Product image
    document.getElementById("productImage").src = product.image;
    document.getElementById("productImage").alt = product.name;

    // Brand
    document.getElementById("productBrand").textContent = product.brand;

    // Product name
    document.getElementById("productName").textContent = product.name;

    // Rating
    document.getElementById("productRating").textContent = product.rating;

    // Review
    document.getElementById("productReviews").textContent = product.reviews;

    // Price
    document.getElementById("productPrice").textContent = `₹${product.price}`;

    // Old price
    document.getElementById("productOldPrice").textContent = `₹${product.oldPrice}`;

    // Discount
    document.getElementById("productDiscount").textContent = product.discount;
    document.getElementById("productDiscountText").textContent = product.discount;

    // Description
    document.getElementById("productDescription").textContent = product.description;
    document.getElementById("fullDescription").textContent = product.description;

    // Category
    document.getElementById("productCategory").textContent = product.category;

    // Breadcrub
    document.getElementById("breadcrumbProduct").textContent = product.name;

    // Benefits
    const benefitsList = document.getElementById("benefitsList");
    product.benefits.forEach(benefit => {
        const li = document.createElement("li");
        li.textContent = benefit;
        benefitsList.appendChild(li);
    });

    // Quantity
    let quantity = 1;
    const quantityDisplay = document.getElementById("quantity");
    const decreaseBtn = document.getElementById("decreaseBtn");
    const increaseBtn = document.getElementById("increaseBtn");

    increaseBtn.addEventListener("click", () => {
        quantity++;

        quantityDisplay.textContent =
            quantity;
    });

    decreaseBtn.addEventListener("click", () => {

        if (quantity > 1) {
            quantity--;
    
            quantityDisplay.textContent =
                quantity;
        }
    });

    // Wishlist
    const wishlistButton = document.getElementById("wishlistButton");

    wishlistButton.addEventListener("click", () => {
        wishlistButton.classList.toggle("active");

        const icon = wishlistButton.querySelector("i");

        if (wishlistButton.classList.contains("active")) {
            icon.classList.remove("fa-regular");
            icon.classList.add("fa-solid");
        } 
        
        else {
            icon.classList.remove("fa-solid");
            icon.classList.add("fa-regular");
        }
    });


    // Cart
    document.getElementById("addToCart").addEventListener("click", () => {

            const cartItem = {
                id: product.id,
                name: product.name,
                brand: product.brand,
                price: product.price,
                image: product.image,
                quantity: quantity
            };

            // Get existing cart
            let cart =JSON.parse( localStorage.getItem("cart")) || [];

            // Check if product already exists
            const existingProduct = cart.find( item => item.id === product.id );

            if (existingProduct) {
                existingProduct.quantity += quantity;
            } 
            else {
                cart.push(cartItem);
            }

            // Save cart
            localStorage.setItem(
                "cart",
                JSON.stringify(cart)
            );

            updateCartCount();

            alert(
                `${product.name} added to bag!`
            );
        });


    // Buy Now
    document
        .getElementById("buyNow")
        .addEventListener("click", () => {

            const cartItem = {
                id: product.id,
                name: product.name,
                brand: product.brand,
                price: product.price,
                image: product.image,
                quantity: quantity
            };

            let cart =JSON.parse( localStorage.getItem("cart") ) || [];

            const existingProduct = cart.find( item => item.id === product.id );

            if (existingProduct) {
                existingProduct.quantity += quantity;
            } 
            else {
                cart.push(cartItem);
            }

            localStorage.setItem(
                "cart",
                JSON.stringify(cart)
            );

            window.location.href =
                "./cart.html";
        });



    // Cart Count
    function updateCartCount() {
        const cart = JSON.parse( localStorage.getItem("cart") ) || [];
        const totalQuantity =
            cart.reduce(
                (total, item) =>
                    total + item.quantity,
                0
            );

        const cartCount =
            document.getElementById("cartCount");

        if (cartCount) {
            cartCount.textContent =
                totalQuantity;
        }
    }

    updateCartCount();
}
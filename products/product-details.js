
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
    },

    {
        id: 9,
        brand: "MAYBELLINE",
        name: "Maybelline Creamy Matte Lipstick",
        category: "Lipstick",
        image: "../images/makeup/lipstick1.jpg.jpg",
        price: 499,
        oldPrice: 599,
        discount: "17% OFF",
        rating: "⭐⭐⭐⭐⭐",
        reviews: 247,
        description:
            "A creamy matte lipstick that gives rich color with a smooth and comfortable finish.",
        benefits: [
            "Smooth matte finish",
            "Rich color payoff",
            "Comfortable to wear",
            "Suitable for everyday makeup"
        ]
    },

    {
        id: 10,
        brand: "LAKME",
        name: "Lakme Liquid Matte Lipstick",
        category: "Lipstick",
        image: "../images/makeup/lipstick2.jpg.jpg",
        price: 300,
        oldPrice: 399,
        discount: "25% OFF",
        rating: "⭐⭐⭐⭐⭐",
        reviews: 185,
        description:
            "A liquid matte lipstick that provides intense color and a smooth matte finish.",
        benefits: [
            "Liquid matte finish",
            "Intense color",
            "Lightweight feel",
            "Easy to apply"
        ]
    },

    {
        id: 11,
        brand: "SWISS BEAUTY",
        name: "Swiss Beauty Non-Transfer Lipstick",
        category: "Lipstick",
        image: "../images/makeup/lipsstick3.jpg.jpg",
        price: 599,
        oldPrice: 699,
        discount: "14% OFF",
        rating: "⭐⭐⭐⭐",
        reviews: 156,
        description:
            "A non-transfer lipstick designed to provide long-lasting color with a comfortable finish.",
        benefits: [
            "Non-transfer formula",
            "Long-lasting color",
            "Comfortable finish",
            "Easy application"
        ]
    },

    {
        id: 12,
        brand: "MAC",
        name: "MAC Matte Retro Lipstick",
        category: "Lipstick",
        image: "../images/makeup/lipsstick4.jpg.jpg",
        price: 699,
        oldPrice: 899,
        discount: "22% OFF",
        rating: "⭐⭐⭐⭐⭐",
        reviews: 321,
        description:
            "A classic matte lipstick that delivers bold color with a smooth and elegant finish.",
        benefits: [
            "Bold color",
            "Matte finish",
            "Smooth application",
            "Suitable for special occasions"
        ]
    },

    {
        id: 13,
        brand: "LAKME",
        name: "Lakme 9to5 Primer + Matte Foundation",
        category: "Foundation",
        image: "../images/makeup/fnd1.jpg.jpg",
        price: 1011,
        oldPrice: 1200,
        discount: "16% OFF",
        rating: "⭐⭐⭐⭐",
        reviews: 214,
        description:
            "A primer and foundation combination that provides a smooth matte base for your makeup.",
        benefits: [
            "Primer and foundation in one",
            "Smooth matte finish",
            "Helps create an even base",
            "Suitable for everyday makeup"
        ]
    },

    {
        id: 14,
        brand: "MAYBELLINE",
        name: "Maybelline Fit Me Liquid Foundation",
        category: "Foundation",
        image: "../images/makeup/fnd2.jpg.jpg",
        price: 799,
        oldPrice: 999,
        discount: "20% OFF",
        rating: "⭐⭐⭐⭐⭐",
        reviews: 438,
        description:
            "A lightweight liquid foundation that provides an even-looking and natural makeup base.",
        benefits: [
            "Lightweight formula",
            "Natural-looking finish",
            "Easy to blend",
            "Suitable for everyday use"
        ]
    },

    {
        id: 15,
        brand: "LOREAL PARIS",
        name: "Loreal Paris Infallible Foundation",
        category: "Foundation",
        image: "../images/makeup/fnd3.jpg.jpg",
        price: 899,
        oldPrice: 1099,
        discount: "18% OFF",
        rating: "⭐⭐⭐⭐⭐",
        reviews: 267,
        description:
            "A long-lasting foundation designed to provide an even and comfortable makeup finish.",
        benefits: [
            "Long-lasting wear",
            "Even-looking finish",
            "Comfortable texture",
            "Easy to blend"
        ]
    },

    {
        id: 16,
        brand: "SWISS BEAUTY",
        name: "Swiss Beauty HD Foundation",
        category: "Foundation",
        image: "../images/makeup/fnd4.jpg.jpg",
        price: 899,
        oldPrice: 1099,
        discount: "18% OFF",
        rating: "⭐⭐⭐⭐",
        reviews: 198,
        description:
            "An HD foundation designed to create a smooth and even makeup base.",
        benefits: [
            "HD finish",
            "Smooth texture",
            "Easy to blend",
            "Suitable for different makeup looks"
        ]
    },

    {
        id: 17,
        brand: "MAYBELLINE",
        name: "Maybelline Lash Sensational Mascara",
        category: "Mascara",
        image: "../images/makeup/ms1.jpg.jpg",
        price: 705,
        oldPrice: 849,
        discount: "17% OFF",
        rating: "⭐⭐⭐⭐⭐",
        reviews: 356,
        description:
            "A mascara designed to enhance lashes and provide a fuller and more defined eye look.",
        benefits: [
            "Enhances lashes",
            "Helps create fuller-looking lashes",
            "Easy application",
            "Suitable for everyday makeup"
        ]
    },

    {
        id: 18,
        brand: "BLUE HEAVEN",
        name: "Blue Heaven Walk-Free Mascara",
        category: "Mascara",
        image: "../images/makeup/ms2.jpg.jpg",
        price: 539,
        oldPrice: 649,
        discount: "17% OFF",
        rating: "⭐⭐⭐⭐",
        reviews: 142,
        description:
            "A mascara that helps define and enhance the appearance of your eyelashes.",
        benefits: [
            "Defines lashes",
            "Easy to apply",
            "Lightweight feel",
            "Suitable for daily use"
        ]
    },

    {
        id: 19,
        brand: "LAKME",
        name: "Lakme Eyeconic Curling Mascara",
        category: "Mascara",
        image: "../images/makeup/ms3.jpg.jpg",
        price: 699,
        oldPrice: 799,
        discount: "13% OFF",
        rating: "⭐⭐⭐⭐⭐",
        reviews: 231,
        description:
            "A curling mascara designed to give lashes a defined and lifted appearance.",
        benefits: [
            "Curling effect",
            "Defines lashes",
            "Easy application",
            "Suitable for everyday use"
        ]
    },

    {
        id: 20,
        brand: "MAC",
        name: "MAC Extended Play Gigablack Mascara",
        category: "Mascara",
        image: "../images/makeup/ms4.jpg.jpg",
        price: 490,
        oldPrice: 599,
        discount: "18% OFF",
        rating: "⭐⭐⭐⭐⭐",
        reviews: 184,
        description:
            "A black mascara designed to define lashes and create a bold eye look.",
        benefits: [
            "Deep black color",
            "Defines lashes",
            "Lightweight formula",
            "Creates a bold eye look"
        ]
    },

    {
        id: 21,
        brand: "SWISS BEAUTY",
        name: "Swiss Beauty Liquid Eyeliner",
        category: "Eyeliner",
        image: "../images/makeup/EYE1.jpg.jpg",
        price: 599,
        oldPrice: 699,
        discount: "14% OFF",
        rating: "⭐⭐⭐⭐",
        reviews: 167,
        description:
            "A liquid eyeliner designed to create precise and defined eye looks.",
        benefits: [
            "Precise application",
            "Rich color",
            "Easy to use",
            "Suitable for different eye looks"
        ]
    },

    {
        id: 22,
        brand: "LAKME",
        name: "Lakme Eyeconic Liquid Eyeliner",
        category: "Eyeliner",
        image: "../images/makeup/eye2.jpg.jpg",
        price: 350,
        oldPrice: 450,
        discount: "22% OFF",
        rating: "⭐⭐⭐⭐⭐",
        reviews: 294,
        description:
            "A liquid eyeliner that helps create smooth and defined lines for an attractive eye look.",
        benefits: [
            "Smooth application",
            "Precise lines",
            "Easy to use",
            "Suitable for everyday makeup"
        ]
    },

    {
        id: 23,
        brand: "MAYBELLINE",
        name: "Maybelline Colossal Bold Eyeliner",
        category: "Eyeliner",
        image: "../images/makeup/eye3.jpg.jpg",
        price: 450,
        oldPrice: 550,
        discount: "18% OFF",
        rating: "⭐⭐⭐⭐⭐",
        reviews: 318,
        description:
            "A bold eyeliner designed to create defined and dramatic eye looks.",
        benefits: [
            "Bold color",
            "Precise application",
            "Easy to use",
            "Great for dramatic eye looks"
        ]
    },

    {
        id: 24,
        brand: "PLUM",
        name: "Plum Naturals Kajal & Eyeliner",
        category: "Eyeliner",
        image: "../images/makeup/eye4.jpg.jpg",
        price: 250,
        oldPrice: 299,
        discount: "16% OFF",
        rating: "⭐⭐⭐⭐",
        reviews: 129,
        description:
            "A kajal and eyeliner combination designed to create simple and defined eye looks.",
        benefits: [
            "Kajal and eyeliner combination",
            "Easy application",
            "Smooth texture",
            "Suitable for everyday use"
        ]
    },

    {
        id: 25,
        brand: "Lashika",
        name: "Nutri Hair Shampoo",
        category: "Shampoo",
        image: "../images/category-images/haircare.png",
        price: 399,
        oldPrice: 499,
        discount: "20% OFF",
        rating: "⭐⭐⭐⭐",
        reviews: 124,
        description:
            "A nourishing shampoo designed to gently cleanse the hair and support a healthy-looking hair care routine.",
        benefits: [
            "Gently cleanses hair",
            "Helps nourish the hair",
            "Suitable for regular use",
            "Leaves hair feeling fresh"
        ]
    },

    {
        id: 26,
        brand: "Lashika",
        name: "Nutri Hair Conditioner",
        category: "Conditioner",
        image: "../images/category-images/haircare-images/haircare-condi.png",
        price: 399,
        oldPrice: 499,
        discount: "20% OFF",
        rating: "⭐⭐⭐⭐",
        reviews: 98,
        description:
            "A nourishing conditioner that helps make hair feel softer, smoother and easier to manage.",
        benefits: [
            "Helps soften hair",
            "Makes hair easier to manage",
            "Supports smooth-looking hair",
            "Suitable for regular use"
        ]
    },

    {
        id: 27,
        brand: "BeautyKare",
        name: "Hair Growth Serum",
        category: "Hair Serum",
        image: "../images/category-images/haircare-images/hairserum.png",
        price: 599,
        oldPrice: 699,
        discount: "14% OFF",
        rating: "⭐⭐⭐⭐",
        reviews: 156,
        description:
            "A lightweight hair serum designed to support a healthy-looking scalp and hair care routine.",
        benefits: [
            "Lightweight formula",
            "Easy to apply",
            "Helps nourish hair",
            "Suitable for regular use"
        ]
    },

    {
        id: 28,
        brand: "BeautyKare",
        name: "Nourishing Hair Oil",
        category: "Hair Oil",
        image: "../images/category-images/haircare-images/hairoil.png",
        price: 299,
        oldPrice: 349,
        discount: "14% OFF",
        rating: "⭐⭐⭐⭐",
        reviews: 187,
        description:
            "A nourishing hair oil designed to provide moisture and support a healthy-looking hair care routine.",
        benefits: [
            "Helps nourish hair",
            "Provides moisture",
            "Easy to massage into the scalp",
            "Suitable for regular use"
        ]
    },

    {
        id: 29,
        brand: "HairVeda",
        name: "Xcel Hair Shampoo",
        category: "Shampoo",
        image: "../images/category-images/haircare-images/p5xcel.png",
        price: 399,
        oldPrice: 499,
        discount: "20% OFF",
        rating: "⭐⭐⭐⭐",
        reviews: 112,
        description:
            "A cleansing shampoo designed to keep hair fresh and clean while supporting everyday hair care.",
        benefits: [
            "Cleanses hair gently",
            "Helps remove impurities",
            "Keeps hair feeling fresh",
            "Suitable for everyday use"
        ]
    },

    {
        id: 30,
        brand: "GlowNest",
        name: "SilkCare Hair Conditioner",
        category: "Conditioner",
        image: "../images/category-images/haircare-images/haircare-condi.png",
        price: 399,
        oldPrice: 499,
        discount: "20% OFF",
        rating: "⭐⭐⭐⭐",
        reviews: 105,
        description:
            "A smoothening conditioner designed to make hair feel soft, manageable and silky.",
        benefits: [
            "Helps soften hair",
            "Supports smooth-looking hair",
            "Makes hair easier to manage",
            "Suitable for regular use"
        ]
    },

    {
        id: 31,
        brand: "PureRoots",
        name: "RootRevive Hair Serum",
        category: "Hair Serum",
        image: "../images/category-images/haircare-images/p7.png",
        price: 599,
        oldPrice: 699,
        discount: "14% OFF",
        rating: "⭐⭐⭐⭐",
        reviews: 143,
        description:
            "A lightweight hair serum designed to complement your daily hair care routine and keep hair looking healthy.",
        benefits: [
            "Lightweight texture",
            "Easy application",
            "Helps smooth hair",
            "Suitable for daily use"
        ]
    },

    {
        id: 32,
        brand: "NatureLuxe",
        name: "HerbalGlow Hair Oil",
        category: "Hair Oil",
        image: "../images/category-images/haircare-images/p8.png",
        price: 899,
        oldPrice: 999,
        discount: "10% OFF",
        rating: "⭐⭐⭐⭐⭐",
        reviews: 176,
        description:
            "A herbal-inspired hair oil designed to nourish hair and support a regular hair care routine.",
        benefits: [
            "Helps nourish hair",
            "Provides moisture",
            "Herbal-inspired formula",
            "Suitable for regular use"
        ]
    },

    {
        id: 33,
        brand: "HairBloom",
        name: "FreshRoot Shampoo",
        category: "Shampoo",
        image: "../images/category-images/haircare-images/p9.png",
        price: 799,
        oldPrice: 899,
        discount: "11% OFF",
        rating: "⭐⭐⭐⭐",
        reviews: 134,
        description:
            "A refreshing shampoo designed to cleanse the hair and leave it feeling fresh and comfortable.",
        benefits: [
            "Cleanses hair",
            "Refreshing feel",
            "Helps remove impurities",
            "Suitable for regular use"
        ]
    },

    {
        id: 34,
        brand: "CareVana",
        name: "SmoothSilk Conditioner",
        category: "Conditioner",
        image: "../images/category-images/haircare-images/p10.png",
        price: 699,
        oldPrice: 799,
        discount: "13% OFF",
        rating: "⭐⭐⭐⭐",
        reviews: 118,
        description:
            "A smoothening conditioner designed to help hair feel softer, smoother and easier to style.",
        benefits: [
            "Helps soften hair",
            "Supports smooth-looking hair",
            "Makes hair manageable",
            "Suitable for regular use"
        ]
    },

    {
        id: 35,
        brand: "RootCare",
        name: "HairRise Growth Serum",
        category: "Hair Serum",
        image: "../images/category-images/haircare-images/p11.png",
        price: 999,
        oldPrice: 1199,
        discount: "17% OFF",
        rating: "⭐⭐⭐⭐⭐",
        reviews: 192,
        description:
            "A lightweight hair serum designed to support a healthy-looking hair care routine and improve hair manageability.",
        benefits: [
            "Lightweight formula",
            "Easy to apply",
        "Helps smooth hair",
            "Suitable for regular use"
        ]
    },

    {
        id: 36,
        brand: "VitaGlow",
        name: "NourishPro Hair Oil",
        category: "Hair Oil",
        image: "../images/category-images/haircare-images/p12.png",
        price: 599,
        oldPrice: 699,
        discount: "14% OFF",
        rating: "⭐⭐⭐⭐",
        reviews: 149,
        description:
            "A nourishing hair oil designed to provide moisture and support healthy-looking, manageable hair.",
        benefits: [
            "Helps nourish hair",
            "Provides moisture",
            "Supports soft-looking hair",
            "Suitable for regular use"
        ]
    },

    {
        id: 37,
        brand: "BeautyKart",
        name: "Signature Eau De Parfum",
        category: "Perfume",
        image: "../images/category-images/haircare-images/eau.png",
        price: 899,
        oldPrice: 999,
        discount: "10% OFF",
        rating: "⭐⭐⭐⭐⭐",
        reviews: 186,
        description:
            "A long-lasting floral Eau De Parfum with an elegant fragrance designed for everyday wear and special occasions.",
        benefits: [
            "Long-lasting fragrance",
            "Elegant floral scent",
            "Suitable for everyday use",
            "Perfect for special occasions"
        ]
    },

    {
        id: 38,
        brand: "BeautyKart",
        name: "Classic Bloom Perfume",
        category: "Perfume",
        image: "../images/category-images/haircare-images/bloom.png",
        price: 749,
        oldPrice: 899,
        discount: "17% OFF",
        rating: "⭐⭐⭐⭐",
        reviews: 142,
        description:
            "A refreshing and elegant perfume with a pleasant floral aroma that keeps you feeling fresh throughout the day.",
        benefits: [
            "Elegant floral fragrance",
            "Refreshing scent",
            "Easy to wear",
            "Suitable for daily use"
        ]
    },

    {
        id: 39,
        brand: "BeautyKart",
        name: "Fresh Aura Body Mist",
        category: "Body Mist",
        image: "../images/category-images/haircare-images/Fresh Aura Body Mist.png",
        price: 599,
        oldPrice: 699,
        discount: "14% OFF",
        rating: "⭐⭐⭐⭐",
        reviews: 118,
        description:
            "A light and refreshing body mist that gives you a pleasant fragrance and a fresh feeling throughout the day.",
        benefits: [
            "Lightweight fragrance",
            "Refreshing scent",
            "Easy to carry",
            "Perfect for everyday use"
        ]
    },

    {
        id: 40,
        brand: "BeautyKart",
        name: "Royal Oud Fragrance",
        category: "Fragrance",
        image: "../images/category-images/haircare-images/royal.png",
        price: 1199,
        oldPrice: 1399,
        discount: "14% OFF",
        rating: "⭐⭐⭐⭐⭐",
        reviews: 205,
        description:
            "A rich and sophisticated oud fragrance created for those who prefer a bold, elegant and luxurious aroma.",
        benefits: [
            "Rich oud fragrance",
            "Sophisticated aroma",
            "Long-lasting scent",
            "Ideal for special occasions"
        ]
    },

    {
        id: 41,
        brand: "BeautyKart",
        name: "Midnight Jasmine Perfume",
        category: "Perfume",
        image: "../images/category-images/haircare-images/Midnight Jasmine Perfume.png",
        price: 899,
        oldPrice: 999,
        discount: "10% OFF",
        rating: "⭐⭐⭐⭐⭐",
        reviews: 167,
        description:
            "A captivating jasmine perfume with a beautiful floral aroma that creates an elegant and memorable fragrance experience.",
        benefits: [
            "Long-lasting floral fragrance",
            "Beautiful jasmine aroma",
            "Elegant and feminine scent",
            "Suitable for evening wear"
        ]
    },

    {
        id: 42,
        brand: "BeautyKart",
        name: "Golden Amber Body Mist",
        category: "Body Mist",
        image: "../images/category-images/haircare-images/Golden Amber Body Mist.png",
        price: 800,
        oldPrice: 950,
        discount: "16% OFF",
        rating: "⭐⭐⭐⭐",
        reviews: 96,
        description:
            "A warm and refreshing amber body mist with an elegant fragrance that is perfect for everyday use.",
        benefits: [
            "Warm amber fragrance",
            "Refreshing scent",
            "Lightweight formula",
            "Perfect for daily use"
        ]
    },

    {
        id: 43,
        brand: "BeautyKart",
        name: "Mystic Musk Fragrance",
        category: "Fragrance",
        image: "../images/category-images/haircare-images/Mystic Musk Fragrance.png",
        price: 499,
        oldPrice: 599,
        discount: "17% OFF",
        rating: "⭐⭐⭐⭐",
        reviews: 124,
        description:
            "A soft and refreshing musk fragrance that provides a pleasant aroma and can be worn comfortably throughout the day.",
        benefits: [
            "Soft musk fragrance",
            "Refreshing aroma",
            "Suitable for everyday use",
            "Affordable fragrance option"
        ]
    },

    {
        id: 44,
        brand: "BeautyKart",
        name: "Velvet Rose Eau De Parfum",
        category: "Perfume",
        image: "../images/category-images/haircare-images/Velvet Rose Eau De Parfum.png",
        price: 1200,
        oldPrice: 1400,
        discount: "14% OFF",
        rating: "⭐⭐⭐⭐⭐",
        reviews: 189,
        description:
            "A rich and sophisticated rose Eau De Parfum with an elegant floral aroma designed to leave a memorable impression.",
        benefits: [
            "Rich rose fragrance",
            "Sophisticated aroma",
            "Long-lasting scent",
            "Perfect for special occasions"
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

            <a href="../index.html"> Back to Home</a>
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
const wishlistIcon = wishlistButton.querySelector("i");

let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

const isWishlisted = wishlist.some(item => item.id === product.id);

if (isWishlisted) {
    wishlistButton.classList.add("active");
    wishlistIcon.classList.remove("fa-regular");
    wishlistIcon.classList.add("fa-solid");
}

wishlistButton.addEventListener("click", () => {

    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    const existingProduct = wishlist.find(
        item => item.id === product.id
    );

    if (existingProduct) {

        wishlist = wishlist.filter(
            item => item.id !== product.id
        );

        wishlistButton.classList.remove("active");
        wishlistIcon.classList.remove("fa-solid");
        wishlistIcon.classList.add("fa-regular");

    } 
    else {

        const wishlistItem = {
            id: product.id,
            name: product.name,
            brand: product.brand,
            price: product.price,
            oldPrice: product.oldPrice,
            image: product.image,
            discount: product.discount
        };

        wishlist.push(wishlistItem);

        wishlistButton.classList.add("active");
        wishlistIcon.classList.remove("fa-regular");
        wishlistIcon.classList.add("fa-solid");
    }

    localStorage.setItem(
        "wishlist",
        JSON.stringify(wishlist)
    );
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
        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        // Check if product already exists
        const existingProduct = cart.find(item => item.id === product.id);

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
    document.getElementById("buyNow").addEventListener("click", () => {

            const cartItem = {
                id: product.id,
                name: product.name,
                brand: product.brand,
                price: product.price,
                image: product.image,
                quantity: quantity
            };

            let cart = JSON.parse(localStorage.getItem("cart")) || [];

            const existingProduct = cart.find(item => item.id === product.id);

            if (existingProduct) {
                existingProduct.quantity += quantity;
            }
            else {
                cart.push(cartItem);
            }

            localStorage.setItem(
                "cart", JSON.stringify(cart)
            );

            window.location.href = "./cart.html";
        });



    // Cart Count
    function updateCartCount() {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        const totalQuantity =
            cart.reduce(
                (total, item) =>
                    total + item.quantity,
                0
            );

        const cartCount = document.getElementById("cartCount");

        if (cartCount) {
            cartCount.textContent = totalQuantity;
        }
    }

    updateCartCount();
}
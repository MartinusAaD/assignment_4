const productsArray = [
  // Consoles
  // Nintendo
  {
    name: "Nintendo Switch Neon",
    image: "../src/assets/images/nintendo/nintendo-switch-oled-neon.png",
    info: "Nintendo Switch Neon offer versatile gaming with OLED displays, portable and docked modes.",
    price: 0,
    category: "console",
    brand: "nintendo",
  },
  {
    name: "Nintendo Switch White",
    image: "../src/assets/images/nintendo/nintendo-switch-oled-white.png",
    info: "Nintendo Switch White offer versatile gaming with OLED displays, portable and docked modes.",
    price: 0,
    category: "console",
    brand: "nintendo",
  },

  // Microsoft
  {
    name: "Xbox X",
    image: "../src/assets/images/microsoft/xbox-x.png",
    info: "Xbox X offers powerful gaming with 4K resolution, fast performance, and extensive game library.",
    price: 0,
    category: "console",
    brand: "microsoft",
  },
  {
    name: "Xbox S",
    image: "../src/assets/images/microsoft/xbox-s.png",
    info: "Xbox S provides affordable gaming with 1440p resolution, fast performance, and access to Xbox Game Pass.",
    price: 0,
    category: "console",
    brand: "microsoft",
  },

  // Sony
  {
    name: "Playstation 5 Slim Digital",
    image: "../src/assets/images/sony/ps5-slim-digital.png",
    info: "PS5 Slim Digital offers fast performance, 4K gaming, and a digital-only library for immersive experiences.",
    price: 0,
    category: "console",
    brand: "sony",
  },

  // Games
  // Nintendo
  {
    name: "Hogwarts Legacy",
    image: "../src/assets/images/nintendo/hogwarts-legacy.png",
    info: "Hogwarts Legacy is an open-world RPG set in the Wizarding World, featuring magic, exploration, and adventure.",
    price: 0,
    category: "game",
    brand: "nintendo",
  },
  {
    name: "Mario Kart 8 Deluxe",
    image: "../src/assets/images/nintendo/mario-kart-8.png",
    info: "Mario Kart 8 Deluxe offers exciting racing, vibrant tracks, and multiplayer fun with customizable characters and karts.",
    price: 0,
    category: "game",
    brand: "nintendo",
  },

  // Microsoft
  {
    name: "Hogwarts Legacy - Xbox",
    image: "../src/assets/images/microsoft/hogwarts-legacy-xbox.png",
    info: "Hogwarts Legacy is an open-world RPG set in the Wizarding World, featuring magic, exploration, and adventure.",
    price: 0,
    category: "game",
    brand: "microsoft",
  },

  // Sony
  {
    name: "Hogwarts Legacy - Ps5",
    image: "../src/assets/images/sony/hogwarts-legacy-ps5.png",
    info: "Hogwarts Legacy is an open-world RPG set in the Wizarding World, featuring magic, exploration, and adventure.",
    price: 399,
    category: "game",
    brand: "sony",
  },
];

// Filtering Categories
// Temp solution
const categoriesArray = ["Consoles", "Games"];

// Filtering Product with Console Property
const consolesArray = productsArray.filter(
  (product) => product.category === "console"
);

// Filtering Products with Game Property
const gamesArray = productsArray.filter(
  (product) => product.category === "game"
);

// component__productInsert Querie
const component__productInsert = document.querySelector(
  ".component__productInsert"
);

// Adding Container Categories and products
for (let i = 0; i < 1; i++) {
  // Create Product Container and Header
  const categoryContainer = document.createElement("div");
  const categoryHeader = document.createElement("h2");
  const productsContainer = document.createElement("div");

  // Adding Classes
  categoryContainer.classList.add("category-container");
  categoryHeader.classList.add("category__header");
  productsContainer.classList.add("products-container--scroll");

  // Appending
  component__productInsert.append(categoryContainer);
  categoryContainer.append(categoryHeader, productsContainer);

  // Adding Category Headers
  categoryHeader.textContent = categoriesArray[i];

  // Inserting Consoles
  if (i === 0) {
    for (let j = 0; j < consolesArray.length; j++) {
      // Creating Elements
      const productContainer = document.createElement("div");
      const productImage = document.createElement("img");
      const productHeader = document.createElement("h3");
      const productInfo = document.createElement("p");
      const productPriceBasketContainer = document.createElement("div");
      const productPrice = document.createElement("h4");
      const productBasket = document.createElement("button");
      const productAddToBasket = document.createElement("img");

      // Adding Classes
      productContainer.classList.add("product-container");
      productImage.classList.add("product__image");
      productHeader.classList.add("product__header");
      productInfo.classList.add("product__info");
      productPriceBasketContainer.classList.add(
        "product__price-basket-container"
      );
      productPrice.classList.add("product__price");
      productBasket.classList.add("product__basket");
      productAddToBasket.classList.add("product__add-to-basket");

      // Appending Product Container
      productsContainer.append(productContainer);
      productContainer.append(
        productImage,
        productHeader,
        productInfo,
        productPriceBasketContainer
      );
      productPriceBasketContainer.append(productPrice, productBasket);
      productBasket.append(productAddToBasket);

      // Adding Product Image
      productImage.src = consolesArray[j].image;

      // Adding Product Headers
      productHeader.textContent = consolesArray[j].name;

      // Adding Product Info
      productInfo.textContent = consolesArray[j].info;

      // Adding Product Price
      productPrice.textContent = `${consolesArray[j].price} ,-`;

      // Adding Basket SVG
      productAddToBasket.src = "../src/assets/icons/plus.svg";
    }
  }
}

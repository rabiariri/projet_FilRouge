/*************************************************
 * EXERCICE 6 - Tableaux simples & foreach
 * Notions : tableaux simples, foreach, index,
 *           réutilisation des fonctions de prix
 *************************************************/

/* --- Correction Exercice 1 - Variables & infos de base --- */

const shopName = "Ma Boutique JS";
const city = "Lyon";
let isOpen = true;
let productCount = 3;
let slogan = "Des goodies pour développeurs passionnés !";

console.log("Bienvenue dans " + shopName + " située à " + city);
console.log("Slogan :", slogan);

if (isOpen) {
  console.log("La boutique est ouverte.");
} else {
  console.log("La boutique est fermée.");
}

const taglineElement = document.querySelector(".site-tagline");
if (taglineElement) {
  taglineElement.textContent = `Bienvenue dans ${shopName} à ${city} 👋`;
}

const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

/* --- Correction Exercice 2 - Strings & messages --- */

let welcomeMessage =
  "Bienvenue dans " + shopName + " située à " + city + " !";
let welcomeMessage2 = `Bienvenue dans ${shopName} à ${city} !`;

let sloganLength = slogan.length;
let sloganUppercase = slogan.toUpperCase();
let sloganModified = slogan.replace("goodies", "trésors");

console.log("welcomeMessage :", welcomeMessage);
console.log("welcomeMessage2 :", welcomeMessage2);
console.log("Longueur du slogan :", sloganLength);
console.log("Slogan en majuscules :", sloganUppercase);
console.log("Slogan modifié :", sloganModified);

const cartMessageElementEx2 = document.getElementById("cart-message");
if (cartMessageElementEx2) {
  cartMessageElementEx2.textContent =
    sloganModified + ` (${sloganLength} caractères dans le slogan original)`;
}

/* --- Correction Exercice 3 - Nombres & calculs --- */

let priceHTExample = 20;
const TVA = 0.2;

let priceTTCExample = priceHTExample + priceHTExample * TVA;

console.log("Prix HT d'exemple :", priceHTExample);
console.log("Prix TTC d'exemple :", priceTTCExample);

let salesCount = 0;
salesCount++;
console.log("Nombre de ventes après incrémentation :", salesCount);

/* --- Correction Exercice 4 - Fonctions de prix --- */

function calculatePriceTTC(priceHT) {
  return priceHT + priceHT * TVA;
}

function formatPrice(price) {
  return price.toFixed(2) + " €";
}

console.log("Test TTC :", formatPrice(calculatePriceTTC(10)));

/* --- Correction Exercice 5 - Produit vedette (DOM, sans objets) --- */

let featuredProductName = "T-shirt Code & Chill";
let featuredProductPriceHT = 19.99;
let featuredProductDescription = "Parfait pour coder confortablement.";
let featuredProductImage = "images/tshirt-code-chill.jpg";

const productList = document.getElementById("product-list");

function createFeaturedProductCard() {
  const article = document.createElement("article");
  article.classList.add("product-card");

  const img = document.createElement("img");
  img.src = featuredProductImage;
  img.alt = featuredProductName;

  const title = document.createElement("h3");
  title.textContent = featuredProductName;

  const priceElt = document.createElement("p");
  priceElt.textContent = formatPrice(calculatePriceTTC(featuredProductPriceHT));

  const desc = document.createElement("p");
  desc.textContent = featuredProductDescription;

  article.appendChild(img);
  article.appendChild(title);
  article.appendChild(priceElt);
  article.appendChild(desc);

  return article;
}

if (productList) {
  productList.innerHTML = "";
  productList.appendChild(createFeaturedProductCard());
}

/* --- Nouveautés Exercice 6 - foreach sur tableaux simples --- */

// 1) Deux tableaux synchronisés
const productNames = ["T-shirt JS", "Mug Debug", "Sticker Bug Free"];
const productPricesHT = [19.99, 9.99, 2.5];

console.log("Nombre de produits :", productNames.length);

// 2) Fonction d'affichage console
function displayProductsInConsole() {
  productNames.forEach((name, index) => {
    const priceHT = productPricesHT[index];
    const priceTTC = calculatePriceTTC(priceHT);
    const formattedPrice = formatPrice(priceTTC);

    console.log(`${index + 1} - ${name} — ${formattedPrice} TTC`);
  });
}

displayProductsInConsole();

console.log("Exercice 6 chargé ✅")


let objets = [
    {
        id: 1,
        name: "pull",
        priceHT: 16,
        description: "super pull achetez svp",
        Image:
    },

    {
        id: 2,
        name: "jupe",
        priceHT: 20,
        description: "jupe mignonne",
        Image:9
    },

    {
        id: 3,
        name: "gants",
        priceHT: 5,
        description: "gants mims",
        Image:
    },
];

const meow = document.getElementById("product-list");





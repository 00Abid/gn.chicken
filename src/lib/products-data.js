/**
 * SEO STRATEGY: 
 * Using .webp for all images to ensure 100/100 PageSpeed Insights score.
 * Product names are optimized for "Local Intent" (e.g., including 'Zabihah' and 'Fresh').
 */

export const products = [
    {
        id: "whole-chicken",
        name: "Whole Chicken (Full Dressed)",
        description: "100% Zabihah Halal whole chicken, cleaned and dressed. Perfect for roasts, tandoori, and large family meals.",
        image: "/whole.webp",
        price: "Market Price"
    },
    {
        id: "chicken-breast",
        name: "Fresh Chicken Breast (Boneless)",
        description: "Lean, high-protein boneless chicken breast. Ideal for fitness meal prep, grilling, and healthy recipes.",
        image: "/breast.webp",
        price: "Market Price"
    },
    {
        id: "chicken-thighs",
        name: "Juicy Chicken Thighs",
        description: "Tender and flavorful chicken thighs. Best for slow-cooked curries, biryani, and succulent BBQ.",
        image: "/thigh.webp",
        price: "Market Price"
    },
    {
        id: "alive-chicken",
        name: "Alive Chicken (Live Weight)",
        description: "Farm-fresh live broiler chickens available for on-the-spot dressing to guarantee 100% freshness.",
        image: "/boiler.webp",
        price: "Market Price"
    },
    {
        id: "chicken-skin-options",
        name: "Chicken (With / Without Skin)",
        description: "Customized chicken portions prepared with skin-on for extra flavor or skin-off for a leaner choice.",
        image: "/skin.webp",
        price: "Market Price"
    },
    {
        id: "chicken-leg",
        name: "Fresh Chicken Leg Pieces",
        description: "Whole chicken legs including thigh and drumstick. Perfect for frying or traditional tandoori preparations.",
        image: "/leg.webp",
        price: "Market Price"
    },
    {
        id: "chicken-wings",
        name: "Chicken Wings (Skin On/Off)",
        description: "Meaty chicken wings available with or without skin. The ultimate choice for appetizers and snacks.",
        image: "/wings.webp",
        price: "Market Price"
    },
    {
        id: "chicken-liver",
        name: "Fresh Chicken Liver (Kaleji)",
        description: "Nutritious and iron-rich fresh chicken liver. Cleaned and prepared for quick sautéing or masala fry.",
        image: "/kaleji.webp",
        price: "Market Price"
    },
    {
        id: "chicken-pota-gizzard",
        name: "Chicken Pota (Gizzard)",
        description: "Freshly cleaned chicken gizzards (Pota). A specialty cut known for its unique texture and flavor.",
        image: "/pota.webp",
        price: "Market Price"
    },
    {
        id: "cp-chicken-curry-piece",
        name: "CP Chicken (Curry Pieces)",
        description: "Convenient curry-cut pieces. Pre-sized for uniform cooking in gravies and traditional Indian stews.",
        image: "/cp.webp",
        price: "Market Price"
    },
    {
        id: "desi-chicken",
        name: "Desi Chicken (Country Breed)",
        description: "Authentic Desi chicken known for its rich flavor and firm texture. Sourced from local farms.",
        image: "/desi.webp",
        price: "Market Price"
    },
    {
        id: "original-desi-chicken",
        name: "Original Gaonthi Desi Chicken",
        description: "Pure original Desi/Gaonthi breed. Premium quality for traditional medicinal broths and rich curries.",
        image: "/ogdesi.webp",
        price: "Market Price"
    },
    {
        id: "broiler-chicken",
        name: "English / Broiler Chicken",
        description: "Standard broiler chicken, tender and quick-cooking. Available daily in wholesale and retail quantities.",
        image: "/boiler.webp",
        price: "Market Price"
    },
    {
        id: "fresh-egg",
        name: "Farm Fresh Eggs",
        description: "High-quality broiler eggs sourced daily. Rich in protein and essential for every household.",
        image: "/egg.webp",
        price: "Market Price"
    },
    {
        id: "desi-egg",
        name: "Original Desi Eggs",
        description: "Nutrient-dense Desi eggs from free-range country chickens. Distinct dark yolks and superior taste.",
        image: "/desiegg.webp",
        price: "Market Price"
    },
    {
        id: "skin-chicken",
        name: "Skin Piece / Skin Chicken",
        description: "Specialized skin-on chicken portions for those who prefer the traditional fried chicken texture.",
        image: "/skin-ckn.webp",
        price: "Market Price"
    },
    {
        id: "bater-quail",
        name: "Bater (Fresh Quail)",
        description: "Fresh Bater (Quail) meat. A gourmet delicacy that is high in protein and low in fat.",
        image: "/bater.webp",
        price: "Market Price"
    },
    {
        id: "chicken-heart",
        name: "Chicken Heart (Dil)",
        description: "Freshly harvested chicken hearts. Cleaned and prepared for specialty grilling or sautéing.",
        image: "/dil.webp",
        price: "Market Price"
    }
];

export function getProductById(id) {
    return products.find((product) => product.id === id);
}

export function getWhatsAppLink(productName) {
    const message = `Hi Garib Nawaz, I want to order ${productName}. Please share the current price.`;
    return `https://wa.me/918446319998?text=${encodeURIComponent(message)}`;
}
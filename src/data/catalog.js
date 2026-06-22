import { categoryImages, dealImages, heroImages, productImages, siteImages } from "./images.js";

export const navigationItems = ["Men", "Women", "Kids", "Home", "Beauty", "Genz"];

export const couponBanner = {
  image: siteImages.couponBanner,
  alt: "Get 25 percent off up to Rs. 200"
};

export const heroSlides = [
  {
    id: "genz",
    image: heroImages.genz,
    alt: "Gen Z fashion deals"
  },
  {
    id: "season-sale",
    image: heroImages.activewear,
    alt: "Activewear deals"
  },
  {
    id: "handbags",
    image: heroImages.handbags,
    alt: "Handbags deals"
  },
  {
    id: "uspa",
    image: heroImages.uspa,
    alt: "USPA fashion deals"
  }
];

export const brandDeals = [
  { id: "hm", name: "H&M", deal: "Min 50% off", image: dealImages.hm },
  { id: "roadster", name: "Roadster", deal: "Styles from Rs. 499", image: dealImages.roadster },
  { id: "levis", name: "Levis", deal: "Denims under Rs. 1299", image: dealImages.levis },
  { id: "nike", name: "Nike", deal: "Sportswear sale", image: dealImages.nike },
  { id: "biba", name: "Biba", deal: "Ethnic picks", image: dealImages.biba },
  { id: "puma", name: "Puma", deal: "Sneaker deals", image: dealImages.puma },
  { id: "mango", name: "Mango", deal: "Premium collection", image: dealImages.mango },
  { id: "jack-jones", name: "Jack & Jones", deal: "Weekend fits", image: dealImages.jackJones }
];

export const shoppingCategories = [
  { id: "ethnic", name: "Ethnic Wear", discount: "50-80% OFF", searchText: "kurta", image: categoryImages.kurtas },
  { id: "casual", name: "Casual Wear", discount: "40-80% OFF", searchText: "shirt", image: categoryImages.tshirts },
  { id: "men-activewear", name: "Men's Activewear", discount: "30-70% OFF", searchText: "sneakers", image: categoryImages.shoes },
  { id: "women-activewear", name: "Women's Activewear", discount: "30-70% OFF", searchText: "activewear", image: productImages.handbag },
  { id: "western", name: "Western Wear", discount: "40-80% OFF", searchText: "dress", image: categoryImages.dresses },
  { id: "sportswear", name: "Sportswear", discount: "30-80% OFF", searchText: "sports", image: categoryImages.shoes },
  { id: "loungewear", name: "Loungewear", discount: "30-60% OFF", searchText: "tee", image: categoryImages.tshirts },
  { id: "innerwear", name: "Innerwear", discount: "UP TO 70% OFF", searchText: "innerwear", image: categoryImages.innerwear },
  { id: "lingerie", name: "Lingerie", discount: "UP TO 70% OFF", searchText: "lingerie", image: categoryImages.lingerie },
  { id: "watches", name: "Watches", discount: "UP TO 80% OFF", searchText: "watch", image: categoryImages.watches },
  { id: "grooming", name: "Grooming", discount: "UP TO 60% OFF", searchText: "grooming", image: categoryImages.beauty },
  { id: "beauty-makeup", name: "Beauty & Makeup", discount: "UP TO 60% OFF", searchText: "beauty", image: categoryImages.beauty }
];

export const sortOptions = [
  { label: "Recommended", value: "recommended" },
  { label: "Price: Low to High", value: "low" },
  { label: "Price: High to Low", value: "high" },
  { label: "Customer Rating", value: "rating" },
  { label: "Biggest Discount", value: "discount" }
];

export const products = [
  {
    id: 1,
    brand: "Roadster",
    title: "Slim Fit Cotton Shirt",
    department: "Men",
    pricing: { current: 899, mrp: 1999 },
    rating: { score: 4.3, count: 412 },
    badge: "Bestseller",
    delivery: "2 day delivery",
    image: productImages.cottonShirt
  },
  {
    id: 2,
    brand: "Mango",
    title: "Printed A-Line Dress",
    department: "Women",
    pricing: { current: 1499, mrp: 3499 },
    rating: { score: 4.5, count: 681 },
    badge: "Only Few Left",
    delivery: "Express",
    image: productImages.alineDress
  },
  {
    id: 3,
    brand: "YK",
    title: "Kids Graphic Hoodie",
    department: "Kids",
    pricing: { current: 799, mrp: 1699 },
    rating: { score: 4.1, count: 214 },
    badge: "New Season",
    delivery: "3 day delivery",
    image: productImages.kidsHoodie
  },
  {
    id: 4,
    brand: "Home Centre",
    title: "Minimal Wall Lamp",
    department: "Home",
    pricing: { current: 1199, mrp: 2299 },
    rating: { score: 4.4, count: 98 },
    badge: "Home Deal",
    delivery: "Express",
    image: productImages.wallLamp
  },
  {
    id: 5,
    brand: "Lakme",
    title: "Matte Lipstick Set",
    department: "Beauty",
    pricing: { current: 649, mrp: 999 },
    rating: { score: 4.2, count: 325 },
    badge: "Trending",
    delivery: "2 day delivery",
    image: productImages.lipstickSet
  },
  {
    id: 6,
    brand: "Puma",
    title: "Training Sneakers",
    department: "Men",
    pricing: { current: 2199, mrp: 4999 },
    rating: { score: 4.6, count: 1028 },
    badge: "Fast Selling",
    delivery: "Express",
    image: productImages.trainingSneakers
  },
  {
    id: 7,
    brand: "Biba",
    title: "Embroidered Kurta Set",
    department: "Women",
    pricing: { current: 1799, mrp: 3999 },
    rating: { score: 4.7, count: 734 },
    badge: "Top Rated",
    delivery: "2 day delivery",
    image: productImages.kurtaSet
  },
  {
    id: 8,
    brand: "Spaces",
    title: "Cotton Bedsheet Set",
    department: "Home",
    pricing: { current: 999, mrp: 2199 },
    rating: { score: 4, count: 176 },
    badge: "Fresh",
    delivery: "3 day delivery",
    image: productImages.bedsheetSet
  },
  {
    id: 9,
    brand: "H&M",
    title: "Oversized Graphic Tee",
    department: "Genz",
    pricing: { current: 699, mrp: 1499 },
    rating: { score: 4.1, count: 518 },
    badge: "Hot Drop",
    delivery: "Express",
    image: productImages.oversizedTee
  },
  {
    id: 10,
    brand: "Nike",
    title: "Lightweight Running Shoes",
    department: "Genz",
    pricing: { current: 3299, mrp: 6995 },
    rating: { score: 4.8, count: 1562 },
    badge: "Premium",
    delivery: "2 day delivery",
    image: productImages.runningShoes
  },
  {
    id: 11,
    brand: "Marks & Spencer",
    title: "Girls Party Dress",
    department: "Kids",
    pricing: { current: 1299, mrp: 2599 },
    rating: { score: 4.4, count: 205 },
    badge: "Festive",
    delivery: "Express",
    image: productImages.girlsDress
  },
  {
    id: 12,
    brand: "Fossil",
    title: "Classic Analog Watch",
    department: "Women",
    pricing: { current: 4599, mrp: 8995 },
    rating: { score: 4.6, count: 843 },
    badge: "Luxury Pick",
    delivery: "2 day delivery",
    image: productImages.watchSet
  },
  {
    id: 13,
    brand: "Levis",
    title: "Washed Denim Jacket",
    department: "Women",
    pricing: { current: 2499, mrp: 5499 },
    rating: { score: 4.5, count: 657 },
    badge: "Editor's Pick",
    delivery: "Express",
    image: productImages.denimJacket
  },
  {
    id: 14,
    brand: "Lavie",
    title: "Structured Shoulder Bag",
    department: "Women",
    pricing: { current: 1599, mrp: 3490 },
    rating: { score: 4.2, count: 391 },
    badge: "Daily Style",
    delivery: "3 day delivery",
    image: productImages.handbag
  },
  {
    id: 15,
    brand: "Louis Philippe",
    title: "Tapered Formal Trousers",
    department: "Men",
    pricing: { current: 1899, mrp: 3799 },
    rating: { score: 4.3, count: 287 },
    badge: "Workwear",
    delivery: "2 day delivery",
    image: productImages.formalTrousers
  },
  {
    id: 16,
    brand: "The Man Company",
    title: "Long Lasting Perfume",
    department: "Beauty",
    pricing: { current: 749, mrp: 1499 },
    rating: { score: 4.1, count: 468 },
    badge: "Grooming",
    delivery: "Express",
    image: productImages.perfume
  }
];

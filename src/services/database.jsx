const categoryRanges = [
  {
    id: 1,
    name: "Electronics",
  },
  {
    id: 2,
    name: "Books",
  },
  {
    id: 3,
    name: "Clothing",
  },
  {
    id: 4,
    name: "Kitchen",
  },
  {
    id: 5,
    name: "Outdoors",
  },
  {
    id: 6,
    name: "Toys",
  },
  {
    id: 7,
    name: "Health",
  },
  {
    id: 8,
    name: "Automotive",
  },
  {
    id: 9,
    name: "Beauty",
  },
  {
    id: 10,
    name: "Music",
  },
];

const brandRanges = [
  {
    id: 1,
    title: "Mr.",
    name: "Apple",
  },
  {
    id: 2,
    title: "Ms.",
    name: "Samsung",
  },
  {
    id: 3,
    title: "Dr.",
    name: "Sony",
  },
  {
    id: 4,
    title: "Mrs.",
    name: "LG",
  },
  {
    id: 5,
    title: "Prof.",
    name: "Microsoft",
  },
  {
    id: 6,
    title: "Rev.",
    name: "Google",
  },
  {
    id: 7,
    title: "Mr.",
    name: "Huawei",
  },
  {
    id: 8,
    title: "Ms.",
    name: "Dell",
  },
  {
    id: 9,
    title: "Dr.",
    name: "HP",
  },
  {
    id: 10,
    title: "Mrs.",
    name: "Lenovo",
  },
];

const products = [
  {
    id: 1,
    code: "PROD001",
    name: "Mountain Bike",
    title: "Premium Mountain Bike",
    image:
      "https://bizweb.dktcdn.net/100/412/747/products/trinx-gt24-den-do-1cf5a533-3bb8-4ded-a371-10e3717894b8.jpg?v=1693568131703",
    description: "A lightweight road bike perfect for long rides",
    framesize: "M",
    wheelsize: "26",
    color: "Red",
    price: 999.99,
    quantity: 50,
    brand_id: 1,
    category_id: 1,
  },
  {
    id: 2,
    code: "PROD002",
    name: "Road Bike",
    title: "Carbon Fiber Road Bike",
    image:
      "https://bizweb.dktcdn.net/100/412/747/products/fascino-828-den.jpg?v=1689846396487",
    description: "A lightweight road bike perfect for long rides.",
    framesize: "L",
    wheelsize: "28",
    color: "Black",
    price: 1499.99,
    quantity: 30,
    brand_id: 2,
    category_id: 1,
  },
  {
    id: 3,
    code: "PROD003",
    name: "Hybrid Bike",
    title: "Urban Commuter Bike",
    image:
      "https://bizweb.dktcdn.net/100/412/747/products/img-20230126-200906.jpg?v=1675668620997",
    description: "An ideal bike for commuting in the city.",
    framesize: "S",
    wheelsize: "24",
    color: "Blue",
    price: 799.99,
    quantity: 40,
    brand_id: 3,
    category_id: 1,
  },
  {
    id: 4,
    code: "PROD004",
    name: "Electric Scooter",
    title: "Foldable Electric Scooter",
    image:
      "https://bizweb.dktcdn.net/100/412/747/products/fornix-fx26-trang.jpg?v=1698297060430",
    description: "A convenient and eco-friendly mode of transportation.",
    framesize: null,
    wheelsize: null,
    color: "White",
    price: 499.99,
    quantity: 20,
    brand_id: 4,
    category_id: 2,
  },
];

const priceRanges = [
  { name: "Tất cả", id: "" },
  { name: "Dưới 1 triệu", id: "under_1m" },
  { name: "Từ 1 đến 2 triệu", id: "1m_2m" },
  { name: "Từ 2 đến 5 triệu", id: "2m_5m" },
  { name: "Từ 5 đến 10 triệu", id: "5m_10m" },
  { name: "Trên 10 triệu", id: "over_10m" },
];

const colorRanges = [
  { id: "1", name: "Red", code: "#FF0000" },
  { id: "2", name: "Green", code: "#00FF00" },
  { id: "3", name: "Blue", code: "#0000FF" },
  { id: "4", name: "Yellow", code: "#FFFF00" },
  { id: "5", name: "Black", code: "#000000" },
  { id: "6", name: "White", code: "#FFFFFF" },
];

const sort = [
  { name: "A -> Z", value: "AZ" },
  { name: "Z -> A", value: "ZA" },
  { name: "Tăng dần", value: "ASC" },
  { name: "Giảm dần", value: "DESC" },
];

const product_detail = [
  {
    id: 1,
    name: "Mountain Bike",
    framesize: "M",
    wheelsize: "26",
    color: "Red",
    price: 999.99,
    quantity: 50,
    product_id: 1,
  },
  {
    id: 2,
    name: "Road Bike",
    framesize: "L",
    wheelsize: "28",
    color: "Black",
    price: 1499.99,
    quantity: 30,
    product_id: 2,
  },
  {
    id: 3,
    name: "Hybrid Bike",
    framesize: "S",
    wheelsize: "24",
    color: "Blue",
    price: 799.99,
    quantity: 40,
    product_id: 3,
  },
  {
    id: 4,
    name: "Electric Scooter",
    framesize: null,
    wheelsize: null,
    color: "White",
    price: 499.99,
    quantity: 20,
    product_id: 4,
  },
  {
    id: 5,
    name: "Kids Bike",
    framesize: "XS",
    wheelsize: "16",
    color: "Pink",
    price: 299.99,
    quantity: 25,
    product_id: 5,
  },
  {
    id: 6,
    name: "Electric Skateboard",
    framesize: null,
    wheelsize: null,
    color: "Black",
    price: 699.99,
    quantity: 15,
    product_id: 6,
  },
];

export {
  categoryRanges,
  products,
  brandRanges,
  priceRanges,
  colorRanges,
  sort,
  product_detail
};
// import { categories, products, users } from './data/data';

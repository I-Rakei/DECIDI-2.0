import React from "react";
import ProductCard from "./ProductCard";
import productImage from "../images/Product.jpg";

const products = [
  {
    id: 1,
    image: productImage,
    name: "Aqua Pure Collection",
    price: "1,900.00",
  },
  {
    id: 2,
    image: productImage,
    name: "Aqua Pure Collection",
    price: "1,990.00",
  },
  { id: 3, image: productImage, name: "Aqua Pure Collection", price: "870.00" },
  {
    id: 4,
    image: productImage,
    name: "Aqua Pure Collection",
    price: "1,450.00",
  },
];

const Products = () => (
  <section className="container mx-auto my-10 px-6">
    <h2 className="text-2xl font-bold text-gray-800 mb-6">Featured Products</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  </section>
);

export default Products;

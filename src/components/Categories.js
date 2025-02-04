import React from "react";
import CategoryCard from "./CategoryCard";
import kitchen from "../images/Kitchen.jpg";
import care from "../images/Care.jpg";
import fitness from "../images/Fitness.jpg";
import kids from "../images/Kids.jpg";
import tech from "../images/Tech.jpg";

const categories = [
  { id: 1, name: "Kitchen", image: kitchen },
  { id: 2, name: "Personal Care", image: care },
  { id: 3, name: "Fitness", image: fitness },
  { id: 4, name: "Kids", image: kids },
  { id: 5, name: "Tech & Accessories", image: tech },
];

const Categories = () => (
  <section className="container mx-auto my-10 px-6">
    <h2 className="text-2xl font-bold text-gray-800 mb-6">Shop by Category</h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
      {categories.map((category) => (
        <CategoryCard key={category.id} {...category} />
      ))}
    </div>
  </section>
);

export default Categories;

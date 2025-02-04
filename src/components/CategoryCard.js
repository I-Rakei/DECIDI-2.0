import React from "react";

const CategoryCard = ({ name, image }) => (
  <div className="text-center transform transition-all duration-300 hover:scale-105">
    <img src={image} alt={name} className="w-full rounded-t-lg" />
    <div className="bg-orange-500 text-white rounded-b-lg py-6 shadow-md hover:bg-orange-600 transition-colors">
      {name}
    </div>
  </div>
);

export default CategoryCard;

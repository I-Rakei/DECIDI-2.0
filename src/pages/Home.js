import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import Products from "../components/Products";
import Footer from "../components/Footer";
import BestSalesCarousel from "../components/BestSalesCarousel";
const Home = () => (
  <div className="bg-gray-100 text-gray-800">
    <Navbar />
    <Hero />
    <BestSalesCarousel />
    <Categories />
    <Products />
    <Footer />
  </div>
);

export default Home;

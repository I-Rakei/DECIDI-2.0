import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FaWhatsapp, FaFacebook, FaPhone } from "react-icons/fa"; // Import icons

import hero1 from "../images/carousel1.png";
import hero2 from "../images/carousel2.jpg";
import hero3 from "../images/carousel3.png";

const Hero = () => (
  <section className="bg-gradient-to-r from-orange-400 to-orange-600 py-10">
    <div className="container mx-auto flex flex-col md:flex-row items-center px-6 max-w-5xl">
      {/* Text Section */}
      <div className="text-center md:text-left md:w-1/2 space-y-4">
        <h1 className="text-4xl font-bold text-white">
          Shop the Best Deals with DecidiShop
        </h1>
        <p className="text-lg text-white">
          Enjoy free delivery to your doorstep!
        </p>
      </div>

      {/* Carousel Section */}
      <div className="relative w-full max-w-lg h-64 overflow-hidden rounded-lg shadow-lg mt-4 md:mt-0">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={10}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation
          loop
        >
          <SwiperSlide>
            <img
              src={hero1}
              alt="Hero 1"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={hero2}
              alt="Hero 2"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={hero3}
              alt="Hero 3"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>

    {/* Social Icons Section */}
    <div className="container mx-auto flex justify-center mt-6 space-x-6">
      <a
        href="https://wa.me/your-whatsapp-number" // Replace with your WhatsApp link
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-orange-200 transition duration-300"
      >
        <FaWhatsapp className="w-8 h-8" />
      </a>
      <a
        href="https://www.facebook.com/your-facebook-page" // Replace with your Facebook link
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-orange-200 transition duration-300"
      >
        <FaFacebook className="w-8 h-8" />
      </a>
      <a
        href="tel:your-phone-number" // Replace with your phone number
        className="text-white hover:text-orange-200 transition duration-300"
      >
        <FaPhone className="w-8 h-8" />
      </a>
    </div>
  </section>
);

export default Hero;

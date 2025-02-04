import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import ProductCard from "./ProductCard";
import productImage from "../images/Product.jpg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
  {
    id: 3,
    image: productImage,
    name: "Aqua Pure Collection",
    price: "870.00",
  },
  {
    id: 4,
    image: productImage,
    name: "Aqua Pure Collection",
    price: "1,450.00",
  },
  {
    id: 5,
    image: productImage,
    name: "Aqua Pure Collection",
    price: "1,200.00",
  },
  {
    id: 6,
    image: productImage,
    name: "Aqua Pure Collection",
    price: "1,300.00",
  },
  {
    id: 7,
    image: productImage,
    name: "Aqua Pure Collection",
    price: "1,600.00",
  },
  {
    id: 8,
    image: productImage,
    name: "Aqua Pure Collection",
    price: "1,700.00",
  },
  {
    id: 9,
    image: productImage,
    name: "Aqua Pure Collection",
    price: "1,800.00",
  },
  {
    id: 10,
    image: productImage,
    name: "Aqua Pure Collection",
    price: "2,000.00",
  },
];

const ProductCarousel = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Featured Products
      </h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={24}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        className="w-full"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard {...product} />
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: #f97316;
          background: white;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .swiper-button-next:after,
        .swiper-button-prev:after {
          font-size: 20px;
        }

        .swiper-pagination-bullet {
          background: #f97316;
        }

        .swiper-pagination-bullet-active {
          background: #f97316;
        }
      `}</style>
    </div>
  );
};

export default ProductCarousel;

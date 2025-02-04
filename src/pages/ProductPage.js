import React, { useState } from "react";
import productImage from "../images/productEX.png"; // Replace with actual image

const ProductPage = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div className="bg-orange-500 min-h-screen px-4 md:px-16 py-10">
      <div className="max-w-6xl mx-auto bg-white p-6 rounded-xl shadow-lg">
        {/* Breadcrumbs */}
        <nav className="text-sm text-gray-600 mb-4">
          <a href="#" className="hover:text-orange-500 transition">
            Página Inicial
          </a>{" "}
          &gt;
          <a href="#" className="hover:text-orange-500 transition">
            {" "}
            Cuidados Pessoais
          </a>{" "}
          &gt;
          <span className="text-gray-900 font-medium">
            {" "}
            Hair Grower Shampoo & Oil
          </span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="relative w-full overflow-hidden rounded-xl shadow-md">
              <img
                src={productImage}
                alt="Product"
                className="w-full h-full object-cover transform hover:scale-105 transition duration-300"
              />
            </div>
            <p className="text-sm text-gray-500">
              Role o mouse sobre a imagem para aproximar
            </p>
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Hair Grower Shampoo & Oil: Kit perfeito para tratamento de
              Calvície!
            </h1>
            <p className="text-gray-500 mt-2">
              Vendido e entregue pela <strong>DecidiShop Company</strong>
            </p>

            {/* Pricing */}
            <div className="mt-4">
              <p className="text-xl font-semibold text-gray-900">
                Preço: <span className="text-red-600">1,190 Mt</span>
              </p>
              <p className="text-sm text-gray-500 line-through">1,900 Mt</p>
              <p className="text-sm text-green-600 font-medium">
                Economize 710 Mt
              </p>
            </div>

            {/* Quantity Selector */}
            <div className="mt-4 flex items-center">
              <p className="text-sm font-semibold">Quantidade:</p>
              <div className="ml-3 flex items-center space-x-2">
                <button className="bg-gray-300 px-3 py-1 rounded-md hover:bg-gray-400 transition">
                  -
                </button>
                <span className="px-5 py-1 border text-center">1</span>
                <button className="bg-gray-300 px-3 py-1 rounded-md hover:bg-gray-400 transition">
                  +
                </button>
              </div>
            </div>

            {/* Buy Button - Opens Modal */}
            <button
              className="mt-6 bg-orange-600 text-white py-3 w-full rounded-lg flex items-center justify-center space-x-2 text-lg font-semibold hover:bg-orange-700 transition duration-200 shadow-md"
              onClick={() => setIsFormOpen(true)}
            >
              <i className="fas fa-shopping-cart"></i>
              <span>COMPRAR AGORA</span>
            </button>

            {/* Features */}
            <div className="mt-6 text-sm text-gray-600 space-y-2">
              <p>
                🚚 <span className="font-medium">Entrega Grátis:</span> Maputo e
                Matola!
              </p>
              <p>
                ✅ <span className="font-medium">Garantia de Qualidade:</span>{" "}
                Você tem 30 dias!
              </p>
              <p>
                🔒 <span className="font-medium">Compra Segura:</span> Seus
                dados estão protegidos.
              </p>
            </div>

            {/* Order Count */}
            <div className="mt-4 text-gray-700">
              <strong>74</strong> pedidos entregues nos últimos 60 dias ✅
            </div>
          </div>
        </div>

        {/* Product Description */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold">Descrição</h2>
          <p className="text-gray-700 mt-2">
            Cansado de ver seu cabelo desaparecer? Descubra a solução para a
            calvície que realmente funciona!...
          </p>
        </div>
      </div>

      {/* Order Form Modal */}
      {isFormOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 backdrop-blur-md">
          <div className="bg-white w-96 p-6 rounded-lg shadow-lg border border-orange-500 relative">
            {/* Close Button */}
            <button
              className="absolute top-3 right-3 text-gray-600 hover:text-red-600 transition"
              onClick={() => setIsFormOpen(false)}
            >
              <i className="fas fa-times"></i>
            </button>

            <h2 className="text-xl font-bold text-orange-600 text-center">
              RECEBA EM TODO MOÇAMBIQUE 🇲🇿
            </h2>

            {/* Order Summary */}
            <div className="bg-orange-100 p-3 rounded-md mt-3 shadow">
              <p className="font-semibold">
                Hair Grower Shampoo & Oil: Kit perfeito para calvície
              </p>
              <p className="text-right font-bold text-lg">1,190.00 Mt</p>
            </div>

            <div className="mt-4 space-y-3">
              {[
                "NOME",
                "CONTACTO",
                "PROVÍNCIA",
                "BAIRRO/CIDADE",
                "REFERÊNCIA",
              ].map((label) => (
                <div key={label}>
                  <label className="block text-sm font-semibold text-gray-700">
                    {label} *
                  </label>
                  <input
                    type="text"
                    placeholder={`Digite seu ${label.toLowerCase()}`}
                    className="w-full p-2 border rounded-md focus:ring-2 focus:ring-orange-500 outline-none"
                  />
                </div>
              ))}

              {/* Delivery Date & Time */}
              <div>
                <label className="block text-sm font-semibold text-gray-700">
                  DATA E HORA DE ENTREGA *
                </label>
                <input
                  type="datetime-local"
                  className="w-full p-2 border rounded-md focus:ring-2 focus:ring-orange-500 outline-none"
                />
              </div>
            </div>

            {/* Submit Order Button */}
            <button className="mt-5 bg-orange-600 text-white py-3 w-full rounded-lg font-semibold hover:bg-orange-700 transition shadow-md">
              🛒 Concluir pedido - 1,190.00 Mt
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductPage;

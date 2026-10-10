import React from "react";
import { FaCheckCircle, FaTimes, FaShoppingBag } from "react-icons/fa";

const OrderPlace = ({ setOrderPlaced }) => {
  return (
    <section className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-md rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-2xl sm:p-8 animate-[fadeIn_0.3s_ease-out]">

        {/* Close Icon */}
        <button
          type="button"
          onClick={() => setOrderPlaced(false)}
          aria-label="Close order confirmation"
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition hover:bg-red-100 hover:text-red-600"
        >
          <FaTimes />
        </button>

        {/* Success Icon */}
        <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-green-100 sm:h-24 sm:w-24">
          <FaCheckCircle className="text-5xl text-green-500 sm:text-6xl" />
        </div>

        {/* Message */}
        <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
          Order Placed!
        </h2>

        <p className="mt-3 text-sm leading-6 text-gray-600 sm:text-base">
          Thank you for shopping with us! Your order has been placed
          successfully.
        </p>

        <div className="my-6 rounded-xl bg-orange-50 p-4">
          <p className="font-semibold text-orange-600">
            Happy Shopping!
          </p>
          <p className="mt-1 text-sm text-gray-500">
            Thank you for choosing our store.
          </p>
        </div>

        {/* Continue Shopping */}
        <button
          type="button"
          onClick={() => setOrderPlaced(false)}
          className="flex w-full items-center justify-center gap-2 rounded-full bg-[#FF5F1F] px-5 py-3.5 font-semibold text-white shadow-md transition duration-300 hover:bg-orange-600 hover:shadow-lg active:scale-[0.98] sm:py-4"
        >
          <FaShoppingBag />
          Continue Shopping
        </button>

      </div>
    </section>
  );
};

export default OrderPlace;

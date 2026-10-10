import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const AddToCartButton = ({
  product,
  addToCart,
  className = "",
  children = "Add to Cart",
}) => {
  return (
    <button
      type="button"
      onClick={() => addToCart(product)}
      className={`flex w-full min-w-0 items-center justify-center gap-2 rounded-xl bg-[#FF5F1F] px-3 py-2.5 text-sm font-semibold text-white transition duration-300 hover:bg-orange-600 active:scale-95 ${className}`}
    >
      <FaShoppingCart className="shrink-0" />
      <span className="truncate">{children}</span>
    </button>
  );
};

export default AddToCartButton;

import React from "react";
import { GoHeart, GoHeartFill } from "react-icons/go";

const WishlistButton = ({
  product,
  wishlist = [],
  addToWishlist,
  className = "",
}) => {
  const isWishlisted = wishlist.some(
    (item) => item.id === product.id
  );

  return (
    <button
      type="button"
      onClick={() => addToWishlist(product)}
      aria-label={
        isWishlisted
          ? `Remove ${product.name} from wishlist`
          : `Add ${product.name} to wishlist`
      }
      aria-pressed={isWishlisted}
      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition duration-300 ${
        isWishlisted
          ? "bg-red-50 text-red-500"
          : "bg-gray-100 text-gray-500 hover:bg-red-50 hover:text-red-500"
      } ${className}`}
    >
      {isWishlisted ? (
        <GoHeartFill className="text-xl" />
      ) : (
        <GoHeart className="text-xl" />
      )}
    </button>
  );
};

export default WishlistButton;

import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  FaShoppingCart,
  FaArrowLeft,
  FaStar,
  FaCheck,
} from "react-icons/fa";
import { GoHeartFill } from "react-icons/go";
import { useShop } from "../context/ShopContext";
import ProductList from "../ProductList";

function ProductDetails() {
  const { id } = useParams();

  const {
    addToCart,
    addToWishlist,
    wishlist,
    addRecentlyViewed,
  } = useShop();

  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  const product = ProductList.find(
    (item) => String(item.id) === String(id)
  );

  useEffect(() => {
    setQuantity(1);
    setAddedToCart(false);

    if (product && typeof addRecentlyViewed === "function") {
      addRecentlyViewed(product);
    }
  }, [id]); // eslint-disable-line react-hooks/exhaustive-deps

  if (!product) {
    return (
      <main className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
        <h2 className="text-2xl font-bold text-gray-800 sm:text-3xl">
          Product Not Found
        </h2>

        <p className="mt-3 text-sm text-gray-500 sm:text-base">
          Sorry, this product is not available.
        </p>

        <Link
          to="/"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#FF5F1F] px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
        >
          <FaArrowLeft />
          Back to Home
        </Link>
      </main>
    );
  }

  const price = Number(product.price) || 0;
  const oldPrice = Number(product.oldPrice) || 0;

  const isWishlisted = wishlist.some(
    (item) => item.id === product.id
  );

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i += 1) {
      addToCart(product);
    }

    setAddedToCart(true);
  };

  const handleQuantityChange = (amount) => {
    setQuantity((current) => Math.max(1, current + amount));
    setAddedToCart(false);
  };

  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 sm:py-10 lg:px-8">
      {/* Back to Shopping */}
      <Link
        to="/"
        className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-gray-600 transition hover:text-[#FF5F1F] sm:mb-8 sm:text-base"
      >
        <FaArrowLeft />
        Continue Shopping
      </Link>

      {/* Product Details */}
      <div className="grid grid-cols-1 gap-7 md:grid-cols-2 md:gap-10 lg:gap-14">
        {/* Product Image */}
        <div className="flex min-h-[280px] items-center justify-center overflow-hidden rounded-2xl border border-gray-100 bg-gray-50 p-5 sm:min-h-[380px] sm:rounded-3xl sm:p-8 md:min-h-[440px]">
          <img
            src={product.image}
            alt={product.name}
            className="max-h-[380px] w-full object-contain sm:max-h-[420px]"
          />
        </div>

        {/* Product Information */}
        <div className="flex min-w-0 flex-col justify-center">
          <span className="mb-3 w-fit rounded-full bg-orange-100 px-4 py-1.5 text-xs font-semibold text-orange-700 sm:text-sm">
            {product.category || "Featured Product"}
          </span>

          <h1 className="break-words text-2xl font-bold leading-tight text-gray-900 sm:text-3xl lg:text-4xl">
            {product.name}
          </h1>

          {/* Rating Display */}
          <div className="mt-4 flex flex-wrap items-center gap-1.5 text-amber-500">
            {Array.from({ length: 5 }, (_, index) => (
              <FaStar key={index} />
            ))}

            <span className="ml-2 text-xs text-gray-500 sm:text-sm">
              Featured product
            </span>
          </div>

          {/* Price */}
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <span className="text-2xl font-bold text-[#FF5F1F] sm:text-3xl">
              ${price.toFixed(2)}
            </span>

            {oldPrice > price && (
              <>
                <span className="text-base text-gray-400 line-through sm:text-lg">
                  ${oldPrice.toFixed(2)}
                </span>

                <span className="rounded-md bg-red-100 px-2.5 py-1 text-xs font-semibold text-red-600 sm:text-sm">
                  Save ${(oldPrice - price).toFixed(2)}
                </span>
              </>
            )}

            {product.onSale && (
              <span className="rounded-md bg-red-100 px-3 py-1 text-xs font-semibold text-red-600 sm:text-sm">
                On Sale
              </span>
            )}

            {product.newArrival && (
              <span className="rounded-md bg-green-100 px-3 py-1 text-xs font-semibold text-green-700 sm:text-sm">
                New Arrival
              </span>
            )}
          </div>

          {/* Description */}
          <p className="mt-5 text-sm leading-7 text-gray-600 sm:mt-6 sm:text-base">
            Discover our {product.name}, selected for style and everyday
            comfort. Add it to your cart or wishlist for a convenient
            shopping experience.
          </p>

          {/* Quantity and Buttons */}
          <div className="mt-7 flex flex-wrap items-center gap-3 sm:gap-4">
            <div className="flex h-12 shrink-0 items-center rounded-full border border-gray-300 sm:h-13">
              <button
                type="button"
                onClick={() => handleQuantityChange(-1)}
                disabled={quantity <= 1}
                aria-label="Decrease quantity"
                className="flex h-full w-10 items-center justify-center rounded-l-full text-lg transition hover:text-[#FF5F1F] disabled:cursor-not-allowed disabled:opacity-40 sm:w-12"
              >
                −
              </button>

              <span className="min-w-8 text-center font-semibold text-gray-800">
                {quantity}
              </span>

              <button
                type="button"
                onClick={() => handleQuantityChange(1)}
                aria-label="Increase quantity"
                className="flex h-full w-10 items-center justify-center rounded-r-full text-lg transition hover:text-[#FF5F1F] sm:w-12"
              >
                +
              </button>
            </div>

            <button
              type="button"
              onClick={handleAddToCart}
              className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full bg-[#FF5F1F] px-4 py-3 text-sm font-semibold text-white transition hover:bg-orange-600 active:scale-[0.98] sm:flex-none sm:px-6 sm:text-base"
            >
              {addedToCart ? <FaCheck /> : <FaShoppingCart />}
              {addedToCart ? "Added to Cart" : "Add to Cart"}
            </button>

            <button
              type="button"
              onClick={() => addToWishlist(product)}
              aria-pressed={isWishlisted}
              className={`inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold transition sm:w-auto sm:text-base ${
                isWishlisted
                  ? "border-red-500 bg-red-50 text-red-600"
                  : "border-[#FF5F1F] text-[#FF5F1F] hover:bg-orange-50"
              }`}
            >
              <GoHeartFill className="text-lg" />
              {isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
            </button>
          </div>

          {/* Quantity Total */}
          <p className="mt-4 text-sm text-gray-500">
            Total for {quantity} {quantity === 1 ? "item" : "items"}:{" "}
            <span className="font-bold text-gray-800">
              ${(price * quantity).toFixed(2)}
            </span>
          </p>

          {/* Benefits */}
          <div className="mt-7 grid grid-cols-1 gap-3 border-t border-gray-200 pt-6 text-sm text-gray-600 sm:grid-cols-2">
            <p>✓ Quality-focused selection</p>
            <p>✓ Easy online shopping</p>
            <p>✓ Convenient cart management</p>
            <p>✓ Responsive mobile experience</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ProductDetails;

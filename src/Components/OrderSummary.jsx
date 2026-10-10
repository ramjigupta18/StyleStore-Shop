import React from "react";
import {
  FaShoppingBag,
  FaTruck,
  FaCheckCircle,
  FaTimes,
} from "react-icons/fa";

const OrderSummary = ({
  cart,
  subtotal,
  shippingFee,
  orderTotal,
  setOrderPlaced,
  setOrderSummary,
  setCart,
}) => {
  const formatPrice = (price) =>
    `$${(Number(price) || 0).toFixed(2)}`;

  const handlePlaceOrder = () => {
    if (!cart || cart.length === 0) return;

    setOrderSummary(false);
    setCart([]);
    setOrderPlaced(true);
  };

  return (
    <section
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 p-3 backdrop-blur-sm sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="order-summary-title"
    >
      <div className="flex max-h-[92dvh] w-full max-w-xl flex-col overflow-hidden rounded-3xl bg-white shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-100 px-5 py-5 sm:px-7">
          <div>
            <h2
              id="order-summary-title"
              className="text-xl font-bold text-gray-900 sm:text-2xl"
            >
              Order Summary
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Review your items before placing the order.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setOrderSummary(false)}
            aria-label="Close order summary"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition hover:bg-red-50 hover:text-red-500"
          >
            <FaTimes />
          </button>
        </div>

        {/* Order Items */}
        <div className="flex-1 space-y-3 overflow-y-auto px-5 py-4 sm:px-7">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between gap-4 rounded-xl border border-gray-100 bg-gray-50 p-3"
            >
              <div className="flex min-w-0 items-center gap-3">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-white p-1">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-contain"
                  />
                </div>

                <div className="min-w-0">
                  <h3 className="line-clamp-2 text-sm font-semibold text-gray-800">
                    {item.name}
                  </h3>

                  <p className="mt-1 text-xs text-gray-500">
                    Quantity: {item.quantity}
                  </p>
                </div>
              </div>

              <span className="shrink-0 text-sm font-bold text-gray-900">
                {formatPrice(
                  Number(item.price) * Number(item.quantity)
                )}
              </span>
            </div>
          ))}

          {cart.length === 0 && (
            <p className="py-8 text-center text-gray-500">
              Your cart is empty.
            </p>
          )}
        </div>

        {/* Price Breakdown */}
        <div className="border-t border-gray-100 px-5 py-5 sm:px-7">
          <div className="mb-4 flex flex-col gap-3 rounded-xl bg-green-50 p-3">
            <div className="flex items-center gap-3 text-sm text-green-700">
              <FaShoppingBag />
              <span>{cart.length} product types in your order</span>
            </div>

            <div className="flex items-center gap-3 text-sm text-green-700">
              <FaTruck />
              <span>Shipping and handling included below</span>
            </div>
          </div>

          <div className="space-y-3 text-sm">
            <div className="flex justify-between gap-3 text-gray-600">
              <span>Subtotal</span>
              <span className="font-medium text-gray-900">
                {formatPrice(subtotal)}
              </span>
            </div>

            <div className="flex justify-between gap-3 text-gray-600">
              <span>Shipping & Handling</span>
              <span className="font-medium text-gray-900">
                {formatPrice(shippingFee)}
              </span>
            </div>

            <div className="flex items-center justify-between gap-3 border-t border-dashed border-gray-200 pt-4">
              <span className="text-base font-bold text-gray-900">
                Order Total
              </span>

              <span className="text-2xl font-extrabold text-orange-600">
                {formatPrice(orderTotal)}
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <button
              type="button"
              onClick={() => setOrderSummary(false)}
              className="rounded-full border border-gray-300 px-5 py-3 font-semibold text-gray-700 transition hover:bg-gray-50"
            >
              Continue Shopping
            </button>

            <button
              type="button"
              disabled={cart.length === 0}
              onClick={handlePlaceOrder}
              className="flex items-center justify-center gap-2 rounded-full bg-orange-500 px-5 py-3 font-semibold text-white transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:bg-gray-300"
            >
              <FaCheckCircle />
              Place Order
            </button>
          </div>

          <p className="mt-3 text-center text-xs text-gray-400">
            Please verify your order before continuing.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OrderSummary;

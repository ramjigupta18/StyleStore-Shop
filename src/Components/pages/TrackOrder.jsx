import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaTruck,
  FaSearch,
  FaBox,
  FaClipboardCheck,
  FaShippingFast,
} from "react-icons/fa";
import SharedNavbar from "../SharedNavbar";

const TrackOrder = () => {
  const [orderId, setOrderId] = useState("");
  const [email, setEmail] = useState("");
  const [searched, setSearched] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearched(true);
  };

  const trackingSteps = [
    {
      icon: <FaClipboardCheck />,
      title: "Order Confirmed",
      description: "Your order details have been received.",
    },
    {
      icon: <FaBox />,
      title: "Processing",
      description: "Your order is being prepared.",
    },
    {
      icon: <FaShippingFast />,
      title: "Shipped",
      description: "Shipping updates will appear when available.",
    },
    {
      icon: <FaTruck />,
      title: "Delivered",
      description: "Your order will be marked delivered after confirmation.",
    },
  ];

  return (
    <main className="min-h-screen mt-20 bg-gray-50 px-4 py-12 sm:px-6 sm:py-16 lg:px-8">

        <SharedNavbar />

      <div className="mx-auto max-w-5xl">
        {/* Heading */}
        <div className="mb-10 text-center sm:mb-14">
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100 text-orange-500">
            <FaTruck size={30} />
          </div>

          <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
            Order Updates
          </p>

          <h1 className="mt-3 text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
            Track Your <span className="text-orange-500">Order</span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
            Enter your order details below to look up your order information.
          </p>
        </div>

        {/* Tracking Form */}
        <section className="rounded-3xl border border-gray-100 bg-white p-5 shadow-sm sm:p-8 lg:p-10">
          <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
            Order Tracking
          </h2>

          <p className="mt-2 text-sm leading-6 text-gray-500">
            Use the order ID and email address associated with your purchase.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-7 grid gap-5 md:grid-cols-2"
          >
            <div>
              <label
                htmlFor="tracking-order-id"
                className="mb-2 block text-sm font-semibold text-gray-700"
              >
                Order ID *
              </label>

              <input
                id="tracking-order-id"
                type="text"
                value={orderId}
                onChange={(e) => {
                  setOrderId(e.target.value);
                  setSearched(false);
                }}
                placeholder="e.g. ORD-12345"
                required
                className="w-full min-w-0 rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
              />
            </div>

            <div>
              <label
                htmlFor="tracking-email"
                className="mb-2 block text-sm font-semibold text-gray-700"
              >
                Email Address *
              </label>

              <input
                id="tracking-email"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setSearched(false);
                }}
                placeholder="you@example.com"
                autoComplete="email"
                required
                className="w-full min-w-0 rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
              />
            </div>

            <div className="md:col-span-2">
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-3.5 font-bold text-white transition hover:bg-orange-600 sm:w-auto"
              >
                <FaSearch /> Track Order
              </button>
            </div>
          </form>

          {searched && (
            <div
              role="status"
              className="mt-6 rounded-xl border border-orange-200 bg-orange-50 p-4"
            >
              <p className="font-semibold text-gray-900">
                Tracking lookup demo
              </p>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                Order ID: <span className="font-semibold">{orderId}</span>
              </p>
              <p className="text-sm leading-6 text-gray-600">
                Email: <span className="font-semibold">{email}</span>
              </p>
              <p className="mt-2 text-sm leading-6 text-orange-700">
                No live status is available yet. Connect an order tracking
                backend to retrieve the actual status.
              </p>
            </div>
          )}
        </section>

        {/* Tracking Steps */}
        <section className="mt-8 rounded-3xl bg-white p-5 shadow-sm sm:p-8">
          <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
            How Order Tracking Works
          </h2>

          <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {trackingSteps.map((step, index) => (
              <div
                key={step.title}
                className="rounded-2xl border border-gray-100 p-5"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-100 text-lg text-orange-500">
                  {step.icon}
                </div>

                <p className="mt-4 text-xs font-bold uppercase tracking-wider text-orange-500">
                  Step {index + 1}
                </p>

                <h3 className="mt-2 font-bold text-gray-900">{step.title}</h3>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Help */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600">
            Need help with your order?
          </p>

          <Link
            to="/contact"
            className="mt-2 inline-block font-bold text-orange-500 hover:text-orange-600"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </main>
  );
};

export default TrackOrder;

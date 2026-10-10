import React from "react";
import { Link } from "react-router-dom";
import {
  FaTruck,
  FaBoxOpen,
  FaUndoAlt,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";

import SharedNavbar from "../SharedNavbar";

const ShippingReturns = () => {
  const shippingSteps = [
    {
      number: "01",
      title: "Order Placed",
      description:
        "Your order details are recorded after you complete the ordering process.",
    },
    {
      number: "02",
      title: "Order Processing",
      description:
        "The store prepares your order for dispatch.",
    },
    {
      number: "03",
      title: "Order Dispatched",
      description:
        "Once dispatched, tracking details can be provided if a shipping service is integrated.",
    },
    {
      number: "04",
      title: "Delivery",
      description:
        "Your order is delivered according to the shipping service's estimated timeline.",
    },
  ];

  const returnPoints = [
    "Check the product condition when your order arrives.",
    "Keep your order confirmation and relevant purchase details.",
    "Contact customer support to ask about return eligibility.",
    "Follow the return instructions provided by the store.",
  ];

  return (
    <main className="min-h-screen mt-20 bg-white text-gray-800">

        <SharedNavbar />

      {/* Hero */}
      <section className="bg-orange-50 px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100 text-orange-500">
            <FaTruck size={30} />
          </div>

          <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
            Delivery & Returns
          </p>

          <h1 className="mt-3 text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
            Shipping & <span className="text-orange-500">Returns</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
            Find information about the order delivery process and how to
            contact us with return-related questions.
          </p>
        </div>
      </section>

      {/* Shipping Information */}
      <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-orange-500">
              <FaTruck size={22} />
            </div>

            <div>
              <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                Shipping Information
              </h2>
              <p className="mt-1 text-sm text-gray-500">
                How an order moves from placement to delivery.
              </p>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {shippingSteps.map((step) => (
              <article
                key={step.number}
                className="rounded-2xl border border-gray-100 bg-gray-50 p-6 transition hover:border-orange-200 hover:bg-orange-50/50"
              >
                <span className="text-sm font-extrabold text-orange-500">
                  {step.number}
                </span>

                <h3 className="mt-4 text-lg font-bold text-gray-900">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {step.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-orange-100 bg-orange-50 p-5 sm:p-6">
            <h3 className="font-bold text-gray-900">Delivery charges and timing</h3>
            <p className="mt-2 text-sm leading-7 text-gray-600">
              Shipping charges, delivery areas, and delivery timelines depend
              on the store's actual shipping configuration. Confirm these
              details at checkout before placing an order.
            </p>
          </div>
        </div>
      </section>

      {/* Returns */}
      <section className="bg-gray-50 px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 md:items-start">
          <div>
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-orange-500">
              <FaUndoAlt size={22} />
            </div>

            <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
              Returns & Exchanges
            </h2>

            <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
              If you have a concern about a delivered product, contact the
              store's support team to confirm whether a return or exchange is
              available for your order.
            </p>

            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-orange-500 px-6 py-3 font-bold text-white transition hover:bg-orange-600"
            >
              Contact Support <FaArrowRight />
            </Link>
          </div>

          <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8">
            <div className="flex items-center gap-3">
              <FaBoxOpen className="text-2xl text-orange-500" />

              <h3 className="text-xl font-bold text-gray-900">
                Before Requesting a Return
              </h3>
            </div>

            <ul className="mt-6 space-y-5">
              {returnPoints.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <FaCheckCircle className="mt-1 shrink-0 text-orange-500" />

                  <span className="text-sm leading-6 text-gray-600">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-4xl rounded-3xl bg-gray-900 px-6 py-9 text-center sm:px-10 sm:py-12">
          <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
            Need Help With an Order?
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-gray-300">
            Reach out to our support team for assistance with shipping or
            return-related questions.
          </p>

          <Link
            to="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-orange-500 px-6 py-3 font-bold text-white transition hover:bg-orange-600"
          >
            Get in Touch <FaArrowRight />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default ShippingReturns;

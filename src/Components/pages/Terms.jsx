import React from "react";
import { Link } from "react-router-dom";
import {
  FaFileContract,
  FaShoppingBag,
  FaCreditCard,
  FaUndoAlt,
  FaUserCheck,
  FaExclamationCircle,
} from "react-icons/fa";
import SharedNavbar from "../SharedNavbar";

const Terms = () => {
  const terms = [
    {
      icon: <FaUserCheck />,
      title: "1. Use of the Website",
      description:
        "By using this website, you agree to use it lawfully and not interfere with its operation or attempt unauthorized access.",
    },
    {
      icon: <FaShoppingBag />,
      title: "2. Products and Information",
      description:
        "Product descriptions, images, prices, and availability should be reviewed before ordering. Actual product details and availability may change.",
    },
    {
      icon: <FaCreditCard />,
      title: "3. Orders and Payments",
      description:
        "Orders are subject to confirmation and availability. Any payment terms, taxes, and applicable charges should be displayed clearly before checkout.",
    },
    {
      icon: <FaUndoAlt />,
      title: "4. Shipping and Returns",
      description:
        "Shipping, cancellation, return, and exchange requests are subject to the store's published policies and applicable law.",
    },
    {
      icon: <FaExclamationCircle />,
      title: "5. Website Availability",
      description:
        "We aim to keep the website available and accurate, but temporary interruptions, technical errors, or updates may occur.",
    },
    {
      icon: <FaFileContract />,
      title: "6. Changes to These Terms",
      description:
        "These terms may be updated when website features, services, or applicable requirements change. Updated terms should be published on this page.",
    },
  ];

  return (
    <main className="min-h-screen mt-20 bg-gray-50 px-4 py-12 sm:px-6 sm:py-16 lg:px-8">

        <SharedNavbar />

      <div className="mx-auto max-w-5xl">
        {/* Heading */}
        <header className="mb-10 text-center sm:mb-14">
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100 text-orange-500">
            <FaFileContract size={30} />
          </div>

          <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
            Website Guidelines
          </p>

          <h1 className="mt-3 text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
            Terms & <span className="text-orange-500">Conditions</span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
            Please read these general terms before using the StyleStore
            shopping website.
          </p>
        </header>

        {/* Important Notice */}
        <div className="mb-8 rounded-2xl border border-orange-200 bg-orange-50 p-5 sm:p-6">
          <h2 className="font-bold text-gray-900">Demo Website Notice</h2>
          <p className="mt-2 text-sm leading-7 text-gray-600">
            This page is a general starter template, not legal advice. Before
            launching a commercial store, adapt these terms to your actual
            business practices and applicable legal requirements.
          </p>
        </div>

        {/* Terms List */}
        <div className="space-y-5">
          {terms.map((term) => (
            <section
              key={term.title}
              className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition hover:border-orange-200 sm:p-7"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-lg text-orange-500">
                  {term.icon}
                </div>

                <div className="min-w-0">
                  <h2 className="text-lg font-bold text-gray-900 sm:text-xl">
                    {term.title}
                  </h2>

                  <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base">
                    {term.description}
                  </p>
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-10 rounded-3xl bg-gray-900 px-6 py-9 text-center sm:px-10 sm:py-12">
          <h2 className="text-xl font-extrabold text-white sm:text-2xl">
            Need More Information?
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-gray-300">
            Contact us if you have questions about these website terms.
          </p>

          <Link
            to="/contact"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-orange-500 px-6 py-3 font-bold text-white transition hover:bg-orange-600"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Terms;

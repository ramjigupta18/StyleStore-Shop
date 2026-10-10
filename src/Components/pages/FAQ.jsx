import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaPlus, FaMinus, FaQuestionCircle } from "react-icons/fa";
import SharedNavbar from "../SharedNavbar";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "How can I place an order?",
      answer:
        "Browse our products, add your favorite items to the cart, and follow the checkout or order summary steps available on the website.",
    },
    {
      question: "How can I add products to my wishlist?",
      answer:
        "Use the wishlist or heart icon on a product card to add it to your wishlist. You can revisit your favorite products later.",
    },
    {
      question: "How can I track my order?",
      answer:
        "Visit the Track Order page and follow the instructions provided there. Order tracking will require a connected order management system to show live updates.",
    },
    {
      question: "Can I cancel or return an order?",
      answer:
        "Return and cancellation eligibility depends on the store's applicable policy. Please visit the Shipping & Returns page or contact support for assistance.",
    },
    {
      question: "What payment methods are accepted?",
      answer:
        "Available payment methods depend on the payment options configured by the store. Online payment processing must be integrated to accept real payments.",
    },
    {
      question: "How do I contact customer support?",
      answer:
        "Open the Contact page and use the contact information or message form provided there.",
    },
    {
      question: "Is my personal information secure?",
      answer:
        "Please review the Privacy Policy for details about data handling. A production website should use appropriate security measures and clearly explain its privacy practices.",
    },
    {
      question: "Can I shop using my mobile phone?",
      answer:
        "Yes, this page uses a responsive layout designed to work across mobile phones, tablets, laptops, and desktop screens.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <main className="min-h-screen mt-20 bg-gray-50 px-4 py-12 sm:px-6 sm:py-16 lg:px-8">

        <SharedNavbar />

      <div className="mx-auto max-w-4xl">
        {/* Heading */}
        <div className="mb-10 text-center sm:mb-14">
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100 text-orange-500">
            <FaQuestionCircle size={30} />
          </div>

          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
            Help Center
          </p>

          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
            Frequently Asked <span className="text-orange-500">Questions</span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
            Find answers to common questions about shopping, orders, and your
            account.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className={`overflow-hidden rounded-2xl border bg-white transition ${
                  isOpen
                    ? "border-orange-200 shadow-md"
                    : "border-gray-200 shadow-sm"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left sm:p-6"
                >
                  <span className="text-sm font-bold leading-6 text-gray-900 sm:text-base">
                    {faq.question}
                  </span>

                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-50 text-orange-500">
                    {isOpen ? <FaMinus size={12} /> : <FaPlus size={12} />}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6">
                    <div className="border-t border-gray-100 pt-4">
                      <p className="text-sm leading-7 text-gray-600 sm:text-base">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Contact CTA */}
        <div className="mt-10 rounded-3xl bg-gray-900 px-5 py-8 text-center sm:mt-14 sm:px-10 sm:py-10">
          <h2 className="text-xl font-bold text-white sm:text-2xl">
            Still Have Questions?
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-gray-300">
            If you couldn't find the answer you're looking for, contact our
            support team.
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

export default FAQ;

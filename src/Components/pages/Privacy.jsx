import React from "react";
import { Link } from "react-router-dom";
import {
  FaShieldAlt,
  FaUserShield,
  FaDatabase,
  FaLock,
  FaCookieBite,
  FaEnvelope,
} from "react-icons/fa";
import SharedNavbar from "../SharedNavbar";

const Privacy = () => {
  const sections = [
    {
      icon: <FaDatabase />,
      title: "1. Information We Collect",
      text: "A production store may collect information such as contact details, delivery information, and order details when users provide them. Only collect information that is necessary for the stated purpose.",
    },
    {
      icon: <FaUserShield />,
      title: "2. How Information Is Used",
      text: "Information may be used to process orders, respond to customer questions, provide support, and improve the shopping experience, subject to the store's actual practices.",
    },
    {
      icon: <FaLock />,
      title: "3. Data Security",
      text: "Appropriate technical and organizational measures should be used to protect personal information. No website can guarantee absolute security.",
    },
    {
      icon: <FaCookieBite />,
      title: "4. Cookies and Local Storage",
      text: "This website may use browser storage to remember shopping-related preferences, such as cart items or wishlist products. You can manage browser data through your browser settings.",
    },
    {
      icon: <FaShieldAlt />,
      title: "5. Third-Party Services",
      text: "If the store integrates payment providers, analytics, or delivery services, those services may process information according to their own policies.",
    },
    {
      icon: <FaEnvelope />,
      title: "6. Contact and Privacy Requests",
      text: "For questions about personal information or privacy requests, contact the store through the Contact page.",
    },
  ];

  return (
    <main className="min-h-screen mt-20 bg-gray-50 px-4 py-12 sm:px-6 sm:py-16 lg:px-8">

        <SharedNavbar />

      <div className="mx-auto max-w-5xl">
        {/* Heading */}
        <header className="mb-10 text-center sm:mb-14">
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100 text-orange-500">
            <FaShieldAlt size={30} />
          </div>

          <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
            Your Privacy Matters
          </p>

          <h1 className="mt-3 text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
            Privacy <span className="text-orange-500">Policy</span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
            This page explains general privacy topics relevant to an online
            shopping website.
          </p>
        </header>

        {/* Intro Notice */}
        <div className="mb-8 rounded-2xl border border-orange-200 bg-orange-50 p-5 sm:p-6">
          <h2 className="font-bold text-gray-900">Please Read This Policy</h2>
          <p className="mt-2 text-sm leading-7 text-gray-600">
            This is a starter policy template for the StyleStore demo. Before
            publishing a live store, update it to accurately reflect the data
            you collect, how you use it, which services you use, and the rules
            that apply to your business.
          </p>
        </div>

        {/* Policy Sections */}
        <div className="space-y-5">
          {sections.map((section) => (
            <section
              key={section.title}
              className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:p-7"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-lg text-orange-500">
                  {section.icon}
                </div>

                <div className="min-w-0">
                  <h2 className="text-lg font-bold text-gray-900 sm:text-xl">
                    {section.title}
                  </h2>

                  <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base">
                    {section.text}
                  </p>
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-10 rounded-3xl bg-gray-900 px-6 py-9 text-center sm:px-10 sm:py-12">
          <h2 className="text-xl font-extrabold text-white sm:text-2xl">
            Questions About Your Privacy?
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-gray-300">
            Contact us if you have questions about this policy or the handling
            of your information.
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

export default Privacy;

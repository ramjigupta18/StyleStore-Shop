import React from "react";
import { Link } from "react-router-dom";
import {
  FaShoppingBag,
  FaHeart,
  FaTruck,
  FaShieldAlt,
  FaArrowRight,
} from "react-icons/fa";
import SharedNavbar from "../SharedNavbar";

const About = () => {
  const features = [
    {
      icon: <FaShoppingBag />,
      title: "Quality Products",
      description:
        "We focus on offering quality products for your everyday shopping needs.",
    },
    {
      icon: <FaTruck />,
      title: "Convenient Shopping",
      description:
        "Explore products and enjoy a simple, convenient online shopping experience.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Secure Experience",
      description:
        "We aim to make browsing and shopping straightforward and reliable.",
    },
    {
      icon: <FaHeart />,
      title: "Customer First",
      description:
        "Your shopping experience matters to us, from product discovery to checkout.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800">
        <SharedNavbar />
      {/* Hero Section */}
      <section className="bg-orange-50 px-4 py-16 mt-20 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
            About StyleStore
          </p>

          <h1 className="mx-auto max-w-3xl text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Shopping Made Simple,{" "}
            <span className="text-orange-500">Style Made Better</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
            Welcome to StyleStore. Discover a convenient way to explore
            products, find your favorites, and enjoy shopping from one place.
          </p>

          <Link
            to="/"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
          >
            Explore Products <FaArrowRight />
          </Link>
        </div>
      </section>

      {/* Our Story */}
      <section className="px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2 md:gap-14">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-orange-500">
              Our Story
            </p>

            <h2 className="text-2xl font-extrabold leading-snug text-gray-900 sm:text-3xl lg:text-4xl">
              A Better Way to Shop Online
            </h2>

            <p className="mt-5 text-sm leading-7 text-gray-600 sm:text-base">
              StyleStore is designed to make online shopping easy to navigate
              and enjoyable. Our goal is to help you discover products, explore
              categories, and keep your favorite items together.
            </p>

            <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
              Whether you're browsing for something new or revisiting a
              favorite, we want you to have a smooth experience across desktop,
              tablet, and mobile devices.
            </p>
          </div>

          <div className="flex min-h-64 items-center justify-center rounded-3xl bg-gradient-to-br from-orange-100 via-orange-50 to-amber-100 p-8 sm:min-h-80 sm:p-12">
            <div className="text-center">
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-white text-orange-500 shadow-lg sm:h-32 sm:w-32">
                <FaShoppingBag className="text-4xl sm:text-5xl" />
              </div>

              <h3 className="mt-6 text-2xl font-extrabold text-gray-900 sm:text-3xl">
                Style<span className="text-orange-500">Store</span>
              </h3>

              <p className="mt-2 text-sm text-gray-600">
                Discover. Choose. Enjoy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-gray-50 px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-orange-500">
              Why Choose Us
            </p>

            <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl lg:text-4xl">
              Shopping You Can Enjoy
            </h2>

            <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
              We aim to make every step of your shopping journey clear,
              convenient, and user-friendly.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md sm:p-7"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-xl text-orange-500">
                  {feature.icon}
                </div>

                <h3 className="text-lg font-bold text-gray-900">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 rounded-3xl bg-gray-900 px-6 py-10 text-center sm:px-10 md:flex-row md:text-left lg:px-14">
          <div>
            <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
              Ready to Explore?
            </h2>

            <p className="mt-3 text-sm leading-6 text-gray-300 sm:text-base">
              Find products you love and start exploring StyleStore.
            </p>
          </div>

          <Link
            to="/"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
          >
            Start Shopping <FaArrowRight />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;

import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaHouse } from "react-icons/fa6";

const NotFound = () => {
  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-gray-50 px-4 py-12">
      <div className="w-full max-w-2xl text-center">

        <p className="text-sm sm:text-base font-bold uppercase tracking-[0.3em] text-orange-500">
          Page Not Found
        </p>

        <h1 className="mt-4 text-7xl sm:text-8xl md:text-9xl font-extrabold text-gray-900">
          404
        </h1>

        <h2 className="mt-4 text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">
          Oops! This page doesn't exist.
        </h2>

        <p className="mx-auto mt-4 max-w-md text-sm sm:text-base leading-7 text-gray-500">
          The page you're looking for may have been moved, deleted, or the URL
          may be incorrect.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-orange-500 px-7 py-3 font-semibold text-white transition hover:bg-orange-600"
          >
            <FaHouse />
            Back to Home
          </Link>

          <button
            type="button"
            onClick={() => window.history.back()}
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-gray-300 px-7 py-3 font-semibold text-gray-700 transition hover:border-orange-500 hover:text-orange-500"
          >
            <FaArrowLeft />
            Go Back
          </button>
        </div>

      </div>
    </section>
  );
};

export default NotFound;

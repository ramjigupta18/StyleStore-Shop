import React from "react";

const OrderPlace = ({ setOrderPlaced }) => {
  return (
    <section className="flex justify-center items-center bg-black/95 fixed inset-0 z-40">
      <div className="bg-zinc-100 p-6 sm:p-8 text-center w-[calc(100%-2rem)] sm:w-[400px] rounded-lg border border-zinc-300">
        <h2 className="text-2xl sm:text-3xl text-green-600 font-bold">
          Order Placed!</h2>
        <p className="text-zinc-800 my-4">Thanks for your purchase!</p>
        <button className="px-6 py-3 bg-blue-600 active:bg-blue-700 text-white rounded-lg" onClick={() => setOrderPlaced(false)}>Close</button>
      </div>
    </section>
  );
};

export default OrderPlace;

import React, { useState } from "react";
import ProductList from './ProductList'
import { GoHeartFill } from "react-icons/go";

const Product = ({ searchTerm, addToCart, addToWishlist, wishlist }) => {

  const categories = ["All", "Mens", "Womens", "Kids", "New Arrivals", "On Sale",];
  const [activeTab, setActiveTab] = useState("All");

  const filteredItems = ProductList.filter(item => {
    const matchesCategory = 
    (activeTab === 'All') ||
    (activeTab === 'New Arrivals' && item.newArrival) ||
    (activeTab === 'On Sale' && item.onSale) ||
    (activeTab === item.category)

    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase())

    return matchesCategory && matchesSearch;
  })

  const renderProducts = filteredItems.map(product => {
    return(
        //Card
        <div key={product.id} className="bg-zinc-100 p-4 sm:p-5 border border-zinc-300 rounded-lg">

            <div className="flex justify-between items-center">
                <button className={`text-3xl cursor-pointer 
                ${wishlist.some(item => item.id === product.id) ? 'text-red-600' : 'text-zinc-300'}`} 
                onClick={() => addToWishlist(product)}>
                    <GoHeartFill />
                </button>

                <div>
                  {
                    (product.onSale || product.newArrival) && 
                    (
                      <span className={`px-3 py-1 text-white
                      ${product.onSale ? 'bg-red-600' : 'bg-green-600'}`}>
                        {product.onSale ? 'Sale' : 'New'}
                      </span>
                    )
                  }
                </div>

            </div>

            {/* Product Image */}
            <div className="w-full h-[240px] sm:h-[260px] lg:h-[30vh]">
              <img src={product.image} alt={product.name || "Product"}/>
            </div>

            {/* Product Detail */}
              <div className="text-center mt-3">
                  <h3 className="text-lg sm:text-xl lg:text-[1.4rem] font-semibold">{product.name}
                  </h3>
                  <div className="mt-1 mb-4 sm:mb-5">
                    {
                      product.onSale && 
                      (
                      <span 
                      className="text-zinc-600 font-semibold text-base sm:text-lg line-through mr-3 sm:mr-8"
                      >${product.oldPrice.toFixed(2)}</span>
                      )
                    }
                    <span 
                    className="text-red-600 font-semibold text-base sm:text-lg"
                    >${product.price.toFixed(2)}</span>
                  </div>
                  <button 
                  className="bg-blue-600 text-white text-base sm:text-lg py-3 w-full rounded-lg cursor-pointer active:bg-blue-700"
                   onClick={() => addToCart(product)}>Add to Cart</button>
                </div>
        </div>
    )
  })


  return (
    <section id="product-section" className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-12 py-6 sm:py-10">
      {/* Tabs */}
      <div className="flex gap-2 sm:gap-3 justify-start sm:justify-center items-center mt-8 overflow-x-auto pb-2">
        {categories.map((category) => {
          return (
            <button
              key={category}
              className={
                `px-4 sm:px-6 lg:px-8 py-2 rounded-full text-sm sm:text-lg cursor-pointer whitespace-nowrap
                 ${activeTab === category ? "bg-blue-600 text-white" : "bg-zinc-100 text-zinc-800"}`}
              onClick={() => setActiveTab(category)}>
              {category}
            </button>
          );
        })}
      </div>

      {/* Product Listing */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6 lg:gap-9 mt-8 sm:mt-12">
        {
          filteredItems.length === 0 ?
          <p className="text-center col-span-4 text-zinc-800 text-lg">No product found</p> :
          renderProducts
        }
      </div>


    </section>
  );
};

export default Product;

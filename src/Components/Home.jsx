import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Banner from './Banner'
import Product from './Product'
import Cart from './Cart'
import Wishlist from './Wishlist'
import OrderSummary from './OrderSummary'
import OrderPlace from './OrderPlace'

const Home = () => {

  const [searchTerm, setSearchTerm] = useState('')
  const [isScrolled, setIsScrolled ] =useState(false)
  const [activePanel, setActivePanel] = useState(null)

  const [cart, setCart] = useState(() => {
    const storeCart = localStorage.getItem('cart')
    return storeCart ? JSON.parse(storeCart) : []

  })

  const [orderSummary, setOrderSummary] = useState(false)
  const [orderPlaced, setOrderPlaced] = useState(false)
  

  const [wishlist, setWishlist] = useState(() => {
    const storeWishlist = localStorage.getItem('wishlist')
    return storeWishlist ? JSON.parse(storeWishlist) : []

  })

  //Total Calculations
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0)
  const shippingFee = totalItems * 2;
  const orderTotal = subtotal + shippingFee;


  useEffect(() => {
    const changeNavbar = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', changeNavbar)
  }, [])

  // Input Scroll Section
  const handleScroll = () => {
    const section = document.getElementById('product-section')
    if(section){
      section.scrollIntoView({behavior: 'smooth'})
    }
  }

  // Cart And Wishlis ShowPanel Function
  const handlePanel = (tabName) => {
    setActivePanel(prev => (
      prev === tabName ? null : tabName
    ))
  }

    // ClosePanel Function
    const handleClose = () => setActivePanel(null)

    // Add To Cart Function
    const addToCart = (product) => {
      const alreadyAdded = cart.find(item => item.id === product.id);
      if(alreadyAdded){
        alert('Item is already in the cart')
        return;
      }
      setCart([...cart, {...product, quantity: 1}])
    }

    //Remove Item
    const removeItem = (product) => {
      setCart(cart.filter(item => item.id !== product.id))
    }

    //QuantityIncrement
    const quantityIncrement = (product) => {
      setCart(cart.map(item => 
        item.id === product.id ?
        {...item, quantity: item.quantity + 1} : item
      ))
    }
    //QuantityDecrement
    const quantityDecrement = (product) => {
      setCart(cart.map(item => 
        item.id === product.id && item.quantity > 1 ?
        {...item, quantity: item.quantity - 1} : item
      ))
    }

    //Wishlist Function
    const addToWishlist = (product) => {
      const isInWishlist = wishlist.some(item => item.id === product.id)

      if(isInWishlist){
        setWishlist(wishlist.filter(item => item.id !== product.id))
      }
      else{
        const addedDate = new Date().toLocaleDateString('en-GB')
        setWishlist([...wishlist, {...product, addedDate}])
      }
    }

    //Clear Wishlist
    const clearWishlist = () => {
      setWishlist([]);
    }

    //Save Items to LocalStorage
    useEffect(() => {
      localStorage.setItem('cart', JSON.stringify(cart))
      localStorage.setItem('wishlist', JSON.stringify(wishlist))

    }, [cart, wishlist])

  return (
    <div>
      <Navbar handleScroll={handleScroll} setSearchTerm={setSearchTerm} isScrolled={isScrolled} 
      handlePanel={handlePanel} totalItems={totalItems} wishlist={wishlist}/>

      <Banner />

      <Product searchTerm={searchTerm} addToCart={addToCart} addToWishlist={addToWishlist} wishlist={wishlist}/>

      <Cart activePanel={activePanel}  handleClose={handleClose} cart={cart} removeItem={removeItem} quantityIncrement={quantityIncrement} quantityDecrement={quantityDecrement} subtotal={subtotal} shippingFee={shippingFee} orderTotal={orderTotal} setOrderSummary={setOrderSummary}/>


      <Wishlist activePanel={activePanel}  handleClose={handleClose} wishlist={wishlist} addToCart={addToCart} clearWishlist={clearWishlist}/>

      {
        orderSummary && 
        <OrderSummary cart={cart} subtotal={subtotal} shippingFee={shippingFee} orderTotal={orderTotal} setOrderPlaced={setOrderPlaced} setOrderSummary={setOrderSummary} setCart={setCart}/>
      }

      {
        orderPlaced && 
        <OrderPlace setOrderPlaced={setOrderPlaced}/>
      }


    </div>
  )
}

export default Home

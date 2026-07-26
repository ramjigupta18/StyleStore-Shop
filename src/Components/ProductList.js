import Jeans from './img/jeans.png'
import Hoodie from './img/hoodie.png'
import LeatherJacket from './img/leather-jacket.png'
import Skirt from './img/skirt.png'
import TShirt from './img/tshirt.png'
import Sleepsuit from './img/sleepsuit.png'
import Shirt from './img/shirt.png'
import Dress from './img/dress.png'
import Skater from './img/skater.png'
import Sweater from './img/sweater.png'
import BabyShirt from './img/baby-shirt.png'
import ShirtDress from './img/shirt-dress.png'

const products = [
  {
    id: 1,
    name: "Sports TShirt",
    image: TShirt,
    price: 25.99,
    oldPrice: 35.99,
    onSale: true,
    newArrival: false,
    category: "Mens",
  },
  {
    id: 2,
    name: "Slim Fit Jeans",
    image: Jeans,
    price: 45.00,
    oldPrice: null,
    onSale: false,
    newArrival: true,
    category: "Mens",
  },
  {
    id: 3,
    name: "Leather Jacket",
    image: LeatherJacket,
    price: 89.99,
    oldPrice: 129.99,
    onSale: false,
    newArrival: false,
    category: "Mens",
  },
  {
    id: 4,
    name: "Skater Dress",
    image: Skater,
    price: 39.99,
    oldPrice: 59.99,
    onSale: true,
    newArrival: false,
    category: "Womens",
  },

  {
    id: 5,
    name: "Baby Sleepsuit",
    image: Sleepsuit,
    price: 29.99,
    oldPrice: null,
    onSale: false,
    newArrival: false,
    category: "Kids",
  },
  {
    id: 6,
    name: "Long Sleeve shirt",
    image: Shirt,
    price: 49.99,
    oldPrice: null,
    onSale: false,
    newArrival: false,
    category: "Mens",
  },
  {
    id: 7,
    name: "Floral Dress",
    image: Dress,
    price: 120.00,
    oldPrice: null,
    onSale: false,
    newArrival: true,
    category: "Kids",
  },
  {
    id: 8,
    name: "Stripes Sweater",
    image: Sweater,
    price: 65.00,
    oldPrice: 85.00,
    onSale: true,
    newArrival: false,
    category: "Kids",
  },

  {
    id: 9,
    name: "Pink Skirt",
    image: Skirt,
    price: 15.99,
    oldPrice: 20.99,
    onSale: false,
    newArrival: true,
    category: "Womens",
  },
  {
    id: 10,
    name: "Baby Shirt",
    image: BabyShirt,
    price: 22.00,
    oldPrice: null,
    onSale: false,
    newArrival: true,
    category: "Kids",
  },
  {
    id: 11,
    name: "Hoodie",
    image: Hoodie,
    price: 35.00,
    oldPrice: 45.00,
    onSale: true,
    newArrival: false,
    category: "Mens",
  },
  {
    id: 12,
    name: "Full Sleeve Shirt",
    image: ShirtDress,
    price: 10.00,
    oldPrice: 18.00,
    onSale: true,
    newArrival: false,
    category: "Womens",
  },
];

export default products;
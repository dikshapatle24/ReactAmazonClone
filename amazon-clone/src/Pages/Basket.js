import React from 'react';
import Header from '../Componants/Header';
import '../App.css';
import { useSelector } from 'react-redux';
import Cartitem from '../Componants/Cartitem';


function Basket(useState) {
    // const cartItem =[1,2,3]
   
   const cartItem = useSelector((state) => state.basket.items)
   const total = cartItem.reduce((total,item) => total + item.price, 0)
  return (
    <div>
        <Header/>

        <div className='cartPage'>
        <div className='cartData'>
            <div className='cartMessages'>
                {
                cartItem.length > 0 ?
                <h1>Number of items in Basket: {cartItem.length}</h1>:
                <h1>The Basket is empty</h1>
                }
            </div>
            <div className='cart'>
                {
                    cartItem.map((item)=>(
                        <Cartitem
                        key={item.id}
                        id={item.id}
                        image={item.image}
                        title={item.title}
                        description={item.description}
                        price={item.price}
                        rating={item.rating}
                        />
                    ))
                }
                
    </div>
    </div>
    <div className='total'>
            <h1>Total</h1>
            <h2>$ {total}</h2>
            <button>Checkout</button>
        </div>
    </div>
   
    </div>
  )
}

export default Basket
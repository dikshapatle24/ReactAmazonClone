import React from 'react'
import Rating from '@mui/material/Rating';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../Store/Slices/basketSlice';
function Cartitem(props) {

  const {id,image,title,description,price,rating}=props

  const dispatch =useDispatch();

  const handleRemoveItem =() =>{

    const oneProduct =  {id,image,title,description,price,rating}

    dispatch(removeFromCart(oneProduct))
  }

  return (
    <div>
         <div className='cartItem'>
                    {/* image */}
                    <img
                    src={image}
                    alt=''
                    />
                    <div className='CartItemData'>
                        {/* title */}
                        <h1>{title}</h1>

                        {/* price */}
                        <h2>$ {price}</h2>

                        {/* description */}
                        <p>{description}</p>

                        {/* rating */}
                        <h3><Rating name="read-only" value={rating} readOnly /></h3>
                    </div>
                    {/* remove buttion */}
                    <button onClick={handleRemoveItem}>Remove</button>
                </div>
    </div>

  )
}

export default Cartitem
import React from 'react'
import "./cart.css"
function Cart({item,removeFun}) {
    
  return (
    <>
       <div className="cart">
            <div className='picDiv'>
                <img src={item.image} alt="" className='PicImg'/>
            </div>
            <div className='detailDiv'>
                <h3 id='cartTitle'>{item.title}</h3>
                <p className="pricing">
                    <span className="rateCart">{item.rating.rate} ✮</span>
                     <span className="cntCart">{item.rating.count}</span>
                </p>
                <h2 id='cartPrice'>$ {item.price}</h2>
            </div>
            <p></p>
            <button className='remove' onClick={()=>{removeFun(item.id)}}>X Remove</button>
       </div>
    </>
  )
}

export default Cart
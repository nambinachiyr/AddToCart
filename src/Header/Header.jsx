import React, { useState } from 'react'
import './header.css'
import Cart from '../cart/Cart'
import cartImg from "/src/asset/shopping-cart (1).png"
function Header({cartCount,setshow}) {
  
  
  // console.log(setshow)
  return (
    <div className='headerDiv'>
        <h3 className='title'>Zig Zag</h3>
        <input type="text" name="text" id="searchInput" placeholder='🔍︎search...'/>
        <div className="cartSection">
            <img className='cart_counter' onClick={()=>setshow(true)} src={cartImg} alt="" width={35}/>
            <span className='count_cart'>{cartCount.length}</span>
        </div>
    </div>
  )
}

export default Header
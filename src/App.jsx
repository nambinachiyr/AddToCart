import React, { useEffect, useState } from 'react'
import Card from './card/Card.jsx'
import Header from './Header/Header.jsx'
import Cart from './cart/Cart.jsx';
import './app.css'


// URL- https://fakestoreapi.com/products
function App() {
  let [reaction,setReaction] = useState([]);
  let [cartItem,setCartItem] = useState([])
  useEffect(()=>{
    fetch("https://fakestoreapi.com/products")
    .then(res=>res.json())
    .then(data=>setReaction(data))
  },[]) 
  
  function removeToCart(item){
    // Using splice method
    //  let updateC = [...cartItem]
    // for(let i in updateC){     
    //    if(item===updateC[i].id){
    //     console.log(updateC[i].id,",",item)
    //     updateC.splice(i,1)
    //     setCartItem(updateC);
    //     console.log(updateC," - ","removed"," - ",item)
    //     break
    //    }     
    //   }

    // Using filter method
    let updatedArr = cartItem.filter(cart=>{
      if(cart.id != item){
          return cart
      }
    })
    setCartItem(updatedArr)
    // console.log(cartItem)
   }

  function addToCart(item){
        setCartItem(pre=>[...pre,item])
       for (let i in cartItem) {
          if(item.id === cartItem[i].id){
            // console.log(cartItem[i].id, "same");
            alert("This item is already in")
            cartItem.pop()
          // continue;
          } 
       }  
  }
  useEffect(()=>{
     console.log(cartItem,"cartItem")
  },[cartItem])

   
   
  // useEffect(()=>{
  //   console.log(reaction,"reaction")
  // },[reaction])
   let [show,setShow] = useState(false);
    console.log(cartItem.length)
  return (
   <>
      <Header cartCount = {cartItem} setshow = {setShow}/>
      {/* Total div container */}
      {
      show?(
        <>
          <div className="cartListContainer">
            {
              cartItem.map(Item =><Cart key = {Item.id} item = {Item} removeFun = {removeToCart} />)
            }
          </div>          
          <button onClick = {()=>setShow(false)} className='back'>Back</button>
        </>
      ):
      (
           <div className='container'>
              {         
                reaction.map((item)=>(
                <Card key={item.id} item={item} onclick ={addToCart}/>
                ))
              }
            </div>
        )
      }
     
   </>
  )
}

export default App

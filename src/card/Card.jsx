
import "./cardStyle.css";

function Card({item,onclick}) {
    // console.log(item)
    
  return (
    <>
      <div className="card" >
            <div className="imageItem">
                <img src={item.image} alt="" height={220}/>
            </div>
            <p className="item_title">{item.title}</p>
            <p className="fd">Free Delivery</p>

            <div className="above-ss">
                <p className="price">$ {item.price}</p>
                <p className="pricing">
                    <span className="rate">{item.rating.rate} ✮</span>
                     <span className="cnt">{item.rating.count}</span>
                </p>
            </div>
            <img onClick={()=>onclick(item)} className="cartImg" src="\src\asset\shopping-cart (1).png" alt="" width={30}/>
       </div>
    </>
   
  )
}

export default Card
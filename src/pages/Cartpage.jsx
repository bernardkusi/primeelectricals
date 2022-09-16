import React, { useEffect } from 'react'
import { useState } from 'react'
import Cartitem from '../components/Cartitem'

const Cartpage = ({cart,removefromcart}) => {
    const [total,settotal]=useState(0)
    let cost=0
    cart.forEach(element => {
        cost+=element.itemprice     
    });

    useEffect(() => {
        settotal(cost)
    }, [cost])
    
  return (
    <div className='page full'>
        <h3 className="heading">Items in cart</h3>
        <div className="cartsection">
            {cart && cart.map(item=>{return <Cartitem item={item} removefromcart={removefromcart}/>})}
            <div className="cartitem">
                <div className="details">
                    <p className="itemprice">Items in cart : {cart.length}</p>
                    <p className="itemprice">Delivery Cost : $0</p>
                    <p className="itemprice">Total : <span className="itemname"> ${total}</span></p>
                </div>
                <div>
                    <button className="click">Order Now</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cartpage
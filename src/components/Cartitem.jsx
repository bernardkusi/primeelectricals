import React from 'react'
import { items } from '../products'
import Rating from './Rating'

const Cartitem = ({item,removefromcart}) => {
  return (
    <div className="cartitem">
                <div className="image">
                    <img src={require(`../images/${item.itemimage}`)} alt={item.itemname} />
                </div>
                <div className="details">
                    <p className="itemname">{item.itemname}</p>
                    <p className="itemdetails">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus ratione reprehenderit neque corrupti?
                    </p>
                    <Rating rating={item.itemrating } />
                    <p className="itemprice">${item.itemprice}</p>
                </div>
                <div>
                    <button className="click" onClick={()=>{removefromcart(item)}}>Remove </button>
                </div>
            </div>
  )
}

export default Cartitem
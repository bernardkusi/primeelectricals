import React from 'react'

const Rating = ({rating}) => {
    if(rating===5){
        return (
            <span>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
            </span>
          )
    }else if(rating===4){
        return (
            <span>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
            </span>
          )
    }else if(rating===3){
        return (
            <span>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
            </span>
          )
    }else if(rating===2){
        return (
            <span>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
            </span>
          )
    }else{
        return (
            <span>
                <i class="fa-solid fa-star"></i>
            </span>
          )
    }
  
}

export default Rating
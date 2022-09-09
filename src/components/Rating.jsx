import React from 'react'

const Rating = ({rating}) => {
    if(rating===5){
        return (
            <span>#####</span>
          )
    }else if(rating===4){
        return (
            <span>####</span>
          )
    }else if(rating===3){
        return (
            <span>###</span>
          )
    }else if(rating===2){
        return (
            <span>##</span>
          )
    }else{
        return (
            <span>#</span>
          )
    }
  
}

export default Rating
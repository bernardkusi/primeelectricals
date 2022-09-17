import React, { useEffect } from 'react'

const Servicepage = ({closenav}) => {
    useEffect(() => {
        closenav()
       }, [])
  return (
    <div className='page full'>
        <h3 className="heading">Our Services</h3>
    </div>
  )
}

export default Servicepage
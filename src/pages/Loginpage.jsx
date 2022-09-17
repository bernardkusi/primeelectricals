import React, { useEffect } from 'react'
import  {Link} from 'react-router-dom'

const Loginpage = ({closenav}) => {
    useEffect(() => {
        closenav()
       }, [])
  return (
    <div className='page full'>
        <div className="form">
                <form action="">
                <p className="label">Login To My Account</p>
                <div>
                <div className="control" data-aos="fade-left" data-aos-duration="500">
                    <input type="text" name="email" id="email" />
                    <label htmlFor="email">Your email</label>
                  </div>

                  <div className="control" data-aos="fade-right" data-aos-duration="500">
                    <input type="text" name="password" id="password" />
                    <label htmlFor="password">Your password</label>
                  </div>
                </div>

                <button className="click">Login</button>
                <p className="redirect"><Link to="/signup">Click here</Link> to create an account if you dont have one.</p>

              </form>
        </div>
    </div>
  )
}

export default Loginpage
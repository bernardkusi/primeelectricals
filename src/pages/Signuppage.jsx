import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Signuppage = ({closenav}) => {

    useEffect(() => {
        closenav()
       }, [])

  return (
    <div className='page full'>
         <div className="form" style={{marginTop:"3rem"}}>
                <form action="">
                <p className="label">Signup For An Account</p>
                <div>
                  <div className="control" data-aos="fade-right" data-aos-duration="500">
                    <input type="text" name="firstname" id="firstname" />
                    <label htmlFor="firstname">Your firstname</label>
                  </div>
                  
                  <div className="control" data-aos="fade-right" data-aos-duration="500">
                    <input type="text" name="surname" id="surname" />
                    <label htmlFor="surname">Your surname</label>
                  </div>


                  <div className="control" data-aos="fade-left" data-aos-duration="500">
                    <input type="text" name="email" id="email" />
                    <label htmlFor="email">Your email</label>
                  </div>

                  <div className="control" data-aos="fade-right" data-aos-duration="500">
                    <input type="text" name="password" id="password" />
                    <label htmlFor="password">Your password</label>
                  </div>

                  <div className="control" data-aos="fade-right" data-aos-duration="500">
                    <input type="text" name="password_confirmation" id="password_confirmation" />
                    <label htmlFor="password_confirmation">Password_confirmation</label>
                  </div>
                  
                </div>

                <button className="click">Signup</button>
                <p className="redirect"><Link to="/login">Click here</Link> to log in to your account if you already have one.</p>
              </form>
        </div>
    </div>
  )
}

export default Signuppage
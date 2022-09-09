import React from 'react'

const Contact = () => {
  return (
    <div id="contact">
        <div className="page" >
            <p className="heading">Get in Touch With us</p>
            <div className="contact" style={{backgroundImage:" linear-gradient(rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.4)), url(./contact.jpg)"}}>
                
                <div className="form">
                <form action="">
                <p className="label">Send Us A Message</p>
                <div>
                  <div className="control" data-aos="fade-right" data-aos-duration="500">
                    <input type="text" name="name" id="name" />
                    <label htmlFor="name">Your name</label>
                  </div>

                  <div className="control" data-aos="fade-left" data-aos-duration="500">
                    <input type="text" name="email" id="email" />
                    <label htmlFor="email">Your email</label>
                  </div>
                </div>

                <div className="control" data-aos="fade-up" data-aos-duration="500">
                  <textarea name="message" id="message"></textarea>
                  <label htmlFor="message">Your message</label>
                </div>

                <button className="click">Send Message</button>
              </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact
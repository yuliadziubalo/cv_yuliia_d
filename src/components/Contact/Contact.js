import React from 'react'
import "./Contact.css"

function Contact() {
  return (
    <div className='contact-container'>
        <div className="content contact-me">
        <form className="contact-form" action="https://formsubmit.co/a491ab02af603e9a9767dde81fb152be"  method="POST">
            <h2 className="header2">Contact me</h2>
            <input className="input-line" type="text" name="name" placeholder='Name' required />
            <input className="input-line" type="email" name="email" placeholder='E-Mail' required />
            <textarea name="text-contact" className="input-line message" placeholder='Message'></textarea>
            <button className="contact-btn" type="submit">Send</button>
            <input type="hidden" name="_captcha" value="false"></input>
            <input type="hidden" name="_next" value="https://yuliadziubalo.github.io/cv_yuliia_d/"></input>
        </form>
        </div>
    </div>
  )
}

export default Contact

//value="https://yourdomain.co/thanks.html"
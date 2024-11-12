import React from 'react'
import './Header.css'
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import imageContent from "../../me2.jpg"


function Header() {
  return (
    <div className='content head'>

        <img className="aaa" src={imageContent} alt="yuliia dziubalo" />
        <div className="head_info">
            <h1 className='name'>Yuliia Dziubalo</h1>
            <ul className='ul_contacts'>
                <li className="contact_head">Phone</li>
                <li className='contact'>+(380)960564786</li>
                <li className="contact_head">E-mail</li>
                <li className='contact'>yulia.dzubalo@gmail.com</li>
                <li className="contact_head">Location</li>
                <li className='contact'>Haynauer Str. 55, 12249 <br/> Berlin, Germany</li>
                <li className="contact">
                  <a  href="https://www.linkedin.com/in/yuliia-dziubalo-14851b226/"><FaLinkedin className='social'/></a>
                  <a  href="https://github.com/yuliadziubalo"><FaGithubSquare className='social' /></a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Header
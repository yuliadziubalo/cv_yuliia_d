import React from 'react'

import './Work.css'

function Work() {
  return (
    <div className='content cover'>
      <div className='work-container'>
          <h2 className='header2'>Work</h2>
          <div className="studium">
            <div className='degree'>Tutor | July 2019 - June 2023 </div>
            <div className="place">Self-employed, Ukraine</div>
            <div className="info">Help with math, English and Ukrainian languages</div>
          </div>

          <div className="studium">
            <div className='degree'>Childcare worker | September 2020 - December 2022 </div>
            <div className="place">Self-employed, Ukraine</div>
            <div className="info">Development of creative thinking in children, making handmade products with children, teaching computer science</div>
          </div> 
      </div>
    
      <div className="hobby">
          <h2 className='header2 header-hobbies'>Hobbies</h2>
          <div className='hobbies'>
            <div className="hob">- playing piano and guitar</div>
            <div className="hob">- learning languages</div>
            <div className="hob">- learning new programming languages</div>
            <div className="hob">- handmade, oil paintings</div>
          </div>
          
      </div>
    </div>
  )
}

export default Work
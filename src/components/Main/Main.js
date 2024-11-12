import React from 'react'
import './Main.css'


function Main() {
  return (
<>
<div className='main_content-container'>
    <div className="content main_content">
        <div className="skills">
            <h2 className='header2'>Skills</h2>
            <ul className="skills_ul">
                <li className="skill">HTML</li>
                <li className="skill">CSS</li>
                <li className="skill">JavaScript</li>
                <li className="skill">React.js</li>
                <li className="skill">C++</li>
                <li className="skill">C#</li>
                <li className="skill">Illustration</li>
            </ul>
            <h2 className='header2'>Languages</h2>
            <ul className="languages_ul">
                <li className="lang">Ukrainian - Native</li>
                <li className="lang">German - B1</li>
                <li className="lang">English - B1</li>
            </ul>

        </div>

        <div className="study">
            <h2 className='header2'>Study</h2>
            <div className="studium">
                <div className='degree'>Bachelor | SEP 2019 - JUNE 2023</div>
                <div className="place">Ukrainian National Forestry University - <span className='bolder'>Computer Sciences, </span>
                 Lviv, Ukraine</div>
                <div className="info">Learning programming languages, creating various applications, web programming and design</div>
            </div>

            <div className="studium">
                <div className='degree'>Course Frontend | MARCH - JUNE 2022</div>
                <div className="place">EPAM Ukraine - <span className='bolder'>Web development, </span>Ukraine</div>
                <div className="info">Analytical thinking and ingenuity in solving non-standard tasks;
                Basic understanding of JavaScript, HTML/HTML5, CSS/CSS3.</div>
            </div>

            <div className="studium">
                <div className='degree'>Online Marathon ReactJS | NOV - DECEMBER 2022</div>
                <div className="place">SoftServe IT Academy - <span className='bolder'>Web development, </span>
                 Ukraine</div>
                <div className="info">Learning the basics of JavaScript, developing websites with React</div>
            </div>
            
        </div>
    </div>
</div>  
    </>
  )
}

export default Main
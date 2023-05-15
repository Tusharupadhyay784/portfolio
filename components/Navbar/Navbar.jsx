import React from 'react'
import Fade from 'react-reveal/Fade'

const Navbar = () => {
    return (
        <div className='container' >
            <Fade top>
                <div className="navbar_container">
                    <ul>
                        <a href="#"><li className="hover-underline-animation">Home</li></a>
                        <a href="#"><li className='hover-underline-animation'>About</li></a>
                        <a href="#"><li className='hover-underline-animation'>Skills</li></a>
                        <a href="#"><li className='hover-underline-animation'>Projects</li></a>
                        <a href="#"><li className='hover-underline-animation'>Contact Us</li></a>
                        <button className='btn'>Resume</button>
                    </ul>
                </div>
            </Fade>
        </div>
    )
}

export default Navbar
import Image from 'next/image'
import React, { lazy } from 'react'
import { FiMail } from 'react-icons/fi'
import { AiFillGithub } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'
import { AiOutlineTwitter } from 'react-icons/ai'
import LightSpeed from 'react-reveal/LightSpeed';
import Typewriter from 'typewriter-effect'
import Fade from 'react-reveal/Fade'
import Me from '../../public/5.jpg'
import { BsFillMoonFill } from 'react-icons/bs'
import Link from 'next/link'

const Hero = () => {
    return (
        <div className='Hero'>
            <div className="hero_content">
                <Fade top>
                    <div className="hero_content_1">
                        <div>
                            <h2 id='Intro'><span></span>Hello</h2>
                            <h1>I'm Tushar Kumar <span className='wave'>👋</span> </h1>
                            <h3><Typewriter id="Typingh3" options={{
                                strings: ["I am React Developer", "I am FrontEnd Enthusiast", "I am UI Designer", "I am Dedicated Programmer", 'I am Team Person'],
                                autoStart: true,
                                loop: true,

                            }} />
                            </h3>
                            {/* <h3 aria-label='I am React Js Developer'>I am <span className='typewriter'></span></h3> */}
                        </div>
                        <p>A passionate Full Stack Software Developer 🚀 having a special interest in Frontend technologies and experience of building Web applications with JavaScript / Reactjs / Nodejs and some other cool libraries and frameworks.</p>
                        <div className='buttons'>
                            <Link href="mailto:tusharchamp777@gmail.com" target='_xmen'>
                                <FiMail className='hoverMe' />
                            </Link>
                            <Link href="https://github.com/Tusharupadhyay784" target='_xmen'>
                                <AiFillGithub className='hoverMe' />
                            </Link>
                            <Link href="https://www.linkedin.com/in/codertushar/" target='_xmen'>
                                <AiFillLinkedin className='hoverMe' />
                            </Link>
                            <Link href="https://twitter.com/tusharXstar" target='_xmen'>
                                <AiOutlineTwitter className='hoverMe' />
                            </Link>
                        </div>
                    </div>
                </Fade>
                <LightSpeed left>
                    <div className="hero_content_2">
                        <Image className='image_hero' src={Me} />
                    </div>
                </LightSpeed>
            </div>
            {/* Below is the Dark Mode Options */}
            {/* <div className="DarkMode">
                <BsFillMoonFill />
            </div> */}
        </div>
    )
}

export default Hero
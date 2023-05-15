import React from 'react'
import AboutIMG from '../../public/about3.svg'
import Image from 'next/image'
import Fade from 'react-reveal/Fade'
const About = () => {
    return (

        <div className='About'>
            <div className='about_one'>
                <Fade left delay={10}>
                    <Image className='aboutIMG' src={AboutIMG} />
                </Fade>
            </div>
            <div className="about-section">
                <h2 id='Intro'><span></span>About Me👦</h2>
                <p>I'm a Frontend Developer based in India who is passionate about delivering value to businesses through technology. I love the challenge of finding creative solutions to problems, and I enjoy collaborating with teams to achieve great results.
                    <br />
                    <br />
                    I am dedicated to keeping up-to-date with the latest technologies and trends to provide the best solutions for my clients.
                    <br />
                    <br />
                    I pay great attention to detail in the design and development of my projects. My ultimate goal is to create software that is both user-friendly and impactful in achieving the client's objectives.</p>
            </div>
        </div>

    )
}

export default About













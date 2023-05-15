import React from 'react'
const Box = ({ data }) => {
    return (
        <div className='second_box'>
            <p><span>✔</span>{data}</p>
        </div>
    )
}
const WhatIDo = () => {
    return (
        <div className='w-container'>
            <div className='w-first'>
                <h1><span></span>What I Do?👨‍💻</h1>
            </div>
            <div className='w-second'>
                <div>
                    <Box data={"Prepare variety of different designs, layouts and websites"} />
                    <Box data={"Actively listen to customers' requests, confirming full understanding before addressing concerns"} />
                    <Box data={"Use Seo Optimization and other software tools to create to grow their business"} />
                    <Box data={"Identify issues, analyzed information and provided solutions to problems"} />
                    <Box data={"Convert graphic designs to usable web images using React JS"} />
                    <Box data={"Plann website development, converting mockups into usable web presence with HTML, JavaScript, AJAX and JSON coding"} />
                    <Box data={"Provide front-end website development using WordPress, Hubspot and other editing software"} />
                    <Box data={"Establish presentation consistency across Chrome, Safari, Firefox and other common browser interfaces"} />
                    <Box data={"Convert graphic designs to usable web images using Adobe Photo Shop"} />
                    <Box data={"Multi-task across multiple functions and roles to generate project results and meet deadlines and organizational expectations"} />
                    <Box data={"Code websites using HTML, CSS, JavaScript and jQuery languages"} />
                    <Box data={"Implement Google-based SEO and ad campaigns to meet budget specifications"} />
                    <Box data={"Employ search engine optimization tactics to increase reach of targeted audience"} />
                    <Box data={"Develop technical solutions required to accommodate specific user-facing assets such as [Product or Service]"} />
                    <Box data={"Conduct Unit testing over course of web development lifecycle"} />
                </div>
            </div>
        </div>
    )
}

export default WhatIDo
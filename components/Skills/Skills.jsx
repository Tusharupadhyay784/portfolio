import { CircularProgressBar } from '@tomickigrzegorz/react-circular-progress-bar'
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import seal2 from '@/public/2R.png'
import arrow from '@/public/pppointed.svg'
import React from 'react'
import Image from 'next/image'

const Skills = () => {
    return (
        <div className='skills_container'>
            <h1><span></span>Skills 🔥</h1>
            <div className='skill'>
                <div>
                    <CircularProgressBar
                        colorCircle="#f1f1f1"
                        colorSlice="#00AB66"
                        fontSize="1em"
                        percent={88}
                        number={false}
                        round={true}
                        textPosition="1.5em"
                        stroke={4}
                    >
                        <img
                            alt="Random image"
                            src="https://hamna.dev/static/media/html.8c11e1a8364b520a311ac9bf8b5d2fbf.svg"
                            style={{
                                position: 'absolute',
                                left: '50%',
                                padding: '2px',
                                top: '80%',
                                transform: 'translate(-50%, -90%)',
                                width: '135px'
                            }}
                        />
                    </CircularProgressBar>

                </div>
                <Image className='imgarrow' src={arrow} alt="" height={450} width={450} />
                {/* <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns: xlink="http://www.w3.org/1999/xlink" xmlns: svgjs="http://svgjs.dev/svgjs" viewBox="0 0 1422 800"><g stroke-width="10" stroke="#00ab66" fill="none" stroke-linecap="round" stroke-linejoin="round" transform="matrix(0.7547095802227719,-0.6560590289905074,0.6560590289905074,0.7547095802227719,-92.0221231345937,565.574137523142)"><path d="M474 163Q794 266 948 637 " marker-end="url(#SvgjsMarker1428)"></path></g><defs><marker markerWidth="5" markerHeight="5" refX="2.5" refY="2.5" viewBox="0 0 5 5" orient="auto" id="SvgjsMarker1428"><polygon points="0,5 1.6666666666666667,2.5 0,0 5,2.5" fill="#00ab66"></polygon></marker></defs></svg> */}
            </div>
        </div>
    )
}

export default Skills


















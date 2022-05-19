import { useEffect, useState, useLayoutEffect } from 'react'
import { Container } from 'react-bootstrap'
import './Hero.scss'

import frame from './freeze.png'
import video from './sourcecode.mp4'


const Hero = () => {
    
    const SKILLS = ["Adaptable", "Smart", "Social", "Creative", "Curious", "Adaptable | Smart | Social | Creative | Curious"]

    const [skills] = useState(SKILLS)
    const [counter, setCounter] = useState(0)

    const startTimer = (arr) => {
        const interval = setInterval(() => {
            setCounter(prev => (prev + 1) % arr.length)
        }, 1500)
        return () => clearInterval(interval)
    }

    useEffect(() => {
        startTimer(skills)
    }, [])

    return (
        <div className="hero">
            <div className='video-wrapper'>
                <video playsInline autoPlay muted loop poster={frame}>
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <Container >
                    <h1>G-DEV</h1>
                    <h3>{skills[counter]}</h3>
                </Container>
            </div>
        </div>
    )
}

export default Hero
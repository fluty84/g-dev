import { useEffect, useState, useLayoutEffect } from 'react'
import { Container } from 'react-bootstrap'
import './Hero.scss'

import frame from './freeze.png'
import video from './sourcecode.mp4'

const Hero = () => {

    const [skill, setSkill] = useState("The developer you need")
    let [counter, setCounter] = useState(0)

    const skills = ["Adaptable", "Smart", "Social", "Creative", "Curious"]

    //let skill = "  "

    const skillChanger = (arr) => {


        const interval = setInterval(() => {

            setSkill(arr[counter])

            if (counter > arr.length -1) {
                setCounter(0)
               return setSkill("Adaptable | Smart | Social | Creative | Curious")
            }
            else {

                setCounter(counter++)
            }

        }, 1500)
        return () => clearInterval(interval)
    }

    useEffect(() => {
        skillChanger(skills)
       
    },[])

    return (
        <div className="hero">

            <div className='video-wrapper'>
                <video playsInline autoPlay muted loop poster={frame}>
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <Container >
                    <h1>G-DEV</h1>
                    <h3>{skill}</h3>
                </Container>
            </div>

        </div>
    )
}

export default Hero
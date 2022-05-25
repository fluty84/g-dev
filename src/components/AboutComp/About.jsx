import { useContext, useEffect, useState } from 'react'
import { Row, Col, Image, Carousel } from 'react-bootstrap'
import { useInView } from "react-intersection-observer";


import { Parallax } from 'react-scroll-parallax';
import vector from './eduVector.svg'
import vectorW from './eduVectorW.png'
import edu from './edu.png'
import siluetW from './eduSilW.png'
import siluet from './eduSil.png'

import { myContext } from "../../context"

import slides from './slides.json'
import './About.scss'

const About = () => {

    const { lang, colorScheme } = useContext(myContext)
    const [visible, setVisible] = useState(null)
    const [ref, inView] = useInView()

    useEffect(() => {
        if (inView) {
            setVisible('visible')
        } else {
            setVisible('hide')
        }
    }, [inView])


    return (
        <Row className='about'>
           
                <Col md={4} ref={ref} onClick={() => setVisible(visible === 'visible' ? 'hide' : 'visible')}>
                    <Image className={`vector ${visible} back`} fluid={true} src={colorScheme === 'dark' ? siluetW : siluet} alt="eduImg" />
                    <Image className={`vector ${visible} middle`} fluid={true} src={colorScheme === 'dark' ? vectorW : vector} alt="eduImg" />
                    <Image className={`vector ${visible} front`} fluid={true} src={edu} alt="eduImg" />
                </Col>
        
            <Col md={6} className='article'>

                <Carousel >
                    {
                        slides[lang]?.map((item, idx) => {
                            return (
                                <Carousel.Item key={idx} >
                                    <div className="slide">
                                        <h2>{item.title}</h2>
                                        <p>{item.article}</p>
                                    </div>
                                </Carousel.Item>
                            )
                        })
                    }
                   
                </Carousel>

            </Col>
        </Row>
    )
}
export default About
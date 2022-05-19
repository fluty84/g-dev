import { useContext, useEffect, useState } from 'react'
import { Row, Col, Image } from 'react-bootstrap'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import text from './text.json'

import vector from './eduVector.svg'
import vectorW from './eduVectorW.png'
import edu from './edu.png'
import siluetW from './eduSilW.png'
import siluet from './eduSil.png'

import { myContext } from "../../context"

import './About.scss'

const About = () => {

    const { lang, colorScheme } = useContext(myContext)
    const [visible, setVisible] = useState(null)
    const [ref, inView] = useInView()

    const { sp, eng } = text

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
                {lang === 'sp' ?
                    <>
                        <h2>{sp.title}</h2>
                        <p>{sp.article}</p>
                    </>
                    :
                    <>
                        <h2>{eng.title}</h2>
                        <p>{eng.article}</p>
                    </>
                }
            </Col>
        </Row>
    )
}
export default About
import { useContext, useEffect, useState } from 'react'
import { Row, Col, Image } from 'react-bootstrap'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";


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

    useEffect(() => {
        if(inView){
            setVisible("visible")
        } else{
            setVisible("hide")
        }
    },[inView])


    return (
        <Row>
            <Col md={4} ref={ref} onClick={()=> setVisible(visible === 'visible'? 'hide':'visible')}>
                <Image className={`vector ${visible} back`} fluid={true} src={colorScheme === 'dark' ? siluetW : siluet} alt="eduImg" />
                <Image className={`vector ${visible} middle`} fluid={true} src={colorScheme === 'dark'? vectorW : vector} alt="eduImg" />
                <Image className={`vector ${visible} front`} fluid={true} src={edu} alt="eduImg" />

            </Col>
            <Col md={6} className='article'>
                <h2>Blablabla</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quibusdam, illum provident hic aperiam facere minus, delectus recusandae dolorem repellat, sapiente asperiores suscipit impedit? Delectus mollitia in distinctio officia nam!</p>
            </Col>
        </Row>
    )
}
export default About
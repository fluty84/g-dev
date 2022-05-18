
import { Container, Carousel, Row, Col, Image } from 'react-bootstrap'
import { useContext, useEffect, useState } from 'react'

import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";

import { myContext } from "../../context"

import text from './text.json'


import './Projects.scss'

const Projects = () => {

    const { lang, colorScheme } = useContext(myContext)

    const variant = colorScheme === 'dark' ? 'light' : 'dark'

    const sp = 'sp'

    console.log(text[lang])


    return (
        <>
            <Container className="title">
                <h1>PROJECTS</h1>
            </Container>

            {text &&
                <Row className='justify-content-evenly'>
                    {
                        text[lang].map((item, idx) => {

                            const position = idx % 2 == 0 ? 'first' : 'last'

                            return (
                                <Container className='article' key={idx}>

                                    <Row className='p-10'>
                                        <Col md={{ size: 6, order: position }} xs={{ order: 'last' }}>
                                            <h4>{item.title}</h4>
                                            <p>{item.article}</p>
                                        </Col>

                                        {
                                            item.video ?
                                                <Col md={6} xl={6} >
                                                    <iframe
                                                        width="90%"
                                                        height="350px"
                                                        object-fit="cover"
                                                        src="https://www.youtube.com/embed/OOtCATlunhU"
                                                        title="WaiterHack Camarero Virtual"
                                                        frameBorder="0"
                                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                        allowFullScreen>
                                                    </iframe>
                                                </Col>
                                                :
                                                <Col md={6} xl={6} >
                                                    <Image src={require(`${item.image}`)} alt={`image ${item.title}`} />
                                                </Col>
                                        }
                                    </Row>

                                </Container>
                            )
                        })
                    }
                </Row>}

            {/* <Carousel variant={variant} >
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={alienhackers}
                        alt="alien hackers"
                    />
                    <Carousel.Caption>
                        <div className='description'>
                            <h3>Alien Hackers</h3>
                            <p>Destroy all enemies on this OOP JS game</p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://dummyimage.com/800x600/c932c9/ffe"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h5>Second slide label</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://dummyimage.com/800x600/c932c9/ffg"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h5>Third slide label</h5>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel> */}

        </>
    )
}

export default Projects
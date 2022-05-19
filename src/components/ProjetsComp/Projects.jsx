
import { Container, Row, Col, Image, Nav} from 'react-bootstrap'
import { useContext, useEffect, useState } from 'react'
import { useInView } from "react-intersection-observer";

import { myContext } from "../../context"

import text from './text.json'

import githublogo from '../../assets/githublogo.png'

import './Projects.scss'

const Projects = () => {

    const { lang, colorScheme } = useContext(myContext)

    const [visible, setVisible] = useState('hide')
    const [visible1, setVisible1] = useState('hide')
    const [visible2, setVisible2] = useState('hide')
    const [visible3, setVisible3] = useState('hide')

    
    const [ref, inView] = useInView()
    const [ref1, inView1] = useInView()
    const [ref2, inView2] = useInView()
    const [ref3, inView3] = useInView()


    const refArray = [ref, ref1, ref2, ref3]
    const visibleArray = [visible, visible1, visible2, visible3]

    useEffect(() => {
       
        inView ? setVisible('visible') : setVisible('hide')
        inView1 ? setVisible1('visible') : setVisible1('hide')
        inView2 ? setVisible2('visible') : setVisible2('hide')
        inView3 ? setVisible3('visible') : setVisible3('hide')

    }, [inView, inView1, inView2, inView3])


    return (
        <section className={`project ${colorScheme}`}>
            <a id='project'></a>
            <Container className={`title`}>
                {lang === 'eng' ? <h1>Projets</h1> : <h1>Proyectos</h1> }
            </Container>

            {text &&
                <Row className='justify-content-evenly'>
                    {
                        text[lang].map((item, idx) => {

                            const position = idx % 2 == 0 ? 'first' : 'last'

                            return (
                                <Container className={`article ${visibleArray[idx]}`} key={idx} ref={refArray[idx]} >
                                  
                                    <Row className='description p-10'>
                                        <Col md={{ size: 6, order: position }} xs={{ order: 'last' }} >
                                            <h4>{item.title}</h4>
                                            <hr />
                                            <p>{item.article}</p>
                                            <Container className="d-flex justify-content-between align-items-center">
                                               
                                                <Nav.Link className='button' href={item.link} target="_blank">link</Nav.Link>
                                               
                                                <a className='imgLink' href={item.github} target="_blank">
                                                    <Image className='githubImg' src={githublogo} alt='github logo' href={item.github}></Image>
                                                </a>
                                            </Container>
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

           

        </section >
    )
}

export default Projects
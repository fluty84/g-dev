import { useContext } from 'react'
import { Container, Image } from 'react-bootstrap'

import githubLogoB from '../../assets/githublogoB.png'
import githubLogoW from '../../assets/githublogoW.png'
import linkedinLogo from '../../assets/linkedin.png'
import instagramLogo from '../../assets/instagram.png'



import { myContext } from "../../context"

import './Footer.scss'

const Footer = () => {

    const {colorScheme} = useContext(myContext)

    return(
        <Container className='footer d-flex-row justify-content-center' >
            <h5>© Eduardo Gordillo 2022</h5>
            
            <Container className="logos d-flex justify-content-center">
                
                <a className='imgLink' href='https://github.com/fluty84' target="_blank">
                <Image className={`logochange ${colorScheme}`}
                    src={colorScheme === 'dark' ? githubLogoW : githubLogoB}>
                </Image>
                </a>

                <a className='imgLink' href='https://www.linkedin.com/in/gordillo/' target="_blank">
                    <Image
                        src={linkedinLogo}>
                    </Image>
                </a>

                <a className='imgLink' href='https://www.instagram.com/fluty84/' target="_blank">
                    <Image 
                        src={instagramLogo}>
                    </Image>
                </a>
            </Container>
        
        </Container>
    )
}

export default Footer
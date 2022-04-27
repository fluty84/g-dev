import './Hero.scss'

import frame from './freeze.png'
import video from './sourcecode.mp4'

const Hero = () => {


    return(
        <div className="hero">
            <div className='video-wrapper'>
                <video playsInline autoPlay muted loop poster={frame}>
                    <source src={video} type="video/mp4"/>
                        Your browser does not support the video tag.
                </video>
            </div>
            <h1>HERO</h1>
        </div>
    )
} 

export default Hero
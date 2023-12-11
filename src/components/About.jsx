import React, {useState, useRef} from 'react';
import './About.css';
import FileIcon from '../assets/images/icons8-file-24.png';
import FileIconAnimated from '../assets/images/icons8-file.gif';
import AirplaneIcon from '../assets/images/icons8-paper-airplane-50.png';
import AirplaneIconAnimated from '../assets/images/icons8-paper-airplane.gif';
import ZoePicture from '../assets/images/zoe-picture.png';
import resumeFile from '../assets/resume/Resume_ZoeZhu.pdf';

import ContactModal from './ContactModal';

function About() {

    
    const dialogRef = useRef();
    const [isSent, setIsSent] = useState(false);
    const [contactName, setContactName] = useState(''); 

    const handleNameChange = (name) => {
        setContactName(name); 
    };

    return (

        <>
            <section className="about section" id="about">
                <div className="about__container">
                    <div className="about__text">
                        <p className="small-text">Welcome to my portfolio website!</p>
                        <div className="about__title">
                            <h2 className="title__first">Hi, I'm Zoe</h2>
                            <div className="title__second animated__info">
                                <span className="animated__item">A Software Engineer</span>
                                <span className="animated__item">A Web Developer</span>
                                <span className="animated__item">A Problem Solver</span>
                                <span className="animated__item">A Content Creator</span>
                            </div>
                        </div>
                        <p className="about__description">
                            Building a successful product is a challenge. 
                            I am highly energetic in user experience design, database management and website architecture.
                        </p>
                        <div className="about__buttons">
                            <button className="about__button btn--flex">
                                <a href={resumeFile}>
                                    <img src={FileIcon} alt="A static file icon" className="btn__icon icon__static" />
                                    <img src={FileIconAnimated} alt="A animated file icon" className="btn__icon icon__animated" />
                                    Download Resume
                                </a>
                            </button>
                            <button className="about__button btn--flex" onClick={() => dialogRef.current.showModal()}>
                                <a>
                                    <img src={AirplaneIcon} alt="A static airplane icon" className="btn__icon icon__static" />
                                    <img src={AirplaneIconAnimated} alt="A animated airplane icon" className="btn__icon icon__animated" />
                                    Contact Me
                                </a>
                            </button>
                        </div>
                        {isSent && <p className='message'>Hi, <span>{contactName}</span>. I'll get back to you as soon as possible. Thanks for contacting me!</p>}
                    </div>
                    <div className="about__img">
                        <img src={ZoePicture} alt="Zoe's picture" />
                    </div>
                </div> 
            </section> 
            <ContactModal ref={dialogRef} setIsSent={setIsSent} onNameChange={handleNameChange} />       
        </>


    ); 
}

export default About;
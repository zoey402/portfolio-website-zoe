import React from "react";
import "./Skills.css";

import BrowserIcon from "../assets/images/icons8-browser-50.png";
import CodeIcon from "../assets/images/icons8-code-50.png";
import ToolIcon from "../assets/images/icons8-tool-50.png";
import HTMLIcon from "../assets/images/icons8-html5-48.png";
import CSSIcon from "../assets/images/icons8-css3-48.png";
import JSIcon from "../assets/images/icons8-javascript-48.png";
import ReactIcon from "../assets/images/icons8-react-48.png";
import ReduxIcon from "../assets/images/icons8-redux-48.png";
import BootstrapIcon from "../assets/images/icons8-bootstrap-48.png";
import JavaIcon from "../assets/images/icons8-java-48.png";
import PythonIcon from "../assets/images/icons8-python-48.png";
import SpringBootIcon from "../assets/images/icons8-spring-boot-48.png";
import NodeIcon from "../assets/images/icons8-nodejs-48.png";
import ExpressIcon from "../assets/images/icons8-express-js-48.png";
import MongoDBIcon from "../assets/images/icons8-mongodb-48.png";
import MySQLIcon from "../assets/images/icons8-mysql-48.png";
import AWSIcon from "../assets/images/icons8-amazon-web-services-48.png";
import GitIcon from "../assets/images/icons8-git-48.png";
import GitHubIcon from "../assets/images/icons8-github-48.png";
import FigmaIcon from "../assets/images/icons8-figma-48.png";

const frontend_skills = [
    { icon: HTMLIcon, name: 'HTML', alt: 'A HTML icon' },
    { icon: CSSIcon, name: 'CSS', alt: 'A CSS icon' },
    { icon: JSIcon, name: 'JavaScript', alt: 'A JavaScript icon' },
    { icon: ReactIcon, name: 'React', alt: 'A React icon' },
    { icon: ReduxIcon, name: 'Redux', alt: 'A Redux icon' },
    { icon: BootstrapIcon, name: 'Bootstrap', alt: 'A Bootstrap icon' }
];


const backend_skills = [
    { icon: JavaIcon, name: 'Java', alt: 'A Java icon' },
    { icon: PythonIcon, name: 'Python', alt: 'A Python icon' },
    { icon: SpringBootIcon, name: 'SpringBoot', alt: 'A SpringBoot icon' },
    { icon: NodeIcon, name: 'Node.js', alt: 'A Node.js icon' },
    { icon: ExpressIcon, name: 'Express', alt: 'A Express icon' },
    { icon: MongoDBIcon, name: 'MongoDB', alt: 'A MongoDB icon' },
    { icon: MySQLIcon, name: 'MySQL', alt: 'A MySQL icon' },
    { icon: AWSIcon, name: 'AWS', alt: 'A AWS icon' }
];

const other_skills = [
    { icon: GitIcon, name: 'Git', alt: 'A Git icon' },
    { icon: GitHubIcon, name: 'GitHub', alt: 'A GitHub icon' },
    { icon: FigmaIcon, name: 'Figma', alt: 'A Figma icon' }
];



function Skills() {
    
    return (
        
        <section className="skills section" id="skills">
            <div className="skills__container">
                <h2 className="skills__title">Skills</h2>
                <span className="skills__subtitle">Comprehensive Expertise in Full-Stack Development</span>
                <div className="skills__content">
                    <div className="skills__frontend skills__panel">
                        <div className="skills__left">
                            <img className="skills__icon" src={BrowserIcon} alt="A browser icon" />
                            <span className="skills__type">Frontend</span>
                        </div>
                        <div className="skills__right">
                            {frontend_skills.map(skill => (
                                <div className="skills__item" key={skill.name}>
                                    <img className="skills__icon" src={skill.icon} alt={skill.alt} />
                                    <span className="skills__name">{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="skills__backend skills__panel">
                        <div className="skills__left">
                            <img className="skills__icon" src={CodeIcon} alt="A code icon" />
                            <span className="skills__type">Backend</span>
                        </div>
                        <div className="skills__right">
                            {backend_skills.map(skill => (
                                <div className="skills__item" key={skill.name}>
                                    <img className="skills__icon" src={skill.icon} alt={skill.alt} />
                                    <span className="skills__name">{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="skills__others skills__panel">
                        <div className="skills__left">
                            <img className="skills__icon" src={ToolIcon} alt="A tool icon" />
                            <span className="skills__type">Others</span>
                        </div>
                        <div className="skills__right">
                            {other_skills.map(skill => (
                                <div className="skills__item" key={skill.name}>
                                    <img className="skills__icon" src={skill.icon} alt={skill.alt} />
                                    <span className="skills__name">{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;
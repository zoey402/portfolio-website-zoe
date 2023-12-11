import React from "react";
import "./Experiences.css";

function Experiences() {

    return (
        <main id="main-content">
            <section className="experiences section" id="experiences">
                <div className="professional__container">
                    <div className="professional__text">
                        <h2 className="experiences__title">Professional Experiences</h2>
                        <div className="professional__content">
                            <div className="professional__item">
                                <div className="time__span">
                                    <span>Jan 2022 </span>
                                    <span> - </span>
                                    <span>April 2022</span>
                                </div>
                                <h3 className="position">Algorithm Development Intern </h3>
                                <span className="company">Botanee Group </span>
                            </div>
                            <div className="professional__item">
                                <div className="time__span">
                                    <span>April 2022 </span>
                                    <span> - </span>
                                    <span>July 2022</span>
                                </div>
                                <h3 className="position">Software Development Intern</h3>
                                <span className="company">Shanghai AI Laboratory</span>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="education__container">
                    <div className="education__text">
                        <h2 className="experiences__title">Education</h2>
                        <div className="education__content">
                            <div className="education__item">
                                <div className="time__span">
                                    <span>Sep 2018</span>
                                    <span> - </span>
                                    <span>June 2022</span>
                                </div>
                                <h3 className="university">Fudan University</h3>
                                <span className="degree">Bachelor of Science in Statistics</span>                                    

                                
                            </div>
                            <div className="education__item">
                                <div className="time__span">
                                    <span>Sep 2023</span>
                                    <span> -</span>
                                    <span>May 2025</span>
                                </div>
                                <h3 className="university">Northeastern University</h3>
                                <span className="degree">Master of Science in Software Engineering</span>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
}

export default Experiences;
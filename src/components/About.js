import React from "react";
import { formatDescription } from "../utils/formating";
class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            skills: [
                "Javascript",
                "NodeJs",
                "Jquery/HTML/CSS",
                "ReactJS",
                "AngularJs",
                "Python",
                "Databases: Posgres, MySql, Cassandra",
                "Rest",
                "Google Analytics",
                "Decentralized Applications (DApps)",
                "Solidity",
                "Git/Github",
            ],
            about: `
                Shubham is a problem solver who has an insatiable hunger for creating and learning new things. He is a voracious reader and an excellent researcher which helps him achieve solutions to problems he wants to solve. His ability to think out of the box sets him apart from the crowd.
                Shubham is a programmer at heart and he love to watch animes whenever he is free.
            `,
            birthDate: "April 24, 1996",
            fullName: "Shubham Gupta",
            jobTitle: "Software Engineer",
            email: "shubhamg2404@gmail.com",
            skillDescription: `I have been working on java for past 3 years starting from my college to my company. I am proficient
            with multiple programming languages, but I mostly code in java, python,javascript,html, css and
            their frameworks.`,
            profileDescription: `My work horizon is vast and I have worked on many different technologies starting from java desktop
            based applications to machine learning to micro controller programming to creating javascript games.
        I love both hardware and software, I am a whole package and can mostly code in full stack.
            `
        }

    }
    getSkillSection = () => {
        return (<React.Fragment>
            {this.state.skills.map(function (element, index) {
                return (
                    <li key={index}>
                        <strong>{element}</strong>
                    </li>
                )
            })}
        </React.Fragment>)
    }
    componentWillMount() {
        this.formatedAbout = formatDescription(this.state.about);
        this.formatedSkillDescription = formatDescription(this.state.skillDescription);
        this.formatedProfileDescription = formatDescription(this.state.profileDescription);
    }


    render() {
        return (
            <section id="about">

                <div className="row section-intro">
                    <div className="col-twelve">

                        <h5>About</h5>
                        <h1>Let me introduce myself.</h1>

                        <div className="intro-info">
                            <p className="lead">
                                {this.formatedAbout}
                            </p>
                        </div>

                    </div>
                </div>

                <div className="row about-content">

                    <div className="col-six tab-full">

                        <h3>Profile</h3>
                        <p>{this.formatedProfileDescription}</p>
                        <ul className="info-list">
                            <li>
                                <strong>Fullname:</strong>
                                <span>{this.state.fullName}</span>
                            </li>
                            <li>
                                <strong>Birth Date:</strong>
                                <span>{this.state.birthDate}</span>
                            </li>
                            <li>
                                <strong>Job:</strong>
                                <span>{this.state.jobTitle}</span>
                            </li>
                            <li>
                                <strong>Email:</strong>
                                <span>{this.state.email}</span>
                            </li>
                        </ul>
                    </div>

                    <div className="col-six tab-full">
                        <h3>Skills</h3>
                        <p>{this.formatedSkillDescription}</p>

                        <ul>
                            {this.getSkillSection()}
                        </ul>

                    </div>

                </div>

                <div className="row button-section">
                    <div className="col-twelve">
                        <a href="#contact" title="Hire Me" className="button stroke smoothscroll">Hire Me</a>
                        <a href="#" title="Download CV" className="button button-primary">Download CV</a>
                    </div>
                </div>

            </section>

        );
    }
}

export default About;
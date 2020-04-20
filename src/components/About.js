import React from "react";
import { formatDescription } from "../utils/formating";
class About extends React.Component {
    constructor(props) {
        super(props);

    }
    getSkillSection = () => {
        return (<ul>
            {this.props.data.skills.map(function (element, index) {
                return (
                    <li key={index}>
                        <strong>{element}</strong>
                    </li>
                )
            })}
        </ul>)
    }
    componentWillMount() {
        this.formatedAbout = formatDescription(this.props.data.about);
        this.formatedSkillDescription = formatDescription(this.props.data.skillDescription);
        this.formatedProfileDescription = formatDescription(this.props.data.profileDescription);
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
                                <span>{this.props.data.fullName}</span>
                            </li>
                            <li>
                                <strong>Birth Date:</strong>
                                <span>{this.props.data.birthDate}</span>
                            </li>
                            <li>
                                <strong>Job:</strong>
                                <span>{this.props.data.jobTitle}</span>
                            </li>
                            <li>
                                <strong>Email:</strong>
                                <span>{this.props.data.email}</span>
                            </li>
                        </ul>
                    </div>

                    <div className="col-six tab-full">
                        <h3>Skills</h3>
                        <p>{this.formatedSkillDescription}</p>


                        {this.getSkillSection()}


                    </div>

                </div>

                <div className="row button-section">
                    <div className="col-twelve">
                        <a href="#contact" title="Hire Me" className="button stroke smoothscroll">Hire Me</a>
                        <a href="Shubham_Gupta_s_CV.pdf" download="Shubham_Gupta_s_CV.pdf" title="Download CV" className="button button-primary">Download CV</a>
                    </div>
                </div>

            </section>

        );
    }
}

export default About;
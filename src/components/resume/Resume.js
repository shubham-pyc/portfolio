import React from "react";
import ResumeItem from "./ResumeItem";

class Resume extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            workExperience: [
                {
                    position: "Software Engineer",
                    type: "work",
                    from: "Jul 2019",
                    to: "Present",
                    companyName: "Impetus Technologies",
                    description: `currenty working with a client called UNITED AIRLINES for their web analytics and a product called InteractEz which is for process automation for customer support throught whatsapp`

                },
                {
                    position: "Associate Software Engineer",
                    type: "work",
                    from: "May 2018",
                    to: "Jul 2019",
                    companyName: "Impetus Infotech",
                    description: `
                        I am part of the aviation domain digital analytics and UI optimization team. 
                        We do user behavioral analytics and design/create a new User Interface 
                        for making the user experience optimized which generated 54 million dollars in the last quarter. 
                        My responsibilities: 
                        - Writing production level javascript code to enhance the user interface with accessibility features(aria)
                        - Writing tracking code to analyze how the user behaves on the website.
                        - Code review of other team members
                        - Collaborating with multiple teams to understand the new requirements and provide the best solution.
                        - Looking after the whole lifecycle of A/B test using oracle maxymiser.

                        I built an Intelligent program which
                        1) Automates the code writing process which generates 60% of the code which is required. 
                        2) It simultaneously creates Stories and Subtasks according to the requirement on JIRA with appropriate story points and description
                        3) Pushes code on GIT and Maximizer simultaneously
                        This helps us save 400 man-hours yearly and due to that, I was awarded as a Bright Beginner, an Award given to the new & exceptional people in our organization.
`
                }
            ],
            education: [
                {
                    position: "Bachelor Degree",
                    type: "education",
                    from: "Aug 2014",
                    to: "May 2018",
                    companyName: "Bachelor of Engineer",
                    description: "Did bachelor of Engineer major in Information Techonology."

                }
            ]
        }
    }

    render() {
        return (
            <section id="resume" className="grey-section">
                <div className="row section-intro">
                    <div className="col-twelve">
                        <h5>Resume</h5>
                        <h1>More of my credentials.</h1>
                        <p className="lead"></p>
                    </div>
                </div>
                <div className="row resume-timeline">
                    <div className="col-twelve resume-header">

                        <h2>Work Experience</h2>
                    </div>
                    {this.state.workExperience.map((element, index) => {
                        return <ResumeItem key={index} item={element} />
                    })}
                </div>
                <div className="row resume-timeline">
                    <div className="col-twelve resume-header">
                        <h2>Education</h2>
                    </div>
                    {this.state.education.map((element, index) => {
                        return <ResumeItem key={index} item={element} />
                    })}
                </div>
            </section >

        );
    }
}

export default Resume;
import React from "react";
import { Link } from "react-scroll";
import { graphql, useStaticQuery } from "gatsby";
class Intro extends React.Component {
    constructor(props) {
        super(props);

    }

    getSocialLinks = () => {
        var retValue = [];
        for (var link in this.props.data.links) {
            var cssClass = "fa fa-" + link;
            retValue.push(
                <li key={link}><a href={this.props.data.links[link]} target="_blank"><i className={cssClass}></i></a></li>
            )
        }
        return retValue;
    }



    render() {

        return (
            <section id="intro">

                <div className="intro-overlay"></div>

                <div className="intro-content">
                    <div className="row">

                        <div className="col-twelve">

                            <h5>Hello, World.</h5>
                            <h1>I'm Shubham Gupta.</h1>

                            <p className="intro-position">
                                <span>Full Stack Developer</span>
                                <span>Computer Programmer</span>
                            </p>


                            <Link
                                className="button stroke"
                                activeClass="active"
                                to="about"
                                spy={true}
                                smooth={true}
                                duration={500}
                            >More About Me</Link>
                        </div>

                    </div>
                </div>

                <ul className="intro-social">
                    {this.getSocialLinks()}
                </ul>

            </section>

        );
    }
}

export default Intro;
import React, { useState } from "react";
import SlideToggle from "react-slide-toggle";
import { Link } from "react-scroll";
class Header extends React.Component {
    state = { toggleEvent: 0 };
    constructor(props) {
        super(props);

    }
    onToggle = () => {
        this.setState({ toggleEvent: Date.now() });
    }
    render() {
        return (
            <header>
                <div className="row">

                    <div className="top-bar">
                        <a className="menu-toggle" onClick={this.onToggle}><span>Menu</span></a>

                        <div className="logo">

                            <Link
                                to="intro"
                                spy={true}
                                smooth={true}
                                duration={500}
                            >Menu</Link>
                        </div>


                    </div>

                    <SlideToggle toggleEvent={this.state.toggleEvent} collapsed>
                        {({ setCollapsibleElement }) => (
                            <nav id="main-nav-wrap" ref={setCollapsibleElement}>
                                <ul className="main-navigation" >
                                    <li>

                                        <Link
                                            activeClass="current"
                                            to="intro"
                                            spy={true}
                                            smooth={true}
                                            duration={500}
                                            onClick={this.onToggle}
                                        >Home</Link>
                                    </li>
                                    <li>

                                        <Link
                                            activeClass="current"
                                            to="about"
                                            spy={true}
                                            smooth={true}
                                            duration={500}
                                            onClick={this.onToggle}
                                        >About</Link>
                                    </li>
                                    <li>

                                        <Link
                                            activeClass="current"
                                            to="resume"
                                            spy={true}
                                            smooth={true}
                                            duration={500}
                                            onClick={this.onToggle}
                                        >Resume</Link>
                                    </li>
                                    <li>

                                        <Link
                                            activeClass="current"
                                            to="portfolio"
                                            spy={true}
                                            smooth={true}
                                            duration={500}
                                            onClick={this.onToggle}
                                        >Portfolio</Link>
                                    </li>
                                    <li>

                                        <Link
                                            activeClass="current"
                                            to="stats"
                                            spy={true}
                                            smooth={true}
                                            duration={500}
                                            Contact={this.onToggle}
                                        >Contact</Link>
                                    </li>

                                </ul>
                            </nav>
                        )}
                    </SlideToggle>

                </div>
            </header>
        );
    }
}

export default Header;
import React from 'react';
import Header from "./Header";
import Foother from "./Footer";
import Stats from "./Stats";
import Portfolio from './Portfolio';
import Resume from "./resume/Resume";
import About from "./About";
import Intro from "./Intro";
class Layout extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (

            <React.Fragment>
                <Header />
                <Intro />
                {this.props.children}
                <About />
                <Resume />
                <Portfolio />
                <Stats />
                <Foother />
            </React.Fragment>

        );
    }


}

export default Layout;
import React from "react";
import FolioItem from "./folio_item/FolioItem";
import Masonry from 'react-masonry-component';

class Portfolio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: [
                {
                    projectName: "Nirvana",
                    imageUrl: "images/portfolio/blockchain.png",
                    projectCategory: "Blockchain",
                    projectLink: "https://github.com/Nirvana-Blockchain/Nirvana",
                    projectDescription: `An Open-source Blockchain Framework for the infrastrucutre setup of private Ethereum blockchain network
                    - Contains a block explorer
                    - Proof of authority validators dapp
                    - Warehouse temperature and analytics dapp`
                },
                {
                    imageUrl: "images/portfolio/hand-gestures.png",
                    projectName: "Hand gesture recognition",
                    projectCategory: "Deep Leanring",
                    projectLink: "https://github.com/shubhamg2404/Handgesture-Recognition",
                    projectDescription: `A Framework for training Neural Network with custom hand gestures. (GitHub link in project URL)
                    - Implemented custom image collector which take images from webcam removes noise, resizes, converts RBG images to binary images and stores on disk
                    - Created a custom image flattener to convert pixel data to useful information which can be fed to the neural network, applied feature engineering. 
                    - Built setup script which automatically installs all required dependencies so the project is ready to run in one command
                    - Forged gesture recognized which is the Neural Network trained by input images provided by the image collector, successfully recognizes new images from the webcam 
                    Advantages - 
                    1) Trainability - NN can be trained with this framework in 10 lines of code
                    2) Scalability - New gestures can be added under 5 lines of code
                    3) Configurability
                    4) Reusability`
                },
                {
                    imageUrl: "images/portfolio/arduino-04.png",
                    projectName: "Natsu",
                    projectCategory: "Image Processing",
                    projectLink: "https://github.com/shubhamg2404/NATSU",
                    projectDescription: `Created a Wireless Bluetooth controller Arduino robot which could be controlled through Hand Gestured.
                    - Created Hand Recognization script with python used OpenCV library for Image Processing
                    - Used Convexity Defects and Convex Hull algorithms for finding gestures.
                    - Programmed Arduino microcontroller for receiving signals from Bluetooth and send signals to motors accordingly`
                },
                {
                    imageUrl: "images/portfolio/webapp.jpg",
                    projectName: "Chatapp",
                    projectCategory: "Webapp",
                    projectLink: "https://github.com/shubhamg2404/Chat-Application"
                },
                {
                    imageUrl: "images/portfolio/chrome-extension.png",
                    projectLink: "https://github.com/shubhamg2404/empower_util",
                    projectName: "Enhanced Empower",
                    projectCategory: "Chrome Extensions",
                    projectDescription: `- Designed Chrome extension for office to display real-time in-office timings.
                    - Automatically injecting working hours on a particular day in timesheets.
                    `
                },
                {
                    imageUrl: "images/portfolio/chat-benefits.png",
                    projectName: "Chat Microservice for a Social Media Website",
                    projectCategory: "Microservice",
                    projectDescription: `- Implemented chat and user notification microservice for a social networking website www.vomvos.com
                    - Used STOMP protocol and simple message broker (Queue)
                    - Integrated Cassandra Database for faster reads and writes
                    - Used Java SpringBoot for creating the microservice.`
                },
                {
                    imageUrl: "images/portfolio/snake.png",
                    liveLink: "https://shubhamg2404.github.io/snake-game/",
                    projectName: "Snake",
                    projectCategory: "Game Development",
                    projectDescription: `A classic snake game demonstrating the use of Linked List.
                    - Designed whole games on HTML canvas and wrote javascript for graphic design
                    - Wrote Algorithm for moving snake properly in streamline flow
                    - Implemented Collision detection between snake and apple with 100% accuracy by pixel
                    - Implemented Controller for the snake in plain javascript`
                },
                {
                    imageUrl: "images/portfolio/tick-tac-toe.jpg",
                    liveLink: "https://shubhamg2404.github.io/tick-tack-toe/",
                    projectName: "Tic-Tac-Toe",
                    projectCategory: "Game Development",
                    projectDescription: `- Designed an Online 2 player Tic-Tack-Toe Game customizable number of cells
                    - Used Javascript and HTML.`
                },
                {
                    imageUrl: "images/portfolio/web-development.png",
                    liveLink: "http://etraverse.com/",
                    projectName: "eTraverse",
                    projectCategory: "Web Development",
                    projectDescription: `Created a website for a startup focused on education in Africa.
                    - Wrote a custom javascript framework for faster rendering and content delivery.
                    - Designed the layout and optimized code for faster serving in the African region.`
                },

            ]
        }
    }
    componentDidMount() {
        //this.hide();
    }
    handleImagesLoaded = () => {
        //this.show();
    }


    getProjectInformation = () => {
        var retValue = '';

        return retValue;
    }

    render() {
        const childElements = this.state.projects.map((element, index) => {
            return <FolioItem key={index} id={index} data={element} />
        })

        return (
            <section id="portfolio">
                <div className="row section-intro">
                    <div className="col-twelve">
                        <h5>Portfolio</h5>
                        <h1>Check Out Some of My Works.</h1>
                        <p className="lead"></p>
                    </div>
                </div>
                <div className="row portfolio-content">
                    <div className="col-twelve">
                        <div id="folio-wrapper" className="block-1-2 block-mob-full stack">
                            <Masonry
                                onImagesLoaded={this.handleImagesLoaded}
                            >
                                {childElements}
                            </Masonry>
                        </div>
                    </div>
                </div>
            </section>

        );
    }
}

export default Portfolio;
import React from "react";
import FolioItem from "./folio_item/FolioItem";
import Masonry from 'react-masonry-component';

class Portfolio extends React.Component {
    constructor(props) {
        super(props);
        
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
        const childElements = this.props.data.projects.map((element, index) => {
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
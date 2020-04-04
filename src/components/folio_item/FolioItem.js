import React from "react";
import { formatDescription } from "../../utils/formating";
class FolioItem extends React.Component {
    constructor(props) {
        super(props);

    }
    getId = (withPrefix) => {
        let prefix = '';
        if (withPrefix) {
            prefix = "#";
        }
        return prefix + "modal-" + this.props.id;
    }

    getProjectLink = () => {
        if (this.props.data.projectLink) {
            return <a href={this.props.data.projectLink}>Code</a>
        }
    }

    componentWillMount() {
        this.formantedDescription = formatDescription(this.props.data.projectDescription);
    }

    render() {
        return (

            <React.Fragment>
                <div className="bgrid folio-item">
                    <div className="item-wrap">
                        <img src={this.props.data.imageUrl} alt="Liberty" />
                        <a href={this.getId(true)} className="overlay">
                            <div className="folio-item-table">
                                <div className="folio-item-cell">
                                    <h3 className="folio-title">{this.props.data.projectName}</h3>
                                    <span className="folio-types">
                                        {this.props.data.projectCategory}
                                    </span>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>


                <div id={this.getId(false)} className="popup-modal slider mfp-hide">

                    <div className="media">
                        <img src="images/portfolio/arduino-04.png" alt="" />
                    </div>

                    <div className="description-box">
                        <h4>{this.props.data.projectName}</h4>
                        <p>{this.formantedDescription}</p>
                        <div className="categories">{this.props.data.projectCategory}</div>
                    </div>

                    <div className="link-box">
                        {this.getProjectLink()}
                        <a href="#" className="popup-modal-dismiss">Close</a>
                    </div>

                </div>
            </React.Fragment>

        );
    }
}

export default FolioItem;
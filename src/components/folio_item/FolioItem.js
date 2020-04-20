import React from "react";
import { formatDescription } from "../../utils/formating";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'
class FolioItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        }

    }
    handleClose = () => {
        this.setState({ show: false });
    }
    handleShow = () => {
        this.setState({ show: true });
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
            return <a href={this.props.data.projectLink} target="_blank">See Project</a>
        }

    }

    componentWillMount() {
        this.formantedDescription = formatDescription(this.props.data.projectDescription);

    }

    render() {

        if (!this.props.data.imageUrl) {
            return (
                <React.Fragment></React.Fragment>
            )
        }


        return (

            <React.Fragment>
                <div className="bgrid folio-item">
                    <div className="item-wrap">
                        <img src={this.props.data.imageUrl} alt="Liberty" />
                        <a className="overlay" onClick={this.handleShow}>
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

                <Modal show={this.state.show} onHide={this.handleClose}>
                    <div className="popup-modal slider">
                        <Modal.Body>

                            <div className="media">
                                <img src={this.props.data.imageUrl} alt="" />
                            </div>

                            <div className="description-box">
                                <h4>{this.props.data.projectName}</h4>
                                <p>{this.formantedDescription}</p>
                                <div className="categories">{this.props.data.projectCategory}</div>
                            </div>



                        </Modal.Body>
                        <Modal.Footer>
                            <div className="link-box">
                                {this.getProjectLink()}
                                <a className="popup-modal-dismiss" onClick={this.handleClose}>Close</a>
                            </div>
                        </Modal.Footer>
                    </div>
                </Modal>
            </React.Fragment>

        );
    }
}

export default FolioItem;
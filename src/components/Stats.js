import React from "react";

class Stats extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <React.Fragment>
                <section id="stats" className="count-up">
                    <div className="row">
                        <div className="col-twelve">
                            <div className="block-1-4 block-s-1-3 block-tab-1-2 block-mob-full stats-list">
                                <div className="bgrid stat">
                                    <div className="icon-part">
                                        <i className="icon-pencil-ruler"></i>
                                    </div>
                                    <h3 className="stat-count">
                                        20
                                    </h3>
                                    <h5 className="stat-title">
                                        Projects Completed
                                    </h5>
                                </div>
                                <div className="bgrid stat">
                                    <div className="icon-part">
                                        <i className="icon-light-bulb"></i>
                                    </div>
                                    <h3 className="stat-count">
                                        150
                                    </h3>
                                    <h5 className="stat-title">
                                        Crazy Ideas
                                    </h5>
                                </div>
                                <div className="bgrid stat">
                                    <div className="icon-part">
                                        <i className="icon-cup"></i>
                                    </div>
                                    <h3 className="stat-count">
                                        1
                            </h3>
                                    <h5 className="stat-title">
                                        Coffee Cups
                            </h5>
                                </div>
                                <div className="bgrid stat">
                                    <div className="icon-part">
                                        <i className="icon-clock"></i>
                                    </div>
                                    <h3 className="stat-count">
                                        1600
                            </h3>
                                    <h5 className="stat-title">
                                        Hours
                            </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </section >
                <div className="row contact-info">
                    <div className="col-four tab-full">
                        <div className="icon">
                            <i className="icon-pin"></i>
                        </div>
                        <h5>Where to find me</h5>
                        <p>
                            530 Khatiwala Tank <br />
                            Indore,M.P <br />
                            452014 India
                        </p>
                    </div>
                    <div className="col-four tab-full">
                        <div className="icon">
                            <i className="icon-mail"></i>
                        </div>
                        <h5>Email Me At</h5>
                        <p>shubhamg2404@gmail.com
                        </p>
                    </div>
                    <div className="col-four tab-full">
                        <div className="icon">
                            <i className="icon-phone"></i>
                        </div>
                        <h5>Call Me At</h5>
                        <p>Phone: (+91) 898-962-6549<br />
                        </p>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Stats;
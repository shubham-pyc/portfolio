import React from "react";
import { formatDescription } from "../../utils/formating";
var item = {
    position: "",
    type: "",
    from: "",
    to: "",
    companyName: "",
    description: ""

}

const ResumeItem = (props) => {
    const { item } = props;
    let iconClass = 'fa fa-briefcase';
    if (item && item.type == "education") {
        iconClass = "fa fa-graduation-cap";
    }
    //TODO: Find a better solution
    const formatedDescription = formatDescription(item.description);

    return (
        <div className="col-twelve">
            <div className="timeline-wrap">
                <div className="timeline-block">
                    <div className="timeline-ico">
                        <i className={iconClass}></i>
                    </div>
                    <div className="timeline-header">
                        <h3>{item.position}</h3>
                        <p>{item.from} - {item.to}</p>
                    </div>
                    <div className="timeline-content">
                        <h4>{item.companyName}</h4>
                        <p>{formatedDescription}</p>
                    </div>
                </div>

            </div>
        </div>
    )
}


export default ResumeItem;
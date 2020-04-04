import React from "react";


/*
    Function to convert a string to a html with html
    new line is converted with <br>
*/
export function formatDescription(description) {
    var retValue = "";
    try {
        if (description) {
            description = String(description);
            retValue = description.split("\n").map((element) => {
                return (<React.Fragment>{element}<br /></React.Fragment>);
            })
        }

    } catch (e) {
        console.error(e);
    }
    return retValue;
}
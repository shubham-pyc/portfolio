const path = require("path");
const fs = require("fs")
const scrapper = require("linkedin-scrapper");


function getCorrectValueFromJSON(newValue, oldValue) {
    var retValue = oldValue;
    try {
        if (newValue !== undefined && newValue.length !== undefined && newValue.length != 0) {
            retValue = newValue;
        }

    } catch (e) {
        console.error(e);
    }
    return retValue;
}


function mergeProjects(newProjects, oldProjects) {
    var mergedProjects = [];
    try {
        var projectMap = {};
        for (let index = 0; index < oldProjects.length; index++) {
            const project = oldProjects[index];
            projectMap[project.projectName] = project;
        }

        for (let index = 0; index < newProjects.length; index++) {
            let project = Object.assign({}, newProjects[index]);
            let oldCopy;

            if (project.projectName in projectMap) {
                oldCopy = projectMap[project.projectName];
            }

            if (oldCopy) {

                if (oldCopy.imageUrl) {
                    project.imageUrl = oldCopy.imageUrl
                }

            }
            mergedProjects.push(project);

        }
    } catch (e) {
        console.error(e);
        mergedProjects = oldProjects
    }
    return mergedProjects;
}


function mergerProfiles(newProfile, defaultProfile) {
    var combinedProfile = defaultProfile;
    try {
        for (var key in defaultProfile) {
            if (key === "projects") {
                combinedProfile[key] = mergeProjects(newProfile[key], defaultProfile[key]);
            } else {
                combinedProfile[key] = getCorrectValueFromJSON(newProfile[key], defaultProfile[key]);
            }

        }
    } catch (e) {
        console.error(e);
        combinedProfile = defaultProfile;
    }
    return combinedProfile
}


exports.onPreBuild = async () => {
    var defaultProfile;
    try {
        // var newProfile = await scrapper({
        //     url: "/in/shubham-gupta-103929108/"
        // })

        var combinedProfile = JSON.parse(fs.readFileSync(`${__dirname}/src/default_profile.json`, 'utf-8'));


        // var combinedProfile = mergerProfiles(newProfile, defaultProfile)

        fs.writeFileSync(`${__dirname}/src/profile.json`, JSON.stringify(combinedProfile, undefined, 1));

    } catch (e) {
        console.error(e);
        fs.writeFileSync(`${__dirname}/src/profile.json`, JSON.stringify(defaultProfile, undefined, 1));
    }

}

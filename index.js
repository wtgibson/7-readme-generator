// Node.js requirements

const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");

// Local file requirements

const api = require("./utils/api.js");
const generateMarkdown = require("./utils/generateMarkdown.js");

// Make writeFile asynchronous
const writeFileAsynch = util.promisify(fs.writeFile);

// Prompts user for README and Github info

function askUser() {
    return inquirer.prompt([
        {
            message: "What is your GitHub username?",
            name: "github"
            
        },
        {
            message: "What is the title of the project? (Must match Github repo if applicable)",
            name: "title"
            
        },
        {
            message: "Please describe your project:",
            name: "description"
            
        },
        {
            message: "Please provide an installation process for your project:",
            name: "installation"
            
        },
        {
            message: "Please provide instructions for the usage of your project:",
            name: "usage"
            
        },
        {
            message: "Please list any collaborators or resources you'd like to credit for the project?",
            name: "credits"
            
        },
        {
            message: "Please provide details for the license and use of your project:",
            name: "license"
            
        },
        {
            message: "Please provide instructions for users that would like to contribute to your project:",
            name: "contributing"
            
        },
        {
            message: "Please provide information regarding any testing involved in your project:",
            name: "tests"
            
        }
    ]);
};

async function init() {
    try {
        // Get README info
        const readmeInfo = await askUser();

        // Get GitHub API info
        await api.getUser(readmeInfo.github).then(function(response){
            readmeInfo.email = response.data.email;
            readmeInfo.image = response.data.avatar_url;

        });

        // Create README content
        const readmeContent = generateMarkdown(readmeInfo);

        // Create README file
        await writeFileAsynch("README.md", readmeContent);
        console.log("README created!") 

    } catch (err) {
        console.log("Error: " + err)
    }
}


init();

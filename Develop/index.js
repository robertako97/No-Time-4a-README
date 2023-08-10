const fs = require('fs');
const inquirer = require('inquirer');
const axios = require('axios');
const api = {
    async getUser(username) {
        try {
            const response = await axios.get(`https://api.github.com/users/${username}`);
            return response.data;
        } catch (error) {
            throw error; // Let the error propagate to a higher level
        }
    },
};
////////////////////////////////////////////////////
//PROMPTS
async function getUserInputs() {
    const answers = await inquirer.prompt([
        {
            type: 'input',
            message: 'Project Title:',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Add a project description:',
            name: 'description',
        },
        {
            typo:'input',
            message: 'What are the project features?',
            name:'features',
        },
        {
            type: 'input',
            message: 'Table of contents:',
            name: 'content',
        },
        {
            type: 'input',
            message: 'Installation instructions:',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'Usage information:',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'If you would like to contribute it, you can follow these guidelines for how to do so:',
            name: 'contributing',
        },
        {
            type: 'input',
            message: "If applicable, provide any tests written for your application and provide examples on how to run them.",
            name: 'tests'
        },
        {
            type: 'list',
            message: "Choose a license for your project.",
            choices: ['Apache License 2.0', 'MIT', 'Mozilla', 'Unlicense'],
            name: 'license'
        },
        {
            type: 'input',
            message: "What is the name of your GitHub name?",
            name: 'repo',
        },
        {
            type: 'input',
            message: "What is the name of your GitHub repo?",
            name: 'repoLink',
        },
        {
            type: 'input',
            message: "What's your email for contact?",
            name: 'email',}
    ]);

    return answers;
}
////////////////////////////////////////////////////
//GITHUB FETCH
async function initRepo(username) {
    try {
        const userInfo = await api.getUser(username); //GitHub repo name
        //   console.log("Your GitHub user info: ", userInfo);
        return userInfo;
    } catch (error) {
        console.log(error);
    }
}
////////////////////////////////////////////////////
//WRITE FILE
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            console.error('Error writing to file:', err);
        } else {
            console.log(`Data has been written to ${fileName}`);
        }
    });
}
///////////////////////////////////////////////////


////////////////////////////////////////////////////
//MAIN FUNCTION
async function init() {
    try {
        const userInput = await getUserInputs();
       // console.log('User inputs:', userInput);

        const READMEinfo = {
            titleInput: userInput.title,
            descriptionInput: userInput.description,
            installationInput: userInput.installation,
            usageInput: userInput.usage,
            licenseInput: userInput.license,
            contentInput: userInput.content,
            contributingInput: userInput.contributing,
            testsInput: userInput.tests,
            username: userInput.repo,
            featuresInput:userInput.features,
            repoLink:userInput.repoLink,
            email:userInput.email

        };

        const {
            username,
            testsInput,
            contributingInput,
            contentInput,
            titleInput,
            descriptionInput,
            installationInput,
            licenseInput,
            usageInput,
            featuresInput,
            repoLink,
            email
        } = READMEinfo;

        const generateMarkdown = require('./utils/generateMarkdown');
        const markdown = generateMarkdown(licenseInput);

        const userInfo = await initRepo(username);
       // console.log(userInfo)
        const repoInfo = {repoURL:userInfo.url}
        const {repoURL} = repoInfo;

        //Table of contents
        let draftToC = `## Table of Contents`;

        if (installationInput !== '') {
            draftToC += `\n * [Installation](#installation) \n `;
        }

        if (usageInput !== '') {
            draftToC += ` * [Usage](#usage) \n`;
        }

        if (contributingInput !== '') {
            draftToC += ` * [Contributing](#contributing) \n`;
        }

        if (testsInput !== '') {
            draftToC += ` * [Testing](#testing)\n `;
        }

        let content = `
# ${titleInput}
## Description
${descriptionInput}

${draftToC}
`;

        if (installationInput) {
            content += `
## Installation
*Steps required to install project and how to get the development environment running:*\n
${installationInput}
`;
        }

        if (usageInput) {
            content += `
## Usage
*Instructions and examples for use:*\n
${usageInput}
`;
        }

        if (contributingInput) {
            content += `
## Contributing
*If you would like to contribute, you can follow these guidelines for how to do so:*\n
${contributingInput}
`;
        }

        if (featuresInput) {
            content += `
## Features
${featuresInput}
`;
        }

        if (testsInput) {
            content += `
## Testing
*Tests for application and how to run them:* \n
${testsInput}
`;
        }

        content += `
This project is licensed under the ${licenseInput} License.\n
${markdown}

### Want to contact me?

**GITHUB:**
${username}    
**EMAIL:** 
${email}

*${repoURL}*

![Badge for GitHub repo top language](https://img.shields.io/github/languages/top/${username}/${repoLink}?style=flat&logo=appveyor) ![Badge for GitHub last commit](https://img.shields.io/github/last-commit/${username}/${repoLink}?style=flat&logo=appveyor)
`;

        writeToFile('README.md', content);
    } catch (error) {
        if (error.isTtyError) {
            console.error("Prompt couldn't be rendered in the current environment");
        } else {
            console.error('Something else went wrong', error);
        }
    }
}


////////////////////////////////////////////////////
//INITIATE
init();
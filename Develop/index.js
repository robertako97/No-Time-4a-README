const fs = require('fs');
const inquirer = require('inquirer');
const axios = require('axios');

const api = {
    async getUser(username) {
        try {
            const response = await axios.get(`https://api.github.com/users/${username}`);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    },
};

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            console.error('Error writing to file:', err);
        } else {
            console.log(`Data has been written to ${fileName}`);
        }
    });
}

function init() {
    inquirer
        .prompt([
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
                    type: 'list',
                    message: "Choose a license for your project.",
                    choices: ['Apache License 2.0', 'MIT', 'Mozilla', 'Unlicense'],

                    name: 'license'
                },
                {
                    type: 'input',
                    message: "What is the name of your GitHub repo?",
                    name: 'repo',
                    default: 'readme-generator',
                }


            ])
        .then(answers => {
            const READMEinfo = {
                titleInput: answers.title,
                descriptionInput: answers.description,
                installationInput: answers.installation,
                usageInput: answers.usage,
                licenseInput: answers.license,
                contentInput: answers.content,
                contributingInput: answers.contributing,
                testsInput: answers.tests,
                username: answers.repo
            }

            const {username, testsInput, contributingInput, contentInput, titleInput, descriptionInput, installationInput, licenseInput, usageInput} = READMEinfo;

            const generateMarkdown = require('./utils/generateMarkdown');
            const markdown = generateMarkdown(licenseInput);

            initMain(username);

            const content = `
  # ${titleInput}
  ## Description
  ${descriptionInput}
  
  ## Table of contents:
  ${contentInput}
  
  ## Installation
  *Steps required to install project and how to get the development environment running:*\n
  ${installationInput}
  
  ## Usage
  *Instructions and examples for use:*\n
  ${usageInput}
  
  ## Contributing
  *If you would like to contribute, you can follow these guidelines for how to do so:*\n
  ${contributingInput}
  
  ## Tests
  *Tests for application and how to run them:* \n
  ${testsInput}
    
  This project is licensed under the ${licenseInput} License.\n
  ${markdown}
  
  ${username}
  ${userInfo.url}
  
`;


            writeToFile('README.md', content);

        })
        .catch(error => {
            if (error.isTtyError) {
                console.error("Prompt couldn't be rendered in the current environment");
            } else {
                console.error('Something else went wrong');
            }
        });
}


async function initMain(repo) {
    try {
        const userInfo = await api.getUser(repo); //GitHub repo name
        console.log("Your GitHub user info: ", userInfo);
    } catch (error) {
        console.log(error);
    }
}

init();
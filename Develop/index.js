// TODO: Include packages needed for this application
//Inquirer Added
//Jquery Added (Not needed?)
//const { JSDOM } = require( "jsdom" ); //Call a virtual DOM env
//const { window } = new JSDOM( "" ); //Simulate HTML
//const $ = require( "jquery" )( window ); //Use Jquery in virtual window

const fs = require('fs');
const inquirer = require('inquirer');
//Constant README file template name

// Markdowns
//const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input -> Declared in function
/*
const questions = {
    title: [],
    description: [],
    installation: [],
    usage: [],
    contributing: [],
    instructions: [],
    license: [],
    username: [],
    email: []

};
*/



// TODO: Create a function to write README file
function writeToFile(fileName, data) {


 //   const content = typeof data === 'string' ? data : JSON.stringify(data, null, 2);
    // Write the data to the specified file
    fs.writeFile(fileName, data, err => {
        if (err) {
            console.error('Error writing to file:', err);
        } else {
            console.log(`Data has been written to ${fileName}`);
        }
    });



}

// TODO: Create a function to initialize app
function init() {

    inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is your project title?',
                name: 'title',
            },
            {
                type: 'input',
                message: 'Project description:',
                name: 'description',
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
                type: 'list',
                message: "Choose a license for your project.",
                choices: ['MIT', 'Mozilla', 'Unlicense'],
                name: 'license'
            }




        ])



        .then((answers) => {

            const READMEinfo = {
                titleInput: answers.title,
                descriptionInput: answers.description,
                installationInput: answers.installation,
                usageInput: answers.usage,
                licenseInput: answers.license
            }

            const {titleInput, descriptionInput, installationInput, licenseInput, usageInput} = READMEinfo;

            const generateMarkdown = require('./utils/generateMarkdown');
            const markdown = generateMarkdown(licenseInput);

            console.log(markdown);

            const content = `
  # My Project
  
  ## ${titleInput}
  
  This is a description.
  
  ## ${descriptionInput}
  
  To install this project, follow these steps...
  
  ## ${installationInput}
  
  Here's how you can use this project...
  
  ## ${usageInput}
  
  This project is licensed under the ${licenseInput} License.
  
  ${markdown}
  
  `;

            // Create/Write README
            writeToFile("README.md", content);

        })
        .catch((error) => {
            if (error.isTtyError) {
                console.error("Prompt couldn't be rendered in the current environment");
            } else {
                console.error('Something else went wrong');
            }
        });








}

// Function call to initialize app
init();


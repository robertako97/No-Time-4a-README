// TODO: Include packages needed for this application
//Inquirer Added
//Jquery Added (Not needed?)
const { JSDOM } = require( "jsdom" ); //Call a virtual DOM env
const { window } = new JSDOM( "" ); //Simulate HTML
const $ = require( "jquery" )( window ); //Use Jquery in virtual window

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

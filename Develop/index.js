// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require ('util');
const generateMArkdown =
require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [{
    type:'input',
    name: 'title',
    message: 'What would you like to title your repository?',
    
    validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log('Enter your repository title');
            return false;
        }
    }

},
{
    type: 'input',
    name: 'description',
    message: 'What is the description of your repository?',
    validate: nameInput => {
        if (nameInput){
            return true;
        } else {
            console.log('Enter a description of the repository.');
            return false;
        }
    }

}];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init()


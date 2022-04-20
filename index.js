//Include packages needed for this application
//const generateMarkdown = require('./utils/generateMarkdown');
const inquirer = require('inquirer');
const fs = require('fs');
const { writeFile, copyFile } = require('./utils/generateMarkdown');

//Create an array of questions for user input
//asking for title of project
const promptUser = () => {
    return inquirer.prompt([
    {
    type: 'input',
    message: 'What is the title of your project?',
    name: 'title',
    validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log('Please enter the title of your project.');
            return false;
        }
    }
}, 
//asking for description of project
{
    type: 'input',
    message: 'What is the project about? Give a short description.',
    name: 'description',
    validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log('Please provide a description of your project.');
            return false;
        }
    }
}, 
//asking for a table of contents
{
    type: 'input',
    message: 'Table of contents.',
    name: 'table',
    validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log('Please provide a table of contents.');
            return false;
        }
    }
}, 
//asking for installation process
{
    type: 'input',
    message: 'What are the steps required to install your project? Provide a detailed description.',
    name: 'installation',
    validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log('Please provide a description of the installation process.');
            return false;
        }
    }
}, 
//asking for instructions for use
{
    type: 'input',
    message: 'Provide instructions and examples for use. Include screenshots as needed.',
    name: 'usage',
    validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log('Please provide instructions and examples for use.');
            return false;
        }
    }
}, 
//asking what license is being used
{
    type: 'checkbox',
    message: 'What license is being used?',
    name: 'license',
    choices: ['BSD', 'MIT', 'GPL']
},
//asking for github username
{
    type: 'input',
    message: 'What is your GitHub username?',
    name: 'username',
    validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log('Please enter your GitHub username.');
            return false;
        }
    }
}, 
//asking for email
{
    type: 'input',
    message: 'What is your email address?',
    name: 'email',
    validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log('Please enter your email address.');
            return false;
        }
    }
}, 
]);
}



// TODO: Create a function to write README file
//function writeToFile(fileName, data) {

//}

// TODO: Create a function to initialize app
function init() {
    promptUser()
        .then((data) => {
            writeFile(data);
        })
}

// Function call to initialize app
init();


// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown');
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
    {
    type: 'input',
    message: 'What is the title of your project?',
    name: 'Title',
    validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log('Please enter the title of your project.');
            return false;
        }
    }
}, 
{
    type: 'input',
    message: 'What is the project about? Give a short description.',
    name: 'Description',
    validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log('Please provide a description of your project.');
            return false;
        }
    }
}, 
{
    type: 'input',
    message: 'Table of contents.',
    name: 'Table of contents',
    validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log('Please provide a table of contents.');
            return false;
        }
    }
}, 
{
    type: 'input',
    message: 'What are the steps required to install your project? Provide a detailed description.',
    name: 'Installation',
    validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log('Please provide a description of the installation process.');
            return false;
        }
    }
}, 
{
    type: 'input',
    message: 'Provide instructions and examples for use. Include screenshots as needed.',
    name: 'Usage',
    validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log('Please provide instructions and examples for use.');
            return false;
        }
    }
}, 
{
    type: 'input',
    message: 'What license is being used?',
    name: 'License',
    validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log('Please provide a list of the licenses used.');
            return false;
        }
    }
}
]);
}



// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();


// Include packages needed for this application
const inquirer = require('inquirer'); // interactive command line user interfaces
const fs = require('fs'); // Node standard library package for reading and writing files
const markDown = require('./utils/generateMarkdown'); // import
// TODO: Create an array of questions for user input
const questions = [
    {
        // Github username
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username',
    },
    {
        // email address
        type: 'input',
        message: 'What is your email address?',
        name: 'emailId',
    },
    {
        // title of project
        type: 'input',
        message: 'What is your project\'s name?',
        name: 'projectTitle',
    },   
    {
        // Description
        type: 'input',
        message: 'Please write a short description of your project',
        name: 'projectInfo',
    },        
    {
        // Installation
        type: 'input',
        message: 'What command should be run to install dependencies?',
        name: 'installInfo',
    },
    {
        // Usage
        type: 'input',
        message: 'What does the user need to know about using the repo?',
        name: 'usageInfo',
    },
    {
        // Contributors
        type: 'input',
        message: 'What does the user need to know about contributing to the repo?',
        name: 'contributionInfo',
    },
    {
        // Tests
        type: 'input',
        message: 'What command should be run to run tests? ',
        name: 'testInfo',
    },
    {
        // License
        type: 'input',
        message: 'What kind of license should your project have? ',
        name: 'license',
    },      
  ]  

// TODO: Create a function to write README file
function writeToFile(data) {
    // use fs.Writefile
   fs.writeFile('README.md', data, (err) =>
        err ? console.error(err) : console.log('Success!')
        );
}

// TODO: Create a function to initialize app
function init() {

    inquirer.prompt(questions)
    .then((answers) => {
        writeToFile(markDown.generateMarkdown(answers));        
    }); 
}

// Function call to initialize app
init();

// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'username',
        message: 'Please enter your GitHub username.',
        validate: githubUsername => {
            if (githubUsername) {
                return true;
            } else {
                console.log('Required section. Please enter your Github username.');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'repoName',
        message: 'Please enter your GitHub repository name.',
        validate: repoName => {
            if (repoName) {
                return true;
            } else {
                console.log('Required section. Please enter your GitHub repository name.');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'gitLink',
        message: 'Please enter the link to your GitHub profile.',
        validate: githubLink => {
            if (githubLink) {
                return true;
            } else {
                console.log('Required section. Please enter the link to your GitHub profile.');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'githubPage',
        message: 'Please enter the link to your GitHub pages.',
        validate: githubPagesLink => {
            if (githubPagesLink) {
                return true;
            } else {
                console.log('Required section. Please enter the link to your GitHub pages.');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address.',
        validate: email => {
            if (email) {
                return true;
            } else {
                console.log('Required section. Please enter your email address.');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'title',
        message: 'Please enter the project name.',
        validate: projectInput => {
            if (projectInput) {
                return true;
            } else {
                console.log('Required section. Please enter the project name.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a clear description of the project explaining the what, why and how of the project.',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Required section. Please provide a description of the project.');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'installation',
        message: 'Optional: please provide the steps required to install your project.'
    },

    {
        type: 'input',
        name: 'usage',
        message: 'Optional: please provide instructions and examples on the use of your project.'
    },

    {
        type: 'confirm',
        name: 'confirmLicense',
        message: 'Would you like to add license information?',
        default: true
    },

    {
        type: 'list',
        name: 'license',
        message: 'Please select your desired license. Use arrow keys to go up and down and press enter to select.',
        choices: ['MIT', 'Apache 2.0', 'GPLV2', 'Mozilla Public License 2.0'],
        when: ({ confirmLicense }) => confirmLicense
    },

    {
        type: 'input',
        name: 'contributors',
        message: 'Please provide the steps needed in order for other developers to contribute to this project.'
    },

    {
        type: 'input',
        name: 'tests',
        message: 'Please provide some information regarding tests for your application.'
    },
];

// TODO: Create a function to write README file
function completeFile(fileName, data) {
    return fs.writeFileSync(fileName, data);
}

// Created a function to initialize app
function init() {
    inquirer.prompt(questions).then(responses => {
        completeFile("README.md", generateMarkdown(responses));
    })

}
// Function call to initialize app
init();


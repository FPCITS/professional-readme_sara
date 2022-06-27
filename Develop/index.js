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
},
{
    type: 'confirm',
    name: 'confirmInstallation',
    message: 'Is there an installation process?'
},
{
    type: 'input',
    name: 'installation',
    message: 'List installation instructions.',

    when: ({ confirmInstallation}) => {
        if (confirmInstallation) {
            return true;
        } else {
            return false;
        }
        }
    },

    {
        type: 'confirm',
        name: 'confirmUsage',
        message: 'Would you like to give instructions for using your application?'
    },
    {
        type: 'input',
        name: 'instructions',
        message: 'List instructions for using the application. Be sure to add images as well.',
        when: ({ confirmUsage }) => {
            if (confirmUsage) {
                return true;
            } else {
                return false;
            }
        }
    },

    {
        type: 'confirm',
        name: 'confirmContribution',
        message: 'May other developers contribute to your repository?'
    },
    {
        type: 'input',
        name: 'confirmContribution',
        message: 'Confirm other developers are able to contribute to your repository.'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'In detail, explain how other developers may contribute to your project.',
            when: ({ confirmContribution}) =>{
                if (confirmContribution) {
                    return true;
                } else {
                    return false;
                }
            }
    },
    {
        type: 'confirm',
        name: 'testConfirm',
        message: 'Is testing available?'
    },
    {
        type: 'input',
        name: 'testing',
        message: 'In detail, explain how users may test your application',    
        when: ({ testConfirm}) => {
            if (testConfirm) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Please choose a license.',
        choices: ['Mozilla Public License 2.0', 'GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'MIT License', 'Apache License 2.0', 'Boost Software License 1.0','The Unlicense'],
    validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log('Select a license.');
            return false;
        }
    }
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username? (Required)',
        validate: nameInput => {
            if(nameInput) {
                return true;
            } else {
                console.log('Enter your GitHub username');
                return false;
            }
        }

    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address? (Required)',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter in your email address.');
            return false;   
            
          }
        }
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Please list instructions for those who wish to contact you.',
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            return false;
          }
        }
      }];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, error => {
        if (error) {
            return console.log ('There was an error :' + error);
        }
    })
}

// // TODO: Create a function to initialize app
async function init() {
    try {
        const userAnswers = await inquirer.prompt(questions);
console.log('Thank you! The current data is being processed into your README.md: ', userAnswers);
const myMarkdown = generateMarkdown(userAnswers);
console.log(myMarkdown);
await createReadMe('README1.md', myMarkdown);

} catch (error) {
    console.log('Sorry there was an error.' + error);

    }
};

// // Function call to initialize app
init();


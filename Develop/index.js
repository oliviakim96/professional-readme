/*GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README*/
// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
        console.log(`Created README file at: ${fileName}`);
    })
}

// TODO: Create a function to initialize app
function init() {
    questions.prompt([
        // {type:'input',message:'what was your motivation?',name:'motivation'},
        // {type:'input',message:'why did you build this project?',name:'why'},
        // {type:'input',message:'what problem does it solve?',name:'solving-problem'},
        // {type:'input', message:'what did you learn?',name:'learn'}
        {type:'input',message:'Enter a title.', name:'title'},
        {type:'input',message:'Enter a description.', name:'description'},
        {type:'input',message:'Enter installation instructions.', name:'installation'},
        {type:'input',message:'Enter usage information.', name:'usage'},
        {type:'input',message:'Enter contribution guidelines.', name:'contributionGuidelines'},
        {type:'input',message:'Enter test instructions.', name:'tests'},
        {
            type: 'rawlist',
            name: 'license',
            message: 'Which license is your project under?',
            choices: [
              'MIT License',
              'GNU GPLv3',
              'ISC License',
              'Unlicensed',
            ],
        },
    ]).then((answers)=>{
        console.log(answers);
        writeToFile('README.md', generateMarkdown(answers))
    }).catch((error)=>{
        if (error.isTtyError){
            console.log('please input the data');

        }else{
            console.log(`Error: ${error}`);
        }
    })
}

// Function call to initialize app
init();

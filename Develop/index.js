const inquirer = require('inquirer');
const fs = require('fs');

const readMeData = (input) => `
# Project Title
${input.projectTitle}
## Installation
${input.installation}    
## Usage/Examples
${input.usage}
## Contributing
${input.contributing}
## Running Tests
${input.runningTests}
## Feedback
If you have any feedback, please reach out to us at ${input.feedback}
`

inquirer
  .prompt([
    {
      type: 'input',
      name: 'projectTitle',
      message: "What is A brief description of what this project does and who it's for?",
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What packages do you need to install?',
      
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What are some usage examples?',
        
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'How do you contribute to your project?',
        
      },
      {
        type: 'input',
        name: 'runningTests',
        message: 'What command do you run to test?',
        
      },
      {
        type: 'input',
        name: 'feedback',
        message: 'What email address is used for feedback?',
      },
  ])
  .then((input) => {
    const readMe = readMeData(input)
    const filename = `README.md`;

    fs.writeFile(filename, readMe, (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });

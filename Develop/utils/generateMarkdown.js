// TODO: Create a function that returns a license badge based on which license is passed in
const inquirer = require("inquirer");

// If there is no license, return an empty string

function renderLicenseBadge(license) {
  if (license == 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]' 
  }
  else if (license == 'Apache' ){
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]' 
  }
  else if (license == 'GPLv2') {
    return '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)]' 
  }
  else if (license == 'Mozilla Public License 2.0') {
    return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]';
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == 'MIT'){
    return 'https://opensource.org/licenses/MIT';
  } else if (license == 'Apache') {
    return 'https://opensource.org/licenses/Apache-2.0'
  } else if (license == 'GPLv2') {
    return 'https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html'
  } else if (license == 'Mozilla Public License 2.0') {
    return 'https://opensource.org/licenses/MPL-2.0'
  } else {
    return "";
  }
}



// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== undefined) {
    return `## License
    This application is rendered under ${license}`;
  } else { return "" };
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  ${renderLicenseLink(data.license)}
  - [Contributors](#contributors)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ${data.installation}
 
  ## Usage
  ${data.usage}
  ${renderLicenseSection(data.license)}

  ## License
  ${renderLicenseSection(data.license)}

  ## Credits/Contributors
  ${data.contributors}

  ## Tests
  ${data.tests}
`;
}

module.exports = generateMarkdown;

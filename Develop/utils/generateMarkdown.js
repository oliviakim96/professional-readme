// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const licenseToBadgeMap = {
    'MIT License': '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    'GNU GPLv3': '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
    'ISC License': '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)',
    'Unlicensed': '',
  }
  
  return licenseToBadgeMap[license]
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license && license != 'Unlicensed'){
    return `## License
  This project licensed under ${license}.
    ${renderLicenseBadge(license)}`
  } else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const markdown =
`# ${data.title}
${renderLicenseBadge(data.license)}
## Description 

${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)
- [Email](#email)
- [github](#github)

## Installation

${data.installation}

## Usage

${data.usage}

## Contributing

${data.contributionGuidelines}

## Tests

${data.tests}

${renderLicenseSection(data.license)}

## Questions

## Email

${data.email}

## Github 

${data.github}

`;

return markdown;
}

module.exports = generateMarkdown;

// Generates README from string literal with data from inquirer

function generateMarkdown(data) {
  return `
# ${data.title} 

## Summary

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
- [Github](#github)

## Installation

${data.installation}

## Usage

${data.usage}

## Credits

${data.credits}

## License

${data.license}

## Contributing

${data.contributing}

## Tests

${data.tests}

## GitHub Activity

![Site](https://img.shields.io/github/commit-activity/w/${data.github}/${data.title})

## Questions

<img src="${data.image}" alt="user profile picture" width="100" />

Contact Me: ${data.email}

`;
}

module.exports = generateMarkdown;

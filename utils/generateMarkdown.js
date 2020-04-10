function generateMarkdown(data) {
  return `
# ${data.title} ${data.description}

## Table of Contents

- [Installation] (#installation)
- [Usage] (#usage)
- [License] (#license)
- [Contributing] (#contributing)
- [Tests] (#tests)
- [Questions] (#questions)
- [Github] (#github)

## Installation

${data.install}

## Usage

${data.usage}

## License

${data.license}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

<img src="${data.image}" alt="user profile picture" width="100" />

Contact Me: ${data.email}

![coverage](${data.badge})

`;
}

module.exports = generateMarkdown;

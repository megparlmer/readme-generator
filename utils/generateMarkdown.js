const fs = require('fs');
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (data.license === 'BSD') {
    data.licenseBadge = 'BSD';
  }
  if (data.license === 'MIT') {
    data.licenseBadge = 'MIT';
  }
  if (data.license === 'GPL') {
    data.licenseBadge = 'GPL';
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (data.license === 'BSD') {
    data.licenseLink = 'BSD';
  }
  if (data.license === 'MIT') {
    data.licenseLink = 'MIT';
  }
  if (data.license === 'GPL') {
    data.licenseLink = 'GPL';
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (data.license === 'BSD') {
    data.licenseSection = 'BSD';
  }
  if (data.license === 'MIT') {
    data.licenseSection = 'MIT';
  }
  if (data.license === 'GPL') {
    data.licenseSection = 'GPL';
  } else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ##Table of Contents
  - [Lisence](#license)

  ##Description
  ${data.description}

  ##Installation
  ${data.installation}

  ##Usage
  ${data.usage}
`;
}

function writeFile(data) {
  return new Promise((resolve, reject) => {
    fs.writeFile('./index.md', generateMarkdown(data), (err) => {
      if(err) {
        reject(err);
        return;
      }
      resolve({ ok: true, message: 'index.md created'});
    });
  });
};

module.exports = {
  writeFile,
};
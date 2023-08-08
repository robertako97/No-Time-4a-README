let badge = "";
let badgeLink ="";
let licenseSection = "";

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string -> Added unlicensed badge
function renderLicenseBadge(license) {

  if (license === "MIT") {
    badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)\n" +
    "\n" ;
  }

  else if (license === "Mozilla") {
    badge = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)\n" +
        "\n" ;
  }

  else if (license === "Unlicense") {
badge = "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)\n" +
    "\n" ; }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  if (license === "MIT") {
    badgeLink = "(https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)\n" +
        "\n" ;
  }

  else if (license === "Mozilla") {
    badgeLink = "(https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)\n" +
        "\n" ;
  }

  else if (license === "Unlicense") {
    badgeLink = "(https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)\n" +
        "\n" ; }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  if (license === "MIT") {
    licenseSection = "TBD License Section MIT";
  }

  else if (license === "Mozilla") {
    licenseSection = "TBD License Section Mozilla";

  }

  else if (license === "Unlicense") {
    licenseSection = "TBD License Section Unlicense";

  }


}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;

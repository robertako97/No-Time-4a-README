let badge = "";
let badgeLink ="";
let licenseSection = "";

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string -> Added unlicensed badge
function renderLicenseBadge(licenseInput) {

  if (licenseInput === "MIT") {
    badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)\n" +
    "\n" ;
  }

  else if (licenseInput === "Mozilla") {
    badge = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)\n" +
        "\n" ;
  }

  else if (licenseInput === "Unlicense") {
badge = "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)\n" +
    "\n" ; }

  return badge;

}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(licenseInput) {

  if (licenseInput === "MIT") {
    badgeLink = "(https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)\n" +
        "\n" ;
  }

  else if (licenseInput === "Mozilla") {
    badgeLink = "(https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)\n" +
        "\n" ;
  }

  else if (licenseInput === "Unlicense") {
    badgeLink = "(https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)\n" +
        "\n" ; }


  return badgeLink;
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(licenseInput) {

  if (licenseInput === "MIT") {
    licenseSection = "TBD License Section MIT";
  }

  else if (licenseInput === "Mozilla") {
    licenseSection = "TBD License Section Mozilla";

  }

  else if (licenseInput === "Unlicense") {
    licenseSection = "TBD License Section Unlicense";

  }

  return licenseSection;


}


// TODO: Create a function to generate markdown for README

/*
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
*/

module.exports = renderLicenseSection;
module.exports = renderLicenseLink;
module.exports = renderLicenseBadge;
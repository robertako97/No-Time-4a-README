let badge = "";
let badgeLink ="";
let licenseSection = "";

function renderLicenseBadge(licenseInput) {

  if (licenseInput === "Apache License 2.0"){
    badge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)\n" +
        "\n";
  }

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

function renderLicenseLink(licenseInput) {

  if (licenseInput === "Apache License 2.0"){
    badgeLink = "https://www.boost.org/LICENSE_1_0.txt\n";
  }

  if (licenseInput === "MIT") {
    badgeLink = "https://opensource.org/licenses/MIT\n";
  }

  else if (licenseInput === "Mozilla") {
    badgeLink = "https://opensource.org/licenses/MPL-2.0\n";
  }

  else if (licenseInput === "Unlicense") {
    badgeLink = "http://unlicense.org/\n" ;
  }


  return badgeLink;
}

function renderLicenseSection(licenseInput) {

  if (licenseInput==="Apache License 2.0"){
    licenseSection = "TBD License Apache License 2.0"
  }

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
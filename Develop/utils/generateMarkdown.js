let badge = "";

function renderLicenseBadge(licenseInput) {

  if (licenseInput === "Apache License 2.0"){
    badge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)\n\\n";}
  else if (licenseInput === "MIT") {
    badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)\n\n";}
  else if (licenseInput === "Mozilla") {
    badge = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)\n\n";}
  else if (licenseInput === "Unlicense") {
    badge = "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](https://opensource.org/license/unlicense/)\n\n"; }
  else if (licenseInput === "Boost") {
    badge = "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)\n\n";}
  else if (licenseInput === "BSD") {
    badge = "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)\n\n";
  } else if (licenseInput === "BSD 2-Clause License") {
    badge = "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)\n\n";
  } else if (licenseInput === "CC0") {
    badge = "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)\n\n";
  } else if (licenseInput === "Attribution 4.0 International") {
    badge = "[![License: CC BY 4.0](https://img.shields.io/badge/License-CC_BY_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)\n\n";}
    else if (licenseInput === "Attribution-NoDerivatives 4.0 International") {
    badge = "[![License: CC BY-ND 4.0](https://img.shields.io/badge/License-CC_BY--ND_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nd/4.0/)\n\n";
  } else if (licenseInput === "Attribution-NonCommercial-ShareAlike 4.0 International") {
    badge = "[![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC_BY--NC--SA_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-sa/4.0/)\n\n";
  } else if (licenseInput === "Eclipse") {
    badge = "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)\n\n";
  } else if (licenseInput === "GNU GPL v3") {
    badge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)\n\n";}
  return badge;

}


module.exports = renderLicenseBadge;
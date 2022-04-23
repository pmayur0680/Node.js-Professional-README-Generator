// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {  
  switch (license.toLowerCase()) {
    case 'apache 2.0':    
      return '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)';
      break;  
    case 'boost 1.0':    
      return '![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)';
      break; 
    case 'bsd 3-clause':            
      return '![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)';
      break; 
    case 'bsd 2-clause':    
      return '![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)';
      break;                           
    case 'epl 1.0':    
      return '![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)';
      break;        
    case 'gplv3':        
      return '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';
      break;    
    case 'gplv2':    
      return '![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)';
      break;                                                  
    case 'agpl v3':        
      return '![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)';
      break;
    case 'lgpl v3':        
      return '![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)';
      break;                            
    case 'fdl v1.3':        
      return '![License: FDL 1.3](https://img.shields.io/badge/License-FDL_v1.3-blue.svg)';
      break;                            
    case 'ipl 1.0':        
      return '![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)';
      break;                            
    case 'isc':    
      return '![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)';
      break;                                  
    case 'mit':    
      return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
      break;                                  
    case 'mpl 2.0':        
      return '![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)';
      break;                                  
    default:
      return '';
      break;
  }
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // use of object destructuring to get each input in variable
  const { 
    username, 
    emailId,
    projectTitle,
    projectInfo,
    installInfo,
    usageInfo,
    contributionInfo,
    testInfo,
    license
  } = data;   

  const badge = renderLicenseBadge(license);
  
  let fileContent = `# ${projectTitle}
  ${badge}
  ## Description
  ${projectInfo}
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)  
  - [Contributing](#contributing)
  - [Test](#test)  
  - [Questions](#questions)  
  ## Installation
  ${installInfo}
  ## Usage
  ${usageInfo}
  ## License
  ${license}
  ## Contributing
  ${contributionInfo}
  ## Test
  ${testInfo}
  ## Questions
  You can find me on GitHub at <https://github.com/${username}>
  Please reach out to me with any questions and concerns at <${emailId}>`; 
  return fileContent;
}

module.exports = {
  generateMarkdown
};
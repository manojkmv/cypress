const fs = require('fs');
const path = require('path');

const env = {
    "video": true,
    "projectId":"ftk5gk",
    "reporter": "../node_modules/mochawesome/src/mochawesome.js",
    "reporterOptions": {
        "overwrite": false,
        "html": false,
        "json": true
    },
    "env": {
        URL: process.env.URL,
        EMAIL: process.env.EMAIL,
        PASSWORD: process.env.PASSWORD
    }
}


console.log('cypress env');
fs.writeFileSync(path.join(__dirname, '../cypress.json'), JSON.stringify(env));
console.log('cyp env comp');

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
        URL: "https://poachedtest.com/login",
        EMAIL: "posterautomation06+50@gmail.com",
        PASSWORD: "Poached@123"
    }
}


console.log('cypress env');
fs.writeFileSync(path.join(__dirname, '../cypress.json'), JSON.stringify(env));
console.log('cyp env comp');

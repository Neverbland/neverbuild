// Do this as the first thing so that any code reading it knows the right env.
process.env.NODE_ENV = 'production';

const path = require('path');
const fs = require('fs');
const child_process = require('child_process');

const error = "[\x1b[31;1mERROR\x1b[0m]";
const info = "[\x1b[32;1mINFO\x1b[0m]";
const highlight = "\x1b[32m%s\x1b[0m";
const dir = path.resolve(__dirname + '/..');

function run(cmd) {
  console.log(`++ ${cmd}`);
  child_process.execSync(cmd, {
    stdio: [0, 1, 2]
  });
}

console.log(`${info} Setting up in ${highlight}`, dir);

if (process.argv.length > 3) {
  console.error(`${error} Too many arguments, dunno what to do with them`);

  process.exit(1);
}

let projectName = process.argv[2] || path.basename(dir);
if (!projectName.match(/^[a-zA-Z0-9\-_]+$/g)) {
  console.error(`${error} Invalid project name (alphanumerical, dashes and underscores only): ${highlight}`, projectName);

  process.exit(1);
}

console.log(`${info} Project name is ${highlight}`, projectName);

// Fix package.json
console.log(`${info} Updating package.json`);
let data = fs.readFileSync(`${dir}/package.json`);
data = JSON.parse(data);
data.name = projectName;

fs.writeFileSync(`${dir}/package.json`, JSON.stringify(data, null, 2));

// Fix templates
console.log(`${info} Putting templates in place`);
run(`cp -R _templates/. .`);

// Clean up
console.log(`${info} Removing templates, .git and this install script`);
run(`rm -fr _templates .git scripts/install.js`);

// Set up a new git repo
console.log(`${info} Creating new git repository`);
run(`git init`);
run(`git add .gitignore`);
run(`git commit -m "Import .gitignore"`);
run(`git checkout -b develop`);
run(`git add .`);
run(`git commit -m "Import Neverbuild"`);

console.log(``);
console.log(`${info} Project ${highlight} is set up and ready to go.`, projectName);
console.log(`${info} You can run "${highlight}" to get it running now.`, 'npm install && npm start');
console.log(``);
console.log(`${info} You'll want to add the Gitlab remote: ${highlight}`, 'git remote add origin <SSH URL as given on Gitlab>');
console.log(`${info} Before pushing to Gitlab, make sure to set the following variables:`);
console.log(`${info} - ${highlight} (either the shared CI user or your own)`, 'DOCKERCLOUD_USER');
console.log(`${info} - ${highlight} (either the shared CI API key or your own)`, 'DOCKERCLOUD_APIKEY');
console.log(`${info} - ${highlight} (usually ${highlight})`, 'DOCKERCLOUD_NAMESPACE', 'neverbland');
console.log(``);

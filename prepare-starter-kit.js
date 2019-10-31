const { readFileSync, writeFileSync, renameSync } = require('fs');
const path = require('path')

/**
 * @summary Observe the command line args then convert these args into object
 * @param {*} args 
 */
function parseArgs(args) {
    const argsObj = {};
    args.slice(2).forEach(arg => {
        let [key, value] = arg.slice(2).split('=');
        argsObj[key] = value;
    });
    return argsObj;
}


function updatePackageJson(name) {
    writeFileSync('package.json', readFileSync('package.json', { encoding: 'utf-8'}).split('js-lib-starter-kit').join(name));
    writeFileSync('app/index.html', readFileSync('app/index.html', { encoding: 'utf-8'}).replace('js-lib-starter-kit', name))
    renameSync('src/js-lib-starter-kit.ts', `src/${name}.ts`)

}

updatePackageJson(parseArgs(process.argv).name);
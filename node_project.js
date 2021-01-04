// 引入模块
const fs = require('fs');
const readline = require('readline');

const mvc = {
    directories: require('./mvc/directories/directories'),
    files: require('./mvc/files/files')
};

const typescript = {
    directories: require('./typescript/directories/directories'),
    files: require('./typescript/files/files')
};

function makeDirectories(directories, root) {
    return new Promise(resolve => {
        for (let dir of directories) {
            let path = root + '/' + dir;

            fs.mkdirSync(path, { recursive: true }, error => {
                if (error) {
                    console.log(error);
                }
            });
            console.log(path);
        }
        resolve(root);
    });
}

function makeFiles(files, root) {
    return new Promise(resolve => {
        for (let file of files) {
            let path = root + '/' + file.filename;

            fs.writeFile(path, file.content, 'utf8', error => {
                if (error) {
                    console.log(error);
                }
                resolve(root);
            });
            console.log(path);
        }
    });
}

function readSelections() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise(resolve => {
        rl.question('请输入"工程类型|根目录名称"（例如：mvc|./mvc或者ts|./webapp）：', (input_data) => {
            let inputs = input_data.split('|');
            let projectType = inputs[0];
            let rootDirectory = inputs[1];
            let directories = selectDirectoriesAndFilles(projectType).directories;
            let files = selectDirectoriesAndFilles(projectType).files;

            console.log(`工程类型：${projectType}`);
            console.log('根目录名称: %s', rootDirectory);
            rl.close();
            resolve({ rootDirectory, directories, files });
        });
    });
}

function selectDirectoriesAndFilles(projectType) {
    switch (projectType) {
        case 'mvc':
            return mvc;
        case 'ts':
        case 'typescript':
            return typescript;
        default:
            return mvc;
    }
}
const readlineAsync = require("./console");

module.exports =async function createProject(message) {
    //await

    // let projectName = await readlineAsync("请输入名称：");
    // let projectType = await readlineAsync("请输入类型：");

    // console.log("Name: %s, Type: %s", projectName, projectType);

    readSelections()
        .then(returnObj => {
            //console.log(returnObj);
            makeDirectories(returnObj.directories, returnObj.rootDirectory)
                .then((rt) => makeFiles(returnObj.files, rt));
        })
        .then(() => { console.log(message) });
}

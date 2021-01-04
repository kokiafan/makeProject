#!Node

// #!/usr/bin/env node /linux下这样写

const consoleio = require('./lib/console');
const fsio = require('./lib/io');

/**
 * 输入项目类型的字符串，返回项目所需要的文件夹及文件。
 * @param {'ts'|'jsmvc'|'tswebpack'} projectType 用户想要的项目类型。
 * @return { dirs: string[], files: { filename: string, content: string }[] }
 * @author kokiafan
 * @example
 * let projectType = select('ts');
 */
function select(projectType) {
    if (projectType === 'ts') {
        return {
            dirs: require('./data/ts/dirs/dirs'),
            files: require('./data/ts/files/files')
        };
    }

    if (projectType === 'jsmvc') {
        return {
            dirs: require('./data/jsmvc/dirs/dirs'),
            files: require('./data/jsmvc/files/files')
        };
    }

    if (projectType === 'tswebpack') {
        return {
            dirs: require('./data/tswebpack/dirs/dirs'),
            files: require('./data/tswebpack/files/files')
        };
    }

    return null;
}

async function main() {
    let root = await consoleio.readlineAsync("请输入项目根目录：");
    let type = await consoleio.readlineAsync("请输入项目的类型：（选项ts|jsmvc|tswebpack）");
    let projectType = select(type);

    if (projectType === null) {
        console.log("项目类型错误。")
        return;
    }

    fsio.createDirectories(projectType.dirs, root)
        .then(() => fsio.createFiles(projectType.files, root));
}

main();

// 参考资料：https://www.cnblogs.com/qiufang/p/8762299.html
/*
1. 创建一个文件夹(my-cli)。
2. 在当前文件夹打开命令行输入npm init，创建一个package.json，并配置bin字段，配置后才可以在控制台使用你的命令：
"bin": { "my-cli":"./index.js" },
3. 在当前文件夹创建一个index.js，这个文件是你命令行要执行的文件代码：
首行写上#!Node，表示用node来执行这个文件；linux/unix下应该是#!/usr/bin/env node。
4. 全局安装你的包，npm install -g将你当前的项目安装到全局环境，然后你就可以在命令行使用"my-cli"命令了。
5. 使用：再新建一个test文件夹，然后打开命令行窗口，输入my-cli，就会执行工具里的index.js文件，就可以使用这个工具了。
6. 例子：可用来快速生成开发项目目录。
*/

// module.exports =async function createProject(message) {
//     //await

//     // let projectName = await readlineAsync("请输入名称：");
//     // let projectType = await readlineAsync("请输入类型：");

//     // console.log("Name: %s, Type: %s", projectName, projectType);

//     readSelections()
//         .then(returnObj => {
//             //console.log(returnObj);
//             makeDirectories(returnObj.directories, returnObj.rootDirectory)
//                 .then((rt) => makeFiles(returnObj.files, rt));
//         })
//         .then(() => { console.log(message) });
// }

// const createProject = require('./node_project');

// // 程序从此开始运行
// const message = '请到刚创建的工程根目录下运行：npm install 以安装依赖模块。';
// createProject(message);

// const readline = require('./lib/console');

// async function main() {
//     let msg = await readline()

//     console.log("刚刚输入的信息：%s", msg);
// }

// main();


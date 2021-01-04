const fs = require('fs');

/**
 * 传入一个目录名称字符串数组及根目录名称，异步地创建文件夹。
 * @param {string[]} directories 
 * @param {string} root 
 * @author kokiafan
 * @example
 * const io = require('./lib/io');
 * 
 * async function main() {
 *     io.createDirectories(['dist/css', 'src/css', 'src/html'], './myapps')
 *         .then(() => console.log('目录创建完成！'));
 * }
 * 
 * main();
 */
function createDirectories(directories, root) {
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

/**
 * 传入一个目录名称字符串数组及根目录名称，异步地创建文件夹。
 * @param {{filename:string, content: string}[]} files 
 * @param {string} root 
 * @author kokiafan
 * @example
 * const io = require('./lib/io');
 * 
 * const file1 = { filename: 'text1.txt', content: "hello" };
 * const file2 = { filename: 'text2.txt', content: "hello" };
 * 
 * async function main() {
 *     io.createFiles([file1, file2], '.')
 *         .then(() => console.log('文件创建完成！'));
 * }
 * 
 * main();
 */
function createFiles(files, root) {
    return new Promise(resolve => {
        for (let file of files) {
            let path = root + '/' + file.filename;

            fs.writeFile(path, file.content, 'utf8', error => {
                if (error) {
                    console.log(error);
                }
            });
            console.log(path);
        }
        resolve(root);
    });
}

module.exports = {
    createDirectories,
    createFiles
}
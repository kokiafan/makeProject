const readline = require('readline');

/**
 * 提示用户在客户端进行输入。
 * @param {string} prompt 提示用户进行输入时，需要显示的信息。
 * @author kokiafan
 * @example
 * const readline = require('./lib/console');
 * 
 * async function main() {
 *     let msg = await readline("请输入一行文字：");
 *     console.log("刚刚输入的信息：%s", msg);
 * }
 * 
 * main();
 */
function readlineAsync(prompt = "Please enter: ") {

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise(resolve => {
        rl.question(prompt, (data) => {
            rl.close();
            resolve(data);
        })
    });
};

module.exports = { readlineAsync };

// 关于JSDoc的使用：https://www.jianshu.com/p/46519b0499c3
// JSDoc 中文文档：https://www.html.cn/doc/jsdoc/tags-example.html

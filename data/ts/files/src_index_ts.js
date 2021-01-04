// 声明需要被创建的文件及其内容
const src_index_ts = {
    filename: "src/index.ts",
    content:
        `
import * as fs from "fs";

const path = "./message.txt";
const data = "Hello World!";
const encoding = "utf8";

console.log(data);

fs.writeFile(path, data, encoding, error => {
    if (error) {
        console.log(error);
    }
});
`
};

module.exports = src_index_ts;
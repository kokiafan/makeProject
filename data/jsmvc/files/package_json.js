// 声明需要被创建的文件及其内容
const package_json = {
    filename: "package.json",
    content:
`{
  "name": "nodejs",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "test": "echo \\"Error: no test specified\\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
    "dependencies": {
    "express": "^4.17.1"
  }
}`
};

module.exports = package_json;
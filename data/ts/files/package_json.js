// 声明需要被创建的文件及其内容
const package_json = {
    filename: "package.json",
    content:
        `
{
    "name": "ts_app",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
        "start": "npm run build:live",
        "build": "tsc",
        "build:live": "nodemon --watch src/**/*.ts --exec ts-node src/index.ts"
    },
    "keywords": [],
    "author": "",
    "license": "ISC",
    "devDependencies": {
        "@types/node": "^14.14.16",
        "nodemon": "^2.0.6",
        "ts-node": "^9.1.1",
        "typescript": "^4.1.3"
    }
}
`
};

module.exports = package_json;
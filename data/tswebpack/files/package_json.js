// 声明需要被创建的文件及其内容
const package_json = {
    filename: "package.json",
    content:
        `{
  "name": "my-webpack-project",
  "version": "1.0.0",
  "description": "My webpack project",
  "main": "app.js",
  "scripts": {
    "prebuild": "tsc",
    "build": "webpack",
    "liteserver": "lite-server",
    "server": "npm run prebuild_ts & npm run build & npm run liteserver",
    "compile": "tsc ./src/index.ts --outDir ./dist/",
    "runcompile": "node ./dist/index.js"
  },
  "author": "Kokiafan",
  "license": "ISC",
  "devDependencies": {
    "@babel/core": "^7.12.9",
    "@babel/preset-env": "^7.12.7",
    "@webpack-cli/init": "^1.0.3",
    "babel-loader": "^8.2.1",
    "babel-plugin-syntax-dynamic-import": "^6.18.0",
    "html-webpack-plugin": "^4.5.0",
    "lite-server": "^2.6.1",
    "terser-webpack-plugin": "^5.0.3",
    "ts-loader": "^8.0.11",
    "typescript": "^4.1.2",
    "webpack": "^5.6.0",
    "webpack-cli": "^4.2.0"
  }
}`
};

module.exports = package_json;
const package_json = require('./package_json');
const index_js = require('./index_js');

// 需要被创建的文件
const files = [
    { filename: package_json.filename, content: package_json.content },
    { filename: index_js.filename, content: index_js.content }
];

module.exports = files;
const package_json = require('./package_json');
const tsconfig_json = require('./tsconfig_json');
const index_ts = require('./src_index_ts');

// 需要被创建的文件
const files = [
    { filename: package_json.filename, content: package_json.content },
    { filename: tsconfig_json.filename, content: tsconfig_json.content },
    { filename: index_ts.filename, content: index_ts.content }
];

module.exports = files;
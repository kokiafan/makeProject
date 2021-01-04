const package_json = require('./package_json');
const tsconfig_json = require('./tsconfig_json');
const webpack_config_js = require('./webpack_config_js');
const bs_config_json = require('./bs_config_json');
const babelrc = require('./babelrc');
const tasks_json = require('./vscode_tasks_json');
const launch_json = require('./vscode_launch_json');
const src_css_banner_css = require('./src_css_banner_css');
const src_index_html = require('./src_html_index_html');
// const app_ts = require('./src_ts_app_ts');
// const sum_ts = require('./src_ts_sum_ts');
// const helloworld_ts = require('./src_ts_helloworld_ts');
const src_ts_slider = require('./src_ts_slider_ts');
const src_ts_index = require('./src_ts_index_ts');
const dist_css_banner_css = require('./dist_css_banner_css');

// 需要被创建的文件
const files = [
    { filename: package_json.filename, content: package_json.content },
    { filename: tsconfig_json.filename, content: tsconfig_json.content },
    { filename: webpack_config_js.filename, content: webpack_config_js.content },
    { filename: bs_config_json.filename, content: bs_config_json.content },
    { filename: babelrc.filename, content: babelrc.content },
    { filename: tasks_json.filename, content: tasks_json.content },
    { filename: launch_json.filename, content: launch_json.content },
    { filename: src_css_banner_css.filename, content: src_css_banner_css.content },
    { filename: src_index_html.filename, content: src_index_html.content },
    // { filename: app_ts.filename, content: app_ts.content },
    // { filename: sum_ts.filename, content: sum_ts.content },
    // { filename: helloworld_ts.filename, content: helloworld_ts.content },
    { filename: src_ts_slider.filename, content: src_ts_slider.content },
    { filename: src_ts_index.filename, content: src_ts_index.content },
    { filename: dist_css_banner_css.filename, content: dist_css_banner_css.content },
];

module.exports = files;
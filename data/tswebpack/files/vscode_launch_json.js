const launch_json = {
    filename: ".vscode/launch.json",
    content: `
{
    // Use IntelliSense to learn about possible attributes.
    // Hover to view descriptions of existing attributes.
    // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
    // 每个启动配置都必须具有以下属性：
    // type：               用于启动配置的调试器类型。node是内置的JavaScript和TypeScript调试器。
    // request：            用于配置启动配置的请求类型，支持launch和attache两种。
    // name：               启动项名称，显示在“调试启动配置”下拉列表中。
    // program：            启动调试器时要运行的文件。
    //
    // 用到的预定义变量：
    // \${workspaceFolder}： 在VSCode中打开的文件夹的路径。
    // \${workspaceRoot}：   当前打开的文件夹的绝对路径+文件夹的名字。（已被弃用）
    // \${file}：            当前打开的文件。
    //
    // 启动配置的以下可选属性：
    // preLaunchTask：      要在调试会话开始之前启动任务，请将此属性设置为tasks.json中指定的任务名称。tasks.json文件放在.vscode文件夹中。
    // cwd：                当前工作目录，用于查找依赖项和其他文件。
    // env：                环境变量（该值null可用于“取消定义”变量）。
    //
    // 调试器支持的某些属性：
    // stopOnEntry：        程序启动时立即中断。
    // console：            要使用什么样的Console，有internalConsole、integratedTerminal和externalTerminal三种选项。
    // sourceMaps：         使用JavaScript source map，若存在。
    // 
    // 参考资料：
    // TypeScript实战165页
    //
    // 理解注释：
    // preLaunchTask：      launch.json中的preLaunchTask配置的任务名实际上就是task.json文件的任务标签名（label）。
    //                      其中，task.json的脚本（script）配置为prebuild_ts，这个时在package.json里定义的。
    // launch.json  (preLaunchTask->build_ts) -> 
    // tasks.json   (build_ts->label->script->prebuild_ts) ->
    // package.json (prebuild_ts->scripts->tsc) -> 
    // tsc ->       (如果一个目录里存在一个tsconfig.json文件，就意味着这个目录是TypeScript项目的根目录。在不带任何输入文件的情况下调用命令tsc，编译器会从当前目录开始去查找tsconfig.json文件，如果没有就逐级向上搜索上级目录。)
    // tsconfig.json
    "version": "0.2.0",
    "configurations": [
        {
            "type": "node",
            "request": "launch",
            "name": "启动程序",
            //"program": "\${workspaceFolder}/dist/app.js",
            "cwd": "\${workspaceFolder}",
            "stopOnEntry": false,
            "preLaunchTask": "buildPackRunServer",
            "env": {
                "NODE_ENV": "development"
            },
            "console": "internalConsole",
            "sourceMaps": true
        },
        //{
        //    "type": "node",
        //    "request": "launch",
        //    "name": "运行HelloWorld",
        //    "program": "\${workspaceFolder}/dist/helloWorld.js",
        //    "cwd": "\${workspaceFolder}"
        //},
        //{
        //    "name": "打开页面",
        //    "request": "launch",
        //    "type": "pwa-chrome",
        //    "file": "\${workspaceFolder}/dist/index.html",
        //    //"url": "http://localhost:8080",
        //    "webRoot": "\${workspaceFolder}",
        //    //"program": "\${workspaceFolder}/dist/index.html",
        //    "cwd": "\${workspaceFolder}",
        //    "preLaunchTask": "buildAndPack",
        //    "runtimeExecutable": "C:\\\\Program Files (x86)\\\\Microsoft\\\\Edge\\\\Application\\\\msedge.exe"
        //},
    ],
    //"compounds": [
    //    {
    //        "name": "全部运行",
    //        "configurations": [
    //            "启动程序",
    //            "运行HelloWorld"
    //        ] //,
    //        //"preLaunchTask": "build_ts"
    //    }
    //]
}
    `
}

module.exports = launch_json;
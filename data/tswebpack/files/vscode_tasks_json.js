const vscode_tasks_json = {
    filename: '.vscode/tasks.json',
    content: `
{
	"version": "2.0.0",
	"tasks": [
		{
			"type": "npm",
			"script": "prebuild_ts",
			"label": "build_ts"
		},
		{
			"type": "npm",
			"script":"build",
			"label": "buildAndPack",
			"dependsOn": [
				"build_ts"
			]
		},
		{
			"type": "npm",
			"script": "liteserver",
			"label": "buildPackRunServer",
			"dependsOn": [
				"buildAndPack"
			]
		}
	]
}
// 定义了一个type为npm，script为prebuild_ts的任务。这个任务可以用npm run prebuild_ts运行。
// label是给launch.json的preLaunchTask小节使用的。
// script对应的时package.json里的script小节的prebuild_ts脚本。
`
};

module.exports = vscode_tasks_json;
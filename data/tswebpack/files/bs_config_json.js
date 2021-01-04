const bs_config_json = {
    filename: 'bs-config.json',
    content: `
{
    "port": 8000,
    "files": [
        "./dist/**/*.{html,htm,css,js}"
    ],
    "server": {
        "baseDir": "./dist"
    }
}
`
};

module.exports = bs_config_json
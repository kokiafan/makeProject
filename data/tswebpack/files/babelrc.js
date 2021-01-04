const babelrc = {
    filename: '.babelrc',
    content: `
{
    "plugins": ["syntax-dynamic-import"],
    "presets": [
        [
            "@babel/preset-env",
            {
                "modules": false
            }
        ]
    ]
}
`
};

module.exports = babelrc;

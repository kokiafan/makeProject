const index_js = {
    filename: "index.js",
    content:
`
const express = require('express');
const app = express();

const port = process.env.port || 3000;

app.get('/', (request, response) => {
    response.send('Hello World');
});

app.listen(port, () => {
    console.log(\`Express web app available at localhost: \${port}\`);
});`
}

module.exports = index_js;
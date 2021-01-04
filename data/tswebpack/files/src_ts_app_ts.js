const src_app_ts = {
    filename: 'src/ts/app.ts',
    content: `
import * as oo from './sum';

let ret = oo.sum(1, 2)

document.getElementById("root").innerHTML = "sum(1, 2)=" + ret;

function hello(msg: string) {
    let ret = "Hello " + msg;
    console.log(ret);
}

hello("typescript")
`
};

module.exports = src_app_ts;

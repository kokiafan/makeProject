const src_helloworld_ts = {
    filename: 'src/ts/helloWorld.ts',
    content: `
function helloWorld(message: string): void {
    console.log(message);
}

helloWorld("嘿嘿嘿");
`
};

module.exports = src_helloworld_ts;

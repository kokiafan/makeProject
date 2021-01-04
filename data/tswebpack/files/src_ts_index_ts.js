const src_ts_index_ts = {
    filename: 'src/ts/index.ts',
    content: `
import { Slider, Slide } from './Slider';
//import "../src/css/banner.css"

const id = 'banner';

let html = window.document.getElementById(id);

const slides: Slide[] = [
    { Url: 'https://www.runoob.com/wp-content/uploads/2014/07/slide1.png', Href: 'http://www.baidu.com/', Target: '_blank' },
    { Url: 'https://www.runoob.com/wp-content/uploads/2014/07/slide2.png', Href: 'http://www.taobao.com/', Target: '_blank' },
    { Url: 'https://www.runoob.com/wp-content/uploads/2014/07/slide3.png', Href: 'http://www.jd.com/', Target: '_blank' },
];

const model = new Slider(slides)
    .SetRenderFunction((e: Slide) => {
        html.innerHTML = \`<a class="text-center" href='\${window['model'].Active().Href}' target='\${window['model'].Active().Target}'> <img src='\${window['model'].Active().Url}'/></a>\`;
    })
    .SetLoopIntervals(3000);

window['model'] = model;

model.Play();

`
};

module.exports = src_ts_index_ts;
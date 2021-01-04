const src_ts_slider_ts = {
    filename: 'src/ts/Slider.ts',
    content: `
class Slide {
    public Url: string = '';
    public Href: string = '';
    public Target: '_blank' | '_self' | '_parent' | '_top';
}

class Slider {
    protected intervals = 1000;
    protected current = 0;
    protected Slides: Slide[];
    protected timerId: any;
    protected fn = (slide: Slide) => { JSON.stringify(this.Slides[this.current]) };

    constructor(slide: Slide | Slide[]) {
        if (slide instanceof Slide) {
            this.Slides = [slide];
        } else if (Array.isArray(slide)) {
            this.Slides = [...slide];
        }
        return this;
    }

    public Play() {
        this.Show();
        this.timerId = setInterval(() => {
            this.Next();
        }, this.intervals);
    }

    public Stop() {
        if (this.timerId) {
            clearInterval(this.timerId);
        }
    }

    public Next() {
        this.current = (this.current + 1) % this.Slides.length;
        this.Show();
    }

    public Previous() {
        this.current = (this.Slides.length + this.current - 1) % this.Slides.length;
        this.Show();
    }

    public Show() {
        this.fn(this.Active());
    }

    public Active(): Slide {
        return this.Slides[this.current];
    }

    public SetRenderFunction(fn: (slide: Slide) => void) {
        this.fn = fn;
        return this;
    }

    public SetLoopIntervals(intervals: number) {
        this.intervals = intervals;
        return this;
    }
}

export { Slide, Slider }

`
};

module.exports = src_ts_slider_ts;
const dist_css_banner_css = {
    filename: 'dist/css/banner.css',
    content: `
.banner-container {
    position: relative;
}

.banner-control-prev, .banner-control-next {
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: 1;
    display: flex;
    align-items: center;
    width: 15%;
    justify-content: center;
    text-align: center;
}

.banner-control-prev {
    left: 0;
}

.banner-control-next {
    right: 0;
}

.banner-control-prev-icon, .banner-control-next-icon {
    display: inline-block;
    width: 20px;
    height: 20px;
    background: no-repeat 50% / 100% 100%;
}

.banner-control-prev-icon {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3e%3cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3e%3c/svg%3e");
}

.banner-control-next-icon {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3e%3cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3e%3c/svg%3e");
}

.banner-inner {
    position: relative;
    width: 100%;
    overflow: hidden;
}

.banner-inner img {
    width: 100%;
    height: 100%;
}
`
};

module.exports = dist_css_banner_css;

const dist_index_html = {
    filename: 'src/html/index.html',
    content: `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.staticfile.org/twitter-bootstrap/3.3.7/css/bootstrap.min.css">
    <script src="https://cdn.staticfile.org/jquery/2.1.1/jquery.min.js"></script>
    <script src="https://cdn.staticfile.org/twitter-bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <title>Document</title>
    <link rel="stylesheet" type="text/css" href="./css/banner.css" />
</head>

<body>
    <nav class="navbar navbar-default" role="navigation">
        <div class="container-fluid">
            <div class="navbar-header">
                <a class="navbar-brand" href="#">菜鸟教程</a>
            </div>
            <div>
                <ul class="nav navbar-nav">
                    <li><a href="#part1">首页</a></li>
                    <li><a href="#part2">产品</a></li>
                    <li><a href="#part3">简介</a></li>
                    <li><a href="#part4">关于</a></li>
                </ul>
            </div>
        </div>
    </nav>

    <div class="container">
        <div class="row">
            <div class="banner-container">
                <div id='banner' class="banner-inner"></div>
                <a class="banner-control-prev" id="prev" onclick="window.model.Previous()">
                    <span class="banner-control-prev-icon"></span>
                </a>
                <a class="banner-control-next" id="next" onclick="window.model.Next()">
                    <span class="banner-control-next-icon"></span>
                </a>
            </div>
            <a name="part1">Part1</a>
            <p>One</p>
            <a name="part2">Part2</a>
            <p>Two</p>
            <a name="part3">Part3</a>
            <p>Three</p>
            <a name="part4">Part4</a>
            <p>Four</p>
        </div>
    </div>
    <script src="bundle.js"></script>
</body>

</html>
`
};

module.exports = dist_index_html;
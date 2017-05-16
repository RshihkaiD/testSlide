/**
 * Created by litv-frontend on 2017/5/16.
 */

var TestSlide = new (function () {
    var gaName = '';
    var includeGa = function () {
        (function (i, s, o, g, r, a, m) {
            i['GoogleAnalyticsObject'] = r;
            i[r] = i[r] || function () {
                    (i[r].q = i[r].q || []).push(arguments)
                }, i[r].l = 1 * new Date();
            a = s.createElement(o),
                m = s.getElementsByTagName(o)[0];
            a.async = 1;
            a.src = g;
            m.parentNode.insertBefore(a, m)
        })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

        ga('create', gaName, 'auto');
        ga('send', 'pageview');
    }
    this.slideInit = function (param) {
        if(param.gaSet){
            gaName = param.gaSet;
            includeGa();
        }

    }
})();

var SendParam = {
    dom: '[data-slide-block]',
    speed: 5000,
    gaSet: 'UA-97482190-1',
    slideType:"A",
    autoPlay:true
};


TestSlide.slideInit(SendParam);
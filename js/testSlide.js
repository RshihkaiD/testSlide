/**
 * Created by litv-frontend on 2017/5/16.
 */

var TestSlide = new (function () {
    this.slideInit = function (param) {

    }
})();

var SendParam = {
    dom: '[data-slide-block]',
    speed: 5000,
    data: {
        file: 'data.json',
        type:'file'// is file || Json string || Json Object
    },
    gaName:''
};
TestSlide.slideInit();
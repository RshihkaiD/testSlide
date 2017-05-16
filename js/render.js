/**
 * Created by litv-frontend on 2017/5/16.
 */
var getData = function (s) {
    $.get('data.json', function (reuslt) {
        if (typeof s == 'function') {
            s(reuslt);
        }
    }).fail(function () {
        console.log('getData is error.');
    })
};
getData(function (param) {
    var getImageDate = function (type) {
        var appendArray = [];
        for (var i = 0; i < param.data.length; i++) {
            var d =  param.data[i];
            var newObj = {
                image: null,
                link: null,
                target: null,
                description: null
            };
            newObj.link = d.action.open_url;
            newObj.description = d.description;
            newObj.target = d.action.open_target;
            newObj.image = 'https://cdnstatic-staging.svc.litv.tv/' + d.picture;
            appendArray.push(newObj);
        }
        return appendArray;
    };
    var basicViewsRender = new Vue({
        el: '#renderView',
        data: {
            slideData: getImageDate()
        },
        methods:{
            nextBtn:function (event) {
                event.preventDefault();
            },
            prevBtn:function (event) {
                event.preventDefault();
            }
        }
    });
});


// var basicViewRender = new Vue({
//     el: "#renderView",
//     data:{
//     }
// });
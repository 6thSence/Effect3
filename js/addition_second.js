function two(a) {
    return (9 < a ? "" : "0") + a
}
$.widget("ui.timespinner", $.ui.spinner, {
    options: {
        step: 60 * 1000,
        page: 60
    },
    _parse: function(a) {
        if ("string" === typeof a) {
            if (Number(a) == a) return Number(a);
            a = a.match(/\d+/g);
            (!a || 2 > a.length) && (a = [0, 0]);
            a[0] *= 36E5;
            a[1] *= 6E4;
            return a[0] + a[1]
        }
        return a
    },
    _format: function(a) {
        a /= 6E4;
        var hours = a / 60 | 0;
        a %= 60;
        return two(hours) + ":" + two(a)
    }
});
$(function() {
    $(".spinner").timespinner({
        min: 28800000,
        max: 864E5
    });
    $(".spinner").timespinner("value", 28800000)
});


$('.raiting').rating({
    fx: 'full',
    image: 'img/stars.png',
    loader: 'img/ajax-loader.gif',
    width: 28,
    titles:['','',''],

});

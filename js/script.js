/* Author: J.Kim

*/

$(document).ready(function() {
    var FullscreenrOptions = {  width: 1200, height: 802, bgID: '#bgimg' };
    $.fn.fullscreenr(FullscreenrOptions);
    $('body').height($(window).height());
});

$(window).resize(function() {
    $('body').height($(window).height());
});



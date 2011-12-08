/* Author: J.Kim

*/

$(document).ready(function() {
    if($('#bgimg').length) {
        var width = $('#width').val();
        var height = $('#height').val();
        var FullscreenrOptions = {  width: width, height: height, bgID: '#bgimg' };
        $.fn.fullscreenr(FullscreenrOptions);
        $('body').height($(window).height());
    }
});

$(window).resize(function() {
    $('body').height($(window).height());
});



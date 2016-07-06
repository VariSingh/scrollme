/**
 * Created by cl-macmini-05 on 07/06/16.
 */


//reverse scroll
var winHeight = $(window).innerHeight();
$(document).ready(function() {
    $(".panel").height(winHeight);
    $("body").height(winHeight * $(".panel").length);
});

window.addEventListener('resize', function(event) {
    $(".panel").height($(window).innerHeight());
});
$(window).on('scroll', function() {
    $(".panelCon").css('bottom', $(window).scrollTop() * -1);
});





//scroll magic

var controller = new ScrollMagic.Controller();

// build scene
var scene = new ScrollMagic.Scene({
        offset: 500, //start scaling when scroll reach this offset
        duration: 300
    })
    .setTween("#rocket", 0.5, { scale: 0.2 }) // trigger a TweenMax.to tween
    .addIndicators({ name: "1 (duration: 0)" }) // add indicators (requires plugin)
    .addTo(controller);

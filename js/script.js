/**
 * Created by cl-macmini-05 on 07/06/16.
 */


//reverse scroll
var winHeight = $(window).innerHeight();
$(document).ready(function () {
    $(".panel").height(winHeight);
    $("body").height(winHeight*$(".panel").length);
});

window.addEventListener('resize', function (event) {
    $(".panel").height($(window).innerHeight());
});
$(window).on('scroll',function(){
    $(".panelCon").css('bottom',$(window).scrollTop()*-1);
});



//scrollmagic



//rocket flight path

var flightpath = {
    entry : {
        curviness: 1.25,
        autoRotate: true,
        values: [
            {x: 100,	y: -20},
            {x: 300,	y: 10}
        ]
    },
    looping : {
        curviness: 1.25,
        autoRotate: true,
        values: [
            {x: 510,	y: 60},
            {x: 620,	y: -60},
            {x: 500,	y: -100},
            {x: 380,	y: 20},
            {x: 500,	y: 60},
            {x: 580,	y: 20},
            {x: 620,	y: 15}
        ]
    },
    leave : {
        curviness: 1.25,
        autoRotate: true,
        values: [
            {x: 660,	y: 20},
            {x: 800,	y: 130},
            {x: $(window).width() + 300,	y: -100},
        ]
    }
};



// YoYo Animation Setup
// .to(@target, @length, @object)
/*var yoyo_tween = TweenMax.to('#character', 1, {
    transform: 'scale(2)',
    ease: Cubic.easeOut,
    repeat: -1, // this negative value repeats the animation
    yoyo: false // make it bounce…yo!
});*/



 // init controller
 var controller = new ScrollMagic.Controller();

 // create a scene
 new ScrollMagic.Scene({
 duration: winHeight,    // the scene should last for a scroll distance equal to window height
 offset: 50        // start this scene after scrolling from 0px e.g. as soon as scrolling start
 })
 .setPin("#character") // pins the element for the the scene's duration
 .addIndicators({name: "1 (duration: "+winHeight+")"})
 .addTo(controller); // assign the scene to the controller


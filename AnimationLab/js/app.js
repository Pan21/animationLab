
var boxhover = function(box) {
    var animation = TweenLite.to(box, 0.3,  {
        backgroundColor : "#31B404",
        ease : Linear.easeNone,
        scale:1.5,

    paused: true
    });
    return animation;
};

[].forEach.call(document.querySelectorAll(".box"), function (element) { 
          
        element.animation = boxhover(element);
        element.addEventListener("mouseenter", function () {
            
          element.animation.play();
        });
        element.addEventListener("mouseleave", function () {
            element.animation.reverse();
        });  
});


function box1(){
    TweenMax.fromTo(".box2", 3, {opacity: 1, x: 0}, {opacity: 0, x: 100});
    TweenMax.fromTo(".box3", 3, {opacity: 1, x: 0}, {opacity: 0, x: 100});
    TweenMax.fromTo(".bottomcontain", 3, {opacity: 1, y: 0}, {opacity: 0, y: 100});
}
function box2(){
    TweenMax.fromTo(".box1", 3, {opacity: 1, x: 0}, {opacity: 0, x: -100});
    TweenMax.fromTo(".box3", 3, {opacity: 1, x: 0}, {opacity: 0, x: 100});
    TweenMax.fromTo(".bottomcontain", 3, {opacity: 1, y: 0}, {opacity: 0, y: 100});
}

function box3(){
    TweenMax.fromTo(".box2", 3, {opacity: 1, x: 0}, {opacity: 0, x: 100});
    TweenMax.fromTo(".box1", 3, {opacity: 1, x: 0}, {opacity: 0, x: 100});
    TweenMax.fromTo(".bottomcontain", 3, {opacity: 1, y: 0}, {opacity: 0, y: 100});
}

function box4(){
    TweenMax.fromTo(".box5", 3, {opacity: 1, x: 0}, {opacity: 0, x: 100});
    TweenMax.fromTo(".box6", 3, {opacity: 1, x: 0}, {opacity: 0, x: 100});
    TweenMax.fromTo(".topcontain", 3, {opacity: 1, y: 0}, {opacity: 0, y: -100});
}

function box5(){
    TweenMax.fromTo(".box4", 3, {opacity: 1, x: 0}, {opacity: 0, x: -100});
    TweenMax.fromTo(".box6", 3, {opacity: 1, x: 0}, {opacity: 0, x: 100});
    TweenMax.fromTo(".topcontain", 3, {opacity: 1, y: 0}, {opacity: 0, y: -100});
}

function box6(){
    TweenMax.fromTo(".box5", 3, {opacity: 1, x: 0}, {opacity: 0, x: -100});
    TweenMax.fromTo(".box4", 3, {opacity: 1, x: 0}, {opacity: 0, x: -100});
    TweenMax.fromTo(".topcontain", 3, {opacity: 1, y: 0}, {opacity: 0, y: -100});
}


TweenMax.fromTo("body", 2, {opacity: 0, y: 50}, {opacity: 1, y: 0});
TweenMax.fromTo(".head", 4, {opacity: 0, y: 50}, {opacity: 1, y: 0});
TweenMax.fromTo(".spacer", 5, {opacity: 0, y: 50}, {opacity: 1, y: 0});
TweenMax.fromTo(".contain", 5.5, {opacity: 0, y: 50}, {opacity: 1, y: 0});
TweenMax.fromTo(".topcontain", 6, {opacity: 0, x: -200}, {opacity: 1, x: 0});
TweenMax.fromTo(".bottomcontain", 6, {opacity: 0, x: 200}, {opacity: 1, x: 0});
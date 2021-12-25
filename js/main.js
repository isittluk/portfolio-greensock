/** cursor animation */
// let cursor = $(".cursor");
// follower = $(".cursor-follower");

// var posX = 0,
//     posY = 0;

// var mouseX = 0,
//     mouseY = 0;

// TweenMax.to({}, 0.016, {
//   repeat: -1,
//   onRepeat: function() {
//     posX += (mouseX - posX) / 8;
//     posY += (mouseY - posY) / 8;

//     TweenMax.set(follower, {
//         css: {
//         left: posX - 12,
//         top: posY - 12
//         }
//     });

//     TweenMax.set(cursor, {
//         css: {
//         left: mouseX,
//         top: mouseY
//         }
//     });
//   }
// });

// $(document).on("mousemove", function(e) {
//     mouseX = e.clientX;
//     mouseY = e.clientY;
// });



/////////////
ScrollTrigger.create({
    start: 'top -80',
    end: 99999,
    toggleClass: {className: 'nav-extended', targets: '.nav'}
});

  

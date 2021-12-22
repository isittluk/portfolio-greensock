console.log("hello");
// let tl = gsap.timeline({repeat:0});

// tl.to('.title-stagger', {
//     opacity:1,
//     transform: 'translateY(0px)', 
//     duration: .75, 
//     stagger: .333,
//     ease: "power3.out"
// });

// tl.to('.h2-color', {
//     delay: .75,
//     opacity: 1,
//     transform: 'translateY(0px)',
//     color: "#1B5DF9",
//     duration: .666,
//     ease: "power3.out"
// });

// /** cursor animation */
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
// // yellow circle
// $(".link").on("mouseenter", function() {
//     cursor.addClass("active");
//     follower.addClass("active");
// });
// $(".link").on("mouseleave", function() {
//     cursor.removeClass("active");
//     follower.removeClass("active");
// });



// // scroll to fade in
// const containers = gsap.utils.toArray('.cs-container')
  
//   containers.forEach((containers, i) => {
      
//       gsap.timeline({
//       scrollTrigger: {
//         trigger: containers,
//         start: 'top bottom',
//         pinnedContainer: '#et-main-area',
//         markers: true,
//         toggleActions: "play complete complete reset",
//         fastScrollEnd: true,
//       },
//       // defaults: {ease: "none"}
//     }).from(containers, {duration: 1, autoAlpha: 0, y: 50})
//   })


  /////////////////////////////////////////
  var timeline = gsap.timeline();


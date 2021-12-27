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



//// nav animation on scroll ////
// ScrollTrigger.create({
//     start: 'top -80',
//     end: 99999,
//     toggleClass: {className: 'nav-extended', targets: '.nav'}
// });

//// hero h1 anim on load ////
// gsap.from(".anim-revealUp", {
//     delay: 0.5,
//     opacity: 0,
//     y: 50,
//     ease: "power2",
//     duration: 1,
// });



// // test
// gsap.from(".anim-onLoad", {
//     delay: 0.5,
//     opacity: 0,
//     y: 50
// });

let tl = gsap.timeline();
const revealUp = gsap.utils.toArray(".anim-revealUp");
revealUp.forEach(anim => {
    gsap.from(anim, {
        opacity: 0,
        y: 50,
        ease: "power2",
        duration: 0.75,
        scrollTrigger: {
            trigger: anim,
            start: "top top+=300",
            end: "top top",
            toggleActions: "play none none reverse",
            markers: true
        }
    })
});



// tl.from(".anim-revealUp", {
//     delay: 0.5,
//     opacity: 0,
//     y: 50,
//     scrollTrigger: {
//         trigger: "section",
//         markers: true
//     }
// })

gsap.to(".square", {
    x:500,
    opacity: 0,
    scrollTrigger: {
        trigger: ".square2",
        start: "top bottom",
        end: "top center",
        scrub: true,

}})



// momentum scrolling
// console.clear();

// gsap.registerPlugin(ScrollTrigger);

// var container = document.querySelector("#scroll-container");

// var height = container.clientHeight;
// document.body.style.height = height + "px";

// gsap.to(container, {
//   y: -(height - document.documentElement.clientHeight),
//   scrollTrigger: {
//     trigger: document.body,
//     start: "top top",
//     end: "bottom bottom",
//     scrub: 1
//   }
// });



  

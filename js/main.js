// resets view to top of window
$(document).ready(function(){
    $(this).scrollTop(0);
});

/** cursor animation */
let cursor = $(".cursor");
follower = $(".cursor-follower");

var posX = 0,
    posY = 0;

var mouseX = 0,
    mouseY = 0;

TweenMax.to({}, 0.016, {
  repeat: -1,
  onRepeat: function() {
    posX += (mouseX - posX) / 8;
    posY += (mouseY - posY) / 8;

    TweenMax.set(follower, {
        css: {
        left: posX - 12,
        top: posY - 12
        }
    });

    TweenMax.set(cursor, {
        css: {
        left: mouseX,
        top: mouseY
        }
    });
  }
});

$(document).on("mousemove", function(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

// text animation
const animText = gsap.utils.toArray(".anim-textFancy");
function setupSplits() {
    animText.forEach(quote => {
      // Reset if needed
      if(quote.anim) {
        quote.anim.progress(1).kill();
        quote.split.revert();
      }
  
      quote.split = new SplitText(quote, { 
        type: "lines,words,chars",
        linesClass: "split-line"
      });
  
      // Set up the anim
      quote.anim = gsap.from(quote.split.chars, {
        scrollTrigger: {
          trigger: quote,
          toggleActions: "restart pause resume reverse",
          start: "top 50%",
        },
        delay: 0.5,
        duration: 0.6, 
        ease: "circ.out", 
        y: 80, 
        stagger: 0.02,
      });
    });
  }
  
  ScrollTrigger.addEventListener("refresh", setupSplits);
  setupSplits();


// nav animation on scroll ////
// ScrollTrigger.create({
//     start: 'top -80',
//     end: 99999,
//     toggleClass: {className: 'nav-extended', targets: '.nav'}
// });

// animation revealUp

let tl = gsap.timeline();
const revealUp = gsap.utils.toArray(".anim-revealUp");
const fadeOut = gsap.utils.toArray(".anim-fadeOut");

revealUp.forEach(anim => {
    gsap.from(anim, {
        opacity: 0,
        y: 50,
        ease: "power2",
        duration: 0.75,
        scrollTrigger: {
            trigger: anim,
            start: "top top+=500",
            end: "top top",
            toggleActions: "play none none reverse",
        }
    })
});
gsap.set(".anim-t-revealUp", {opacity:0});
ScrollTrigger.batch(".anim-t-revealUp", {
    delay: 1,
    interval: 0.1, // time window (in seconds) for batching to occur. 
    batchMax: 3,   // maximum batch size (targets). Can be function-based for dynamic values
    onEnter: batch => gsap.to(batch, {opacity: 1, y: -50, stagger: {each: 0.15, grid: [1, 3]}, overwrite: true}),
    // onLeave: batch => gsap.set(batch, {opacity: 0, y: -100, overwrite: true}),
    // onEnterBack: batch => gsap.to(batch, {opacity: 1, y: 0, stagger: 0.15, overwrite: true}),
    // onLeaveBack: batch => gsap.set(batch, {opacity: 0, y: 100, overwrite: true}),
    // you can also define most normal ScrollTrigger values like start, end, etc.
    start: "top top+=750",
  });

  tl.from(".anim-revealUp", {
    delay: 0.5,
    opacity: 0,
    y: 50,
})







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



  

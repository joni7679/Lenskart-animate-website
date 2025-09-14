// Initialize Lenis
const lenis = new Lenis();

// Listen for the scroll event and log the event data
lenis.on('scroll', (e) => {
    console.log(e);
});

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
let tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#superman",
        start: "top top",
        end: "200% bottom",
        pin: true,
        scrub: 2,
        markers: true,
    }
});

tl.to(".superman-video-box", {
    top: "50%",
    ease: "power1.out",
});

tl.to(".superman-video-box", {
    width: "40%",
    height: "30vh",
    borderRadius: "20px",
    left: "50%",
    xPercent: -50,
    yPercent: -50,
    ease: "power2.out",
});
tl.to(".superman-video-box", {
    top: "80%",
    width: "90%",
    height: "70vh",
    borderRadius: "40px",
    left: "50%",
    xPercent: -50,
    yPercent: -50,
    ease: "power2.out",
});


let supermanVideoBox = document.querySelector(".superman-video-box");
let supermanSection = document.querySelector("#superman");

supermanSection.addEventListener("mousemove", (e) => {
    let rect = supermanVideoBox.getBoundingClientRect();
   console.log(e);
   
});

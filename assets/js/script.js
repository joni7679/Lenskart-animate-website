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
gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#superman",
        start: "top top",
        end: "200% bottom",
        pin: true,
        scrub: 2,
        // markers: true,
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
    console.log(e.clientX);
    console.log(e.clientY);



});

gsap.to(".img-box", {
    width: "100%",
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".shop-section",
        start: "top top",
        end: "200% bottom",
        pin: true,
        scrub: 2,
        // markers: true,
    }
});
function ourProductsSection() {
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".our-products-section",
            start: "top top",
            end: "200% bottom",
            pin: true,
            scrub: 2,
            // markers: true,
        }
    }, "a")

    tl.to(".product-des", {
        top: "30%",
        opacity: "0",
        ease: "power2.out",

    })
    tl.to(".product", {
        top: "30%",
        width: "50%",
        xPercent: 50,
        ease: "power2.out",
    }, "a=-0.4")




}
ourProductsSection();
function lenskartCollectionAnimation() {
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".lenskart-collection",
            start: "top top",
            end: "200% bottom",
            pin: true,
            scrub: 1.5,
            markers: true,
        }
    });
    tl.to(".collection-part", {
        width: "100%",
        height: "100vh",
        ease: "power2.out",
        backgroundColor: "red",
    });
}
lenskartCollectionAnimation();
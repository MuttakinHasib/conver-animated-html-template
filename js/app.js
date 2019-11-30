const tl = new TimelineMax();
const li = document.querySelectorAll("ul li");
const title = document.querySelector(".hero-description h1");
const buttons = document.querySelectorAll(".buttons a");
const quote = document.querySelector(".quote");

tl.from(".hamburger", 1, {
    opacity: 0,
    delay: 1.3,
    y: 10
});

TweenMax.staggerFrom(
    li,
    1.8,
    {
        delay: 1.3,
        opacity: 0,
        y: 20,
        ease: Expo.easeInOut
    },
    "0.08"
);
TweenMax.from(title, 1.8, {
    opacity: 0,
    y: 30,
    delay: 1.5,
    ease:Expo.easeInOut
});
TweenMax.from(quote, 1.8, {
    opacity: 0,
    y: 30,
    delay: 1.6,
    ease:Expo.easeInOut
});
TweenMax.from("p", 1.8, {
    opacity: 0,
    y: 30,
    delay: 1.7,
    ease:Expo.easeInOut
});

TweenMax.from(".btn-secondary", 1.8, {
    opacity: 0,
    y:30,
    delay: 1.8,
    ease:Expo.easeInOut
});
TweenMax.from(".btn-outline", 1.8, {
    opacity: 0,
    y:30,
    delay: 1.9,
    ease:Expo.easeInOut
});

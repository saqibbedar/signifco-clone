function homePageAnimation(){
    gsap.set(".marquee-rows", {scale: 5});

    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.home',
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
        }
    })
    tl
    .to(".my-video", {
        '--clip': "0%",
        ease: Power2,
    }, 'flag')
    .to(".marquee-rows", {
        scale:1,
        ease: Power2,
    },'flag')
    .to(".left-row", {
        x: -80,
        ease: Power2,
    },'flag')
    .to(".right-row", {
        x:-90,
        ease: Power2,
    },'flag')
};

function textAndCardsPageAnimation(){

    gsap.to(".right-cards", {
        scrollTrigger:{
            trigger: ".text-cards-section",
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
        },
        y: 0,
        ease: Power4
    })
}

function slidePageAnimation(){
    gsap.to(".slide", {
        scrollTrigger:{
            trigger: ".third-sec-real",
            start: "top top",
            end: "bottom bottom",
            scrub: 2,
        },
        xPercent : -100,
        ease: Power4
    })
}

function teamAnimation(){
    document.querySelectorAll(".member").forEach(function (img){
        img.addEventListener("mousemove", function(dets){
            gsap.to(this.querySelector(".member-img"), {
                opacity:1, 
                scale: 1, 
                ease: Power4,
                duration: .5,
                x: gsap.utils.mapRange(0, window.innerWidth, -200, 200, dets.clientX)
            });
        })
        img.addEventListener("mouseleave", function(dets){
            gsap.to(this.querySelector(".member-img"), {opacity:0,  scale: 0.5, ease: Power4, duration:.5});
        })
    })
}

function reviewsPageAnimation(){
    var clutter = "";
    var para = document.querySelector(".review-para");
    para.textContent.split("").forEach(function(letter){
        if(letter === " ") clutter += `<span>&nbsp</span>`
        clutter += `<span>${letter}</span>`;
    })
    para.innerHTML = clutter;

    gsap.set(".review-para span", {opacity: .1})
    gsap.to(".review-para span", {
        scrollTrigger: {
            trigger: ".review-para",
            start: "top 70%",
            scrub: .8,
            end: "bottom 90%",
        },
        opacity: 1,
        stagger: 9,
        ease: Power4
    });
}

function locoMotive(){
    (function () {
        const locomotiveScroll = new LocomotiveScroll();
    })();
}

function capsulePageAnimation(){
    gsap.to(".capsule-two", {
        scrollTrigger: {
            trigger: ".capsule",
            start: "top 65%",
            end: "bottom 90%",
            scrub: 1,
        }, 
        y: 0,
        ease: Power4
    })
}

function bodyTheme(){
    document.querySelectorAll(".section").forEach(function(sec){
        console.log(sec);
        ScrollTrigger.create({
            trigger: sec,
            start: "top 40%",
            end: "bottom 50%",
            onEnter: ()=>{
                document.body.setAttribute("theme", sec.dataset.color)
            },  
            onEnterBack: ()=>{
                document.body.setAttribute("theme", sec.dataset.color)
            }
        })
    })
}

homePageAnimation();
textAndCardsPageAnimation();
slidePageAnimation();
teamAnimation();
reviewsPageAnimation();
locoMotive();
capsulePageAnimation();
bodyTheme();
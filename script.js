gsap.from(".skill1", {   
    duration: 0.80,
    delay:0.30,
    opacity:0,
    scale:0,
    stagger:0.3,
    scrollTrigger: ".skill"
})

gsap.to(".project1", {
    y: -50,
    duration: 0.90,
    delay: 0.30,
    stagger: 0.3,
    scrollTrigger: ".project"
})
gsap.from(".banner1",{
    opacity:0,
    scale:0,
    duration:1
})
gsap.from(".b-t",{
    opacity:0,
    scale:0,
    duration:1
})
gsap.from(".icon",{
    opacity:0,
    scale:0,
    duration:1
})
gsap.from(".logo,.nav",{
    opacity:0,
    scale:0,
    duration:1
})

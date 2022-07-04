const tl = gsap.timeline();

tl.from(".loader", {
    duration: 0.2,
    scale: 0,
})

tl.from(".dis-load", {
        duration: 0.5,
        y: 50,
        opacity: 0,
        stagger: {
            amount: 0.1,
        }
    },
    "-=.5"
)
    const scroll = new LocomotiveScroll({
        el: document.querySelector('.main'),
        smooth: true
    });

    gsap.from(".nav a",{
        stagger:.1,
        y:30,
        duration:1,
        ease:Power3,
        opacity:0,
    })

    Shery.textAnimate(".headings h1",{

        style: 2,
        y: 20,
        delay: 0.1,
        duration: 2,
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        multiplier: 0.1,
    });

    gsap.from(".heropart #anim1 ",{
        y:50,
        stagger:.3,
        duration:1.5,
        opacity:0,
        ease: Expo,
    })
    gsap.from(".heropart #anim2 ",{
        y:50,
        stagger:.3,
        duration:1.5,
        opacity:0,
        ease: Expo,

    })
    gsap.from(".heropart #anim3 ",{
        y:50,
        stagger:.3,
        duration:1.5,
        opacity:0,
        ease: Expo,
    })
    Shery.imageEffect(".imagentext img",{
        style:4,
        config:{"uColor":{"value":false},"uSpeed":{"value":0.6,"range":[0.1,1],"rangep":[1,10]},"uAmplitude":{"value":1.5,"range":[0,5]},"uFrequency":{"value":3.5,"range":[0,10]},"geoVertex":{"range":[1,64],"value":32},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.75},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.26,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
        // debug:true,
    })
    Shery.imageEffect("#imgeff1 img",{
        style:1,
        config:{"a":{"value":0.92,"range":[0,30]},"b":{"value":-0.85,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.6666666666666666},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.26,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
        // debug:true,

    })
    Shery.imageEffect("#imgeff2 img",{
        style:1,
        config:{"a":{"value":0.92,"range":[0,30]},"b":{"value":-0.85,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.6666666666666666},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.26,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
        // debug:true,

    })
    Shery.imageEffect("#imgeff3 img",{
        style:1,
        config:{"a":{"value":0.92,"range":[0,30]},"b":{"value":-0.85,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.6666666666666666},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.26,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
        // debug:true,

    })
    Shery.imageEffect(".bimg",{
        style:5,
        config:{"a":{"value":0.92,"range":[0,30]},"b":{"value":-0.97,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":2.028289189669621},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":1.68,"range":[1,15]},"durationOut":{"value":0.5,"range":[0.1,5]},"durationIn":{"value":0.38,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1.34,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":2.14,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2],"_gsap":{"id":34}},"discard_threshold":{"value":0.53,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.21,"range":[0,2]},"noise_scale":{"value":12.21,"range":[0,100]}},
         // debug:true,
        gooey:true,
    })
    gsap.from(".imagentext img",{
        y:"70",
        opacity:0,
        duration:2,
        ease:Expo.easeInOut,
    })
    gsap.from(".sustainimg img",{
        y:"70",
        opacity:0,
        duration:2,
        ease:Expo.easeInOut,
    })
    gsap.from(".circlev",{
        y:"70",
        // opacity:0,
        duration:2,
        ease:Expo.easeInOut,
    })

    document.querySelector(".ftext button").addEventListener("mouseover",function(){
        gsap.to(".future video",{
            opacity:1,
            duration:1,
            ease:Power4,
        })
    })
    document.querySelector(".ftext button").addEventListener("mouseleave",function(){
        gsap.to(".future video",{
            opacity:0,
            duration:1,
            ease:Power4,
        })
    })
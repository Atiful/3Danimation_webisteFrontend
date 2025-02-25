import { gsap } from "gsap";
import { useRef , useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Services() {

    let serviceh3 = useRef(null);
    let servicep = useRef(null);
    let cotainerLeft= useRef(null);
    let cotainerRight= useRef(null);
    let cotainerLeftid= useRef(null);
    let cotainerRightid= useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from(serviceh3.current , {
                x : -100, 
                duration : 1,
                opacity : 0.4,
                scale : 2,
                scrollTrigger : {
                   trigger : serviceh3.current,
                   scrub : 2,
                 },
           });
           
           gsap.from(servicep.current, {
               x : 400, 
               duration : 1,
               opacity : 0.2,
               scrollTrigger : {
                  trigger : servicep.current,
                  scrub : 2,
                },
           
           });

        //    let gsap = gsap.timeline();

        gsap.from(cotainerLeft.current, {
            opacity: 0,
            x: -300,
            duration: 0.6,
            ease: "power3.out",
            scrollTrigger: {
                trigger: cotainerLeft.current,
                start: "top 80%",
                end: "top 30%",
                scrub: 2,
            },
        });

        // Right Container Animation (Slide from Right)
        gsap.from(cotainerRight.current, {
            opacity: 0,
            x: 300,
            duration: 0.6,
            ease: "power3.out",
            scrollTrigger: {
                trigger: cotainerRight.current,
                start: "top 80%",
                end: "top 30%",
                scrub: 2,
            },
        });

        // Left ID Container (Fade in with slight left movement)
        gsap.from(cotainerLeftid.current, {
            opacity: 0,
            x: -100,
            duration: 0.5,
            ease: "power2.out",
            scrollTrigger: {
                trigger: cotainerLeftid.current,
                start: "top 85%",
                end: "top 40%",
                scrub: 2,
            },
        });

        // Right ID Container (Fade in with slight right movement)
        gsap.from(cotainerRightid.current, {
            opacity: 0,
            x: 100,
            duration: 0.5,
            ease: "power2.out",
            scrollTrigger: {
                trigger: cotainerRightid.current,
                start: "top 85%",
                end: "top 40%",
                scrub: 2,
            },
        });
        });
    
        return () => ctx.revert();
      }, []);

    return (  
        <>
        <div className="services">
       <h3 ref={serviceh3}>Services</h3>
       <p ref={servicep}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, ullam numquam iure ab eum modi tempora placeat amet esse possimus fugiat exercitationem facilis delectus beatae velit laudantium voluptatibus harum. Explicabo?.</p>
    </div>

    <div className="container">
        <div className="box black left" ref={cotainerLeft}>
            <div className="part1">
                <h2>Search Engine Optimization</h2>
                <h4><i className="ri-arrow-right-up-line"></i> Learn More</h4>
            </div>
            <div className="part2">
                <img src="./images_front.png" alt=""/>
            </div>
        </div>

        <div className="box white right" ref={cotainerRight}>
            <div className="part1">
                <h2>Email marketing</h2>
                <h4><i className="ri-arrow-right-up-line"></i> Learn More</h4>
            </div>
            <div className="part2">
                <img src="./images_front.png" alt=""/>
            </div>
        </div>

        <div className="box white" id="left" ref={cotainerLeftid}>
            <div className="part1">
                <h2>social media marketing</h2>
                <h4><i className="ri-arrow-right-up-line"></i> Learn More</h4>
            </div>
            <div className="part2">
                <img src="./images_front.png" alt=""/>
            </div>
        </div>

        <div className="box black" id="right" ref={cotainerRightid}>
            <div className="part1">
                <h2>Pay per click address</h2>
                <h4><i className="ri-arrow-right-up-line"></i> Learn More</h4>
            </div>
            <div className="part2">
                <img src="./images_front.png" alt=""/>
            </div>
        </div>
    </div>

    <div className="footer"></div>
    </>
    );
}

export default Services;
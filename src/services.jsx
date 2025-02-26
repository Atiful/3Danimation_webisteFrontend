import { gsap } from "gsap";
import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Services() {
    let serviceh3 = useRef(null);
    let servicep = useRef(null);
    let cotainerLeft = useRef(null);
    let cotainerRight = useRef(null);
    let cotainerLeftid = useRef(null);
    let cotainerRightid = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {

            gsap.from(serviceh3.current, {
                x: -50, // Reduced for smooth effect
                duration: 1.5,
                opacity: 0,
                scale: 1.2, // Smoother scale transition
                ease: "power4.out",
                scrollTrigger: {
                    trigger: serviceh3.current,
                    start: "top 65%",
                    end: "top 40%",
                    scrub: true,
                },
            });

            gsap.from(servicep.current, {
                x: 50,
                duration: 1.5,
                opacity: 0,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: servicep.current,
                    scrub: true,
                },
            });


            let tl = gsap.timeline();

            tl.from(cotainerLeft.current, {
                opacity: 0,
                x: -100,
                duration: 1.2,
                ease: "sine.out",
                scrollTrigger: {
                    trigger: cotainerLeft.current,
                    start: "top 85%",
                    end: "top 40%",
                    scrub: true,
                },
            });

            tl.from(cotainerRight.current, {
                opacity: 0,
                x: 100,
                duration: 1.2,
                ease: "sine.out",
                scrollTrigger: {
                    trigger: cotainerRight.current,
                    start: "top 85%",
                    end: "top 40%",
                    scrub: true,
                },
            });

            tl.from(cotainerLeftid.current, {
                opacity: 0,
                x: -50,
                duration: 1,
                ease: "sine.out",
                scrollTrigger: {
                    trigger: cotainerLeftid.current,
                    start: "top 90%",
                    end: "top 50%",
                    scrub: true,
                },
            });

            tl.from(cotainerRightid.current, {
                opacity: 0,
                x: 50,
                duration: 1,
                ease: "sine.out",
                scrollTrigger: {
                    trigger: cotainerRightid.current,
                    start: "top 90%",
                    end: "top 50%",
                    scrub: true,
                },
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <>
            <div className="services">
                <h3 ref={serviceh3}>Services</h3>
                <p ref={servicep}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, ullam numquam iure ab eum modi tempora placeat amet esse possimus fugiat exercitationem facilis delectus beatae velit laudantium voluptatibus harum. Explicabo?.
                </p>
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
                        <h2>Social Media Marketing</h2>
                        <h4><i className="ri-arrow-right-up-line"></i> Learn More</h4>
                    </div>
                    <div className="part2">
                        <img src="./images_front.png" alt=""/>
                    </div>
                </div>

                <div className="box black" id="right" ref={cotainerRightid}>
                    <div className="part1">
                        <h2>Pay Per Click Advertising</h2>
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

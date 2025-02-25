import { gsap } from "gsap";
import { useRef , useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
function Images(){
    let images = useRef(null);



    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from(images.current , {
                  x : -200,
                  opacity : 0,
                  duration : 1,
                  scrollTrigger : {
                    trigger : images.current,
                    scrub : 2,
                  },
                  stagger : 0.21,
             });
        });
    
        return () => ctx.revert();
      }, []);

    return(
        <div className="images-section" ref={images}>
        <img src="./Amazon-Logo.png" alt=""/>
        <img src="./dribble.png" alt=""/>
        <img src="./hubspot.png" alt=""/>
        <img src="./netflix.jpg" alt=""/>
        <img src="./notion.png" alt=""/>
        <img src="./zoom.png" alt=""/>
    </div>
    )
}

export default Images;
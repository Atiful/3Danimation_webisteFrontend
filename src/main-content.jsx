import { gsap } from "gsap";
import { useRef , useEffect, useState } from "react";

function ContentMain() {
    // const MainContent = useRef(null);
    let h1 = useRef(null);
    let p = useRef(null);
    let button = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
          let tl = gsap.timeline();
    
          tl.from(h1.current, {
            x: -300,
            opacity: 0,
            duration: 1,
          })
            .from(p.current, {
              x: -100,
              opacity: 0,
              duration: 0.3,
            })
            .from(button.current, {
              opacity: 0,
              duration: 0.3,
            });
        });
    
        return () => ctx.revert(); // Cleanup animation
      }, []);

    return ( 
        <div className="content-center">
        <div className="part1">
           <h1 ref={h1}>Unleash the Future: Elevate Your Experience Today!</h1>
           <p ref={p}>Step into a world where innovation meets simplicity. Our platform is designed to transform your experience with cutting-edge technology, seamless design, and unparalleled performance. Whether you're here to explore, create, or elevate your journey, we've got everything you need to make it happen. Join us and be part of the future—today!</p>
           <button ref={button}>Book a Consultation</button>
        </div>
   </div>
     );
}

export default ContentMain;


// Initialize Three.js
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Add a simple geometry
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);

const cube2 = new THREE.Mesh(geometry, material);
const cube3 = new THREE.Mesh(geometry, material);
const cube4 = new THREE.Mesh(geometry, material);
scene.add(cube);
scene.add(cube2);
scene.add(cube3);
scene.add(cube4);

// Position the camera
camera.position.z = 5;
 const clock = new THREE.Clock();
 const slowFactor = 0.1;
// Animation loop
function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    const elapsedTime = clock.getElapsedTime();
    cube2.position.x = Math.sin(elapsedTime + 2);
    cube2.position.y = Math.cos(elapsedTime + 2);
   
    cube4.position.x = Math.tan(elapsedTime + 2);
    cube4.position.y = Math.cos(elapsedTime + 2);


    cube3.position.x += (Math.random() - 0.5) * elapsedTime * slowFactor; // Random movement on x-axis
    cube3.position.y += (Math.random() - 0.5) * elapsedTime * slowFactor; // Random movement on y-axis

    // Keep the cube within the screen bounds
    if (cube3.position.x > 2.5) cube.position.x = 2.5 * 0.1;
    if (cube3.position.x < -2.5) cube.position.x = -2.5 * 0.1;
    if (cube3.position.y > 2.5) cube.position.y = 2.5 * 0.1;
    if (cube3.position.y < -2.5) cube.position.y = -2.5 * 0.1;
    renderer.render(scene, camera);
}
animate();

// Interaction
document.addEventListener('mousemove', (event) => {
    const color = new THREE.Color((event.clientX / window.innerWidth), (event.clientY / window.innerHeight), 0.5);
    cube.material.color.set(color);
});


let tl = gsap.timeline();
gsap.registerPlugin(ScrollTrigger);

function animationNavbar(){
    tl.from("nav h1 , nav .item h3 , nav .item button , .menubar" , {
        y : -50,
        duration : 0.4,
        delay : 0.5,
        opacity : 0,
        stagger : 0.2,
   });
}


function animationCenterContent(){
    tl.from(".content-center .part1 h1" , {
        x:-300,
        opacity : 0,
        duration : 1,
     })
     
     tl.from(".content-center .part1 p" , {
         x:-100,
         opacity : 0,
         duration : 0.3,
      })
     
      tl.from(".content-center .part1 button" , {
         opacity : 0,
         duration : 0.3,
      })
     
      tl.from(".content-center .part2 img" , {
         opacity : 0,
         duration : 0.3,
      } , "-=0.7");
}



function animationImages(){
    gsap.from(".images-section img" , {
        x : -100,
          opacity : 0,
          duration : 1,
          scrollTrigger : {
            trigger : ".images-section img",
            scroll : "body",
            scrub : 2,
          },
        //    ease: "elastic.out(1.8,0.4)",
          stagger : 0.21,
          scrub : 1,
     });
}

function animationServices(){
    gsap.from(".services h3" , {
        x : -100, 
        duration : 1,
        opacity : 0.4,
        scale : 2,
        scrollTrigger : {
           trigger : ".services h3",
           scroll : "body",
           scrub : 2,
         },
   });
   
   gsap.from(".services p" , {
       x : 400, 
       duration : 1,
       opacity : 0.2,
       // scale : 1,
       scrollTrigger : {
          trigger : ".services p",
          scroll : "body",
          scrub : 2,
        },
   
   });
}

function animationContainer(){
    let tl2 = gsap.timeline();

tl2.from(".container .left" , {
    opacity : 0,
    x : -300,
    duration : 0.3,
    scrollTrigger : {
        trigger : ".container .left",
        scroll : "body",
        scrub : 2,
      },
});

tl2.from(".container .right" , {
    opacity : 0,
    x : 300,
    duration : 0.3,
    scrollTrigger : {
        trigger : ".container .right",
        scroll : "body",
        scrub : 2,
      },
} , "-=0.8");


gsap.from(".container #left" , {
    opacity : 0,
    x : -300,
    duration : 0.3,
    scrollTrigger : {
        trigger : ".container #left",
        scroll : "body",
        end : "top 0%",
        scrub : 2,
      },
});

gsap.from(".container #right" , {
    opacity : 0,
    x : 300,
    duration : 0.3,
    scrollTrigger : {
        trigger : ".container #right",
        scroll : "body",
        end : "top 0%",
        scrub : 2,
      },
});
}


animationNavbar();
animationCenterContent();
animationImages();
animationServices();
animationContainer();


// let image = document.querySelector(".part2 img");


// gsap.registerPlugin(ScrollTrigger);

window.addEventListener("scroll" , () => {
  console.log("scroll");
//   gsap.to(".content-center .part2 img", {
//     rotate: 360,
//     duration: 3, // Smooth rotation time
//     repeat : -1,
//     ease: "none",
//     scrollTrigger: {
//         trigger: ".content-center .part2 img",
//         // scrub : 2,
//     }
// });
});





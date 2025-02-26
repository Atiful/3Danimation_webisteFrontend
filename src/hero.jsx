import { useEffect, useRef, useState } from "react";
import * as THREE from 'three';
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import gsap from "gsap";

function Hero(){
      const canvasRef = useRef(null);
      const [size , setsize] = useState({width : window.innerWidth, height : window.innerHeight});
     
  
      
      

      useEffect(() => {


          const canvas = canvasRef.current;
          if (!canvas) return;

          const scene = new THREE.Scene();
          const camera = new THREE.PerspectiveCamera(75, size.width / size.height, 0.1, 100);
          camera.position.z = 4;

          canvas.style.touchAction = "auto"; // Allow touch scrolling
canvas.style.pointerEvents = "auto"; 


           // Create Renderer
    const renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setSize(size.width, size.height);
    renderer.setPixelRatio(Math.min(2, window.devicePixelRatio));


    // orbit control
    const controls = new OrbitControls(camera, canvas);
    controls.enableDamping = true;
    controls.enableZoom = false;

    


      // Create a Group
      const group = new THREE.Group();
      const group2 = new THREE.Group();

 

scene.background = new THREE.Color("rgb(2,0,36)");



      
          const geometrys = {
            sphere : new THREE.SphereGeometry(0.3 , 10 , 10),
            tourse : new THREE.TorusGeometry(0.6, 1, 16, 20),
            sphere2 : new THREE.SphereGeometry(0.3 , 10 , 10),
            tourse2 : new THREE.TorusGeometry(0.5, 0.5, 16, 20),
     }

     const materials = {
       sphere : new THREE.MeshBasicMaterial({color : "#CCFFCC" , wireframe : true}),
       tourse : new THREE.MeshBasicMaterial( {color : "green" , wireframe : true}),
       sphere2 : new THREE.MeshBasicMaterial({color : "pink" , wireframe : true}),
       tourse2 : new THREE.MeshBasicMaterial( {color : "purple" , wireframe : true}),
     }

     const sphere = new THREE.Mesh(geometrys.sphere , materials.sphere);
     const tourse = new THREE.Mesh(geometrys.tourse , materials.tourse);
     const sphere2 = new THREE.Mesh(geometrys.sphere2 , materials.sphere2);
     const tourse2 = new THREE.Mesh(geometrys.tourse2 , materials.tourse2);
    

     sphere.position.set(1, 2, 0);
     tourse.position.set(1, 2, 0);
     sphere2.position.set(-1, 1, 0);
     tourse2.position.set(-1, 1, 0);
     
     group.add(sphere , tourse );
     group2.add(sphere2 , tourse2);

     scene.add(group);
     scene.add(group2);
     const clock = new THREE.Clock();

     const animate = () => {
        requestAnimationFrame(animate);
        controls.update();
        const elapsedTime =  clock.getElapsedTime();
        sphere.rotation.y = (elapsedTime * 0.4) * -1;
        sphere.rotation.x = (elapsedTime *0.4) * -1;
        sphere.rotation.z =( elapsedTime *0.4) * -1;

        group2.position.x = Math.sin(elapsedTime) * 0.4;
        group2.position.y = Math.cos(elapsedTime) * 0.4;
        group2.position.z = Math.sin(elapsedTime) * 0.4;

        tourse.rotation.y = elapsedTime * 0.1;
        tourse.rotation.x = elapsedTime *0.1;
        tourse.rotation.z = elapsedTime *0.1;
        renderer.render(scene, camera);
      };
      animate();



      return () => {
        renderer.dispose();
        Object.values(geometrys).forEach(geo => geo.dispose());
        // materials.dispose();
      };

      } , []);



    return(
        <>
        <canvas ref = {canvasRef} className="canvas"></canvas>

          
        </>
    )
}

export default Hero;
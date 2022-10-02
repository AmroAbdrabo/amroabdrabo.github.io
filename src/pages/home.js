import * as THREE from "three";
import React, { useRef, Suspense } from "react";
import { Canvas, extend, useFrame, useLoader } from "@react-three/fiber";
import { shaderMaterial,  OrbitControls } from "@react-three/drei";
import glsl from "babel-plugin-glsl/macro";
import "./../styling/startscreen.scss";
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
//import "./../styling/sidebar.css";

import useScript from './../components/hooks/useScript';

const WaveShaderMaterial = shaderMaterial(
  // Uniform
  {
    uTime: 0,
    uColor: new THREE.Color(0.0, 0.0, 0.0),
    uTexture: new THREE.Texture()
  },
  // Vertex Shader
  glsl`
  precision mediump float;
  varying vec2 vUv;
  uniform float uTime;

  void main() {
    vUv = uv;

    vec3 pos = position;
    float noiseFreq = 15.5;
    float noiseAmp = 0.15; 
    vec3 noisePos = vec3(sqrt(pos.x * pos.x + pos.y * pos.y ) * 10.0 - 3.5 * uTime, pos.y, pos.z);
    pos.z += sin(noisePos.x) * noiseAmp;
    //pos.x += sin(sqrt(noisePos.x*noisePos.x + noisePos.y*noisePos.y)) * noiseAmp;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.);
    //console.log(pos.x);
  }
  `,
  // Fragment Shader
  glsl`
    precision mediump float;

    varying vec2 vUv;

    void main() {
      gl_FragColor = vec4(0.1, 0.2, 1., 1.);
    }
  `
);

extend({ WaveShaderMaterial });

const Wave = () => {
  const ref = useRef();
  useFrame(({ clock }) => (ref.current.uTime = clock.getElapsedTime()));

  

  return (
    <mesh scale={[1, 1, 1]}>
      <planeBufferGeometry args={[3.8, 3.8, 40, 40]} />
      <waveShaderMaterial uColor={"hotpink"} ref={ref} wireframe />
    </mesh>
  );
};

const Scene = () => {
  return (
    <Canvas camera={{ fov: 20, position: [0, 12, 5] }}>
      <OrbitControls target={[0.0, 0.0, 0.0]}/>
      <Suspense fallback={null}>
        <Wave />
      </Suspense>
    </Canvas>
  );
};


const content = [
    {
      icon: 'icon-class-name',
      label: 'Label of Item',
      to: 'a-route-path',
    },
    {
      icon: 'icon-class-name',
      label: 'Second Item',
      content: [
        {
          icon: 'icon-class-name',
          label: 'Sub Menu of Second Item',
          to: 'another-route-path',
        },
      ],
    },
  ];





  const Start = () => {
    //useScript('./drop.js');
    return (
      
      <>
           {/* <div className= "sidenav">
      <a href="#about">About</a>
      <a href="#services">Services</a>
      <a href="#clients">Clients</a>
      <a href="#contact">Contact</a>
      <button className="dropdownbtn">Drdown 
        <i class="fa fa-caret-down"></i>
      </button>
      <div className = "dropdowncontainer">
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
      </div>
    <a href="#contact">Search</a>
  </div> */}
  <div style={{display: "flex", height: '100%', justifyContent: 'start'}}>
    <div style = {{border: '1px solid green'}}>
  <ProSidebar>
  <Menu iconShape="square">
    <MenuItem >About me</MenuItem>
    <SubMenu title="Blogs" >
        <MenuItem>Comp. Security</MenuItem>
        <MenuItem>Machine Learning</MenuItem>
        <MenuItem>Algorithmicity</MenuItem>
    </SubMenu>
    <MenuItem >YouTube</MenuItem>
  </Menu>
</ProSidebar>
</div>
<div  style = {{border: '1px solid red', width: '100%'}}>
        <h1 style = {{margin: 'auto', left: '50%', right: '50%'}}>AMRO A.</h1>
        <Scene style = {{width: '100%' }}/>
        </div>
        </div>
      </>
    );
  };
  

// class Start extends React.Component {
//     constructor() {
//       super();
//     }
  
//     componentDidMount() {
//       const s = document.createElement('script');
//       s.type = 'text/javascript';
//       s.async = true;
//       s.innerHTML = `var dropdown = document.getElementsByClassName('dropdownbtn'); var i;
      
//       for (i = 0; i < dropdown.length; i++) {
//         dropdown[i].addEventListener("click", function() {
//           this.classList.toggle("active");
//           var dropdownContent = this.nextElementSibling;
//           if (dropdownContent.style.display === "block") {
//             dropdownContent.style.display = "none";
//           } else {
//             dropdownContent.style.display = "block";
//           }
//         });
//       } ";
//       this.instance.appendChild(s);
//     }`;
//     this.instance.appendChild(s);
//     }
  
//     render() {
//         return (
    
//             <>
//             <div className= "sidenav">
//             <a href="#about">About</a>
//             <a href="#services">Services</a>
//             <a href="#clients">Clients</a>
//             <a href="#contact">Contact</a>
//             <button className="dropdownbtn">Drdown 
//               <i class="fa fa-caret-down"></i>
//             </button>
//             <div className = "dropdowncontainer">
//               <a href="#">Link 1</a>
//               <a href="#">Link 2</a>
//               <a href="#">Link 3</a>
//             </div>
//           <a href="#contact">Search</a>
//         </div>
//               <h1>AMRO A.</h1>
//               <Scene />
//             </>
//           );
//     }
//   }

  export default Start;
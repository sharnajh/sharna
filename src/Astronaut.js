import React, { Component } from "react";
import * as THREE from "three";
import * as OBJLoader from "three-obj-loader";
import ASTRO from "./assets/models/astro.obj";

OBJLoader(THREE);

class Astronaut extends Component {
  componentDidMount() {
    // Scene
    const wrapper = document.getElementById("astronautwrapper");
    let scene = new THREE.Scene();

    let camera = new THREE.PerspectiveCamera(
      75,
      wrapper.clientHeight / wrapper.clientWidth,
      0.2,
      1000
    );
    var ambientLight = new THREE.AmbientLight( "#FFFFFF" );
    scene.add(ambientLight)


    var lights = [];
    lights[0] = new THREE.DirectionalLight( "#00b7ff", 1 );
    lights[0].position.set( 1, 0, 0 );

    lights[2] = new THREE.DirectionalLight( "#00b7ff", 1 );
    lights[2].position.set( -0.75, -1, 0.5 );
    scene.add( lights[0] );

    scene.add( lights[2] );

    // Render
    let renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setClearColor(0x000000, 0); // the default
    renderer.setSize(wrapper.clientHeight, wrapper.clientWidth);
    this.mount.appendChild(renderer.domElement);

    // Models
    let manager = new THREE.LoadingManager();
    manager.onProgress = function(item, loaded, total) {
      console.log(item, loaded, total);
    };


    this.THREE = THREE;
    const loader = new this.THREE.OBJLoader();

    loader.load(
      // resource URL
      ASTRO,

      // onLoad callback
      // Here the loaded data is assumed to be an object
      model => {
        // Add the loaded object to the scene
        console.log("SUCCESS");
        let material = new THREE.MeshPhongMaterial({ color: "#FF1A82", side: THREE.DoubleSide });
        model.traverse(function(child) {
          if (child instanceof THREE.Mesh) {
            child.material = material;
            child.castShadow = true;
          }
        });
        model.castShadow = true;
        model.position.set(0, -90, 0);
        model.rotation.x = 300;
       
        scene.add(model);
        let animate = function() {
          requestAnimationFrame(animate);
          model.rotation.z += 0.02;
          // model.rotation.x += 0.01
          renderer.render(scene, camera);
        };
        animate();
      },

      // onProgress callback
      xhr => {
        console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
      },

      // onError callback
      err => {
        console.error("An error happened", err);
      }
    );

    camera.position.z = 145;

    // Shape
    // let geometry = new THREE.BoxGeometry(1, 1, 1);
    // let material = new THREE.MeshBasicMaterial({ color: "#00B7FF" });
    // let cube = new THREE.Mesh(geometry, material);
    // scene.add(cube);
    // camera.position.z = 2;

    // // Animation
  }
  render() {
    return <div id="astronautwrapper" ref={ref => (this.mount = ref)} />;
  }
}

export default Astronaut;

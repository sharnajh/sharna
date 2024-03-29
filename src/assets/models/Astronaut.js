import React, { Component } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import ASTRO from "./astro.gltf";
import { MODELLoaded } from "../../actions/loaded";
import { connect } from "react-redux";
import Loading from "../SVGs/Loading";

class Astronaut extends Component {
  state = {
    loading: false,
  }
  renderModel = () => {
    const { MODELLoaded } = this.props;
    // Scene
    let scene = new THREE.Scene();
    let camera = new THREE.PerspectiveCamera(75, 500 / 500, 0.2, 1000);
    scene.overrideMaterial = new THREE.MeshPhongMaterial({
      color: "#FF1A82"
    });
    camera.position.z = 160;

    // Lights
    var ambientLight = new THREE.AmbientLight("#FFFFFF");
    scene.add(ambientLight);

    var lights = [];
    lights[0] = new THREE.DirectionalLight("#00b7ff", 1);
    lights[0].position.set(1, 0, 0);

    lights[1] = new THREE.DirectionalLight("#00b7ff", 1);
    lights[1].position.set(-0.75, -1, 0.5);
    scene.add(lights[0]);

    scene.add(lights[1]);

    // Render
    let renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setClearColor(0x000000, 0); // the default
    renderer.setSize(500, 500);
    this.mount.appendChild(renderer.domElement);

    // Orbit Control
    let controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false;
    controls.enablePan = false;

    // Models
    let manager = new THREE.LoadingManager();
    const loader = new GLTFLoader(manager);
    let dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath("three/examples/js/libs/draco");
    loader.setDRACOLoader(dracoLoader);

    loader.load(
      // resource URL
      ASTRO,

      // onLoad callback
      // Here the loaded data is assumed to be an object
      gltf => {
        // Update state
        MODELLoaded();
        this.setState({ loading: false })
        // Add the loaded object to the scene
        let model = gltf.scene;
        model.position.set(0, -90, 0);
        model.rotation.x = 300;
        scene.add(model);

        let animate = function() {
          requestAnimationFrame(animate);
          model.rotation.z += 0.02;
          controls.update();
          renderer.render(scene, camera);
        };
        animate();
      },

      // onProgress callback
      xhr => {
        console.log("Loading model");
        this.setState({ loading: true })
      },

      // onError callback
      err => {
        console.error("An error happened: ", err);
      }
    );
  };
  componentDidMount() {
    this.renderModel();
  }
  render() {
    const { loading } = this.state;
    return (
      <div id="astronautwrapper" ref={ref => this.mount = ref}>
        <div id="planet">
          {loading ? <Loading style={{ zIndex: "1000" }} /> : ""}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  MODELLoaded: () => dispatch(MODELLoaded())
})

export default connect(null, mapDispatchToProps)(Astronaut);

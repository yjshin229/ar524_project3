import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { preloadModels } from "./models";

export default function example() {
  // Renderer
  const canvas = document.querySelector("#three-canvas");
  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1);

  // Scene
  const scene = new THREE.Scene();

  // Camera
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.y = 1.5;
  camera.position.z = 4;
  scene.add(camera);

  // Light
  const ambientLight = new THREE.AmbientLight("white", 0.5);
  scene.add(ambientLight);

  const directionalLight = new THREE.DirectionalLight("white", 1);
  directionalLight.position.x = 1;
  directionalLight.position.z = 2;
  scene.add(directionalLight);

  // Controls
  const controls = new OrbitControls(camera, renderer.domElement);

  // GLTF loader

  const modelUrls = [
    "./models/bitten_pizza.glb",
    "./models/cardboard_box.glb",
    "./models/food_can_post-war.glb",
    "./models/orange_fruit.glb",
    "./models/rotten_apple.glb",
    "./models/plastic_chair_1.glb",
    "./models/plastic_chair.glb",
    "./models/plastic_jerrycan.glb",
    "./models/plastic_water_bottle.glb",
    "./models/rotten_avocado.glb",
    "./models/rotten_dirty_organic_waste.glb",
    "./models/rotten_pumpkin.glb",
    "./models/tire.glb",
    "./models/trash_bag.glb",
  ];

  // Array to store preloaded models
  let modelsArr = [];

  // Preload all models
  preloadModels(modelUrls)
    .then((models) => {
      modelsArr = models;

      // Add random models to the scene
      addRandomModelToScene();
    })
    .catch((error) => {
      console.error("Error loading models:", error);
    });

  // Function to add a random model to the scene
  const addRandomModelToScene = () => {
    if (modelsArr.length > 0) {
      const randomIndex = Math.floor(Math.random() * modelsArr.length);
      const randomModel = modelsArr[randomIndex].clone(); // Clone the model to avoid modifying the original
      scene.add(randomModel);
    }
  };

  // Draw function
  const clock = new THREE.Clock();

  function draw() {
    const delta = clock.getDelta();

    renderer.render(scene, camera);
    renderer.setAnimationLoop(draw);
  }

  function setSize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.render(scene, camera);
  }

  // Event listener
  window.addEventListener("resize", setSize);

  draw();
}

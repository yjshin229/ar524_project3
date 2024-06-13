import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { degToRad } from "three/src/math/MathUtils";
import * as CANNON from "cannon-es";
import {
  defaultContactMaterial,
  defaultMaterial,
  metalDefaultContactMaterial,
  paperDefaultContactMaterial,
  plasticDefaultContactMaterial,
  rubberDefaultContactMaterial,
} from "./cannon";
import { cm1, cm2 } from "./common";
import { Floor } from "./floor";

export default function scene(garbageMeshes) {
  // Renderer
  const renderer = new THREE.WebGLRenderer({
    canvas: cm1.canvas,
    antialias: true,
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFShadowMap;

  // Scene
  cm1.scene.background = new THREE.Color(cm2.backgroundColor);

  // Camera
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.y = 2;
  camera.position.z = 10;
  cm1.scene.add(camera);

  // Light
  const ambientLight = new THREE.AmbientLight(cm2.lightColor, 0.5);
  cm1.scene.add(ambientLight);

  const directionalLight = new THREE.DirectionalLight(cm2.lightColor, 1);
  directionalLight.position.x = 1;
  directionalLight.position.z = 2;
  directionalLight.castShadow = true;
  cm1.scene.add(directionalLight);

  // Floor
  const floor = new Floor({
    name: "floor",
    rotationX: degToRad(-90),
  });

  const wall1 = new Floor({
    name: "wall1",
    x: 0,
    y: 25,
    z: -25,
  });
  const wall2 = new Floor({
    name: "wall2",
    rotationY: degToRad(-90),
    x: 25,
    y: 25,
    z: 0,
  });
  const wall3 = new Floor({
    name: "wall3",
    rotationY: degToRad(90),
    x: -25,
    y: 25,
    z: 0,
  });

  // Controls
  const controls = new OrbitControls(camera, renderer.domElement);

  const cannonWorld = new CANNON.World();
  //gravity(earth)
  cannonWorld.gravity.set(0, -9.8, 0);

  cannonWorld.defaultContactMaterial = defaultContactMaterial;

  cannonWorld.addContactMaterial(rubberDefaultContactMaterial);
  cannonWorld.addContactMaterial(metalDefaultContactMaterial);
  cannonWorld.addContactMaterial(plasticDefaultContactMaterial);
  cannonWorld.addContactMaterial(paperDefaultContactMaterial);

  const floorShape = new CANNON.Plane();
  const floorBody = new CANNON.Body({
    mass: 0,
    position: new CANNON.Vec3(0, 0, 0),
    shape: floorShape,
    material: defaultMaterial,
  });
  floorBody.quaternion.setFromEuler(-Math.PI / 2, 0, 0); // Make the plane horizontal
  cannonWorld.addBody(floorBody);

  const wallBody1 = new CANNON.Body({
    mass: 0,
    position: new CANNON.Vec3(0, 25, -25),
    shape: floorShape,
    material: defaultMaterial,
  });
  wallBody1.quaternion.setFromEuler(Math.PI / 2, 0, 0); // Vertical wall
  cannonWorld.addBody(wallBody1);

  const wallBody2 = new CANNON.Body({
    mass: 0,
    position: new CANNON.Vec3(25, 25, 0),
    shape: floorShape,
    material: defaultMaterial,
  });
  wallBody2.quaternion.setFromEuler(0, -Math.PI / 2, 0); // Vertical wall rotated 90 degrees around y-axis
  cannonWorld.addBody(wallBody2);

  const wallBody3 = new CANNON.Body({
    mass: 0,
    position: new CANNON.Vec3(-25, 25, 0),
    shape: floorShape,
    material: defaultMaterial,
  });
  wallBody3.quaternion.setFromEuler(0, Math.PI / 2, 0); // Vertical wall rotated -90 degrees around y-axis
  cannonWorld.addBody(wallBody3);

  const floatingText = document.getElementById("floating-text");
  const changeTextButton = document.getElementById("change-text-button");

  const addGarbageMesh = (mesh) => {
    const cloneMesh = mesh.clone();
    const planeWidth = 20;
    const halfPlaneWidth = planeWidth / 2;
    const randomX = Math.random() * planeWidth - halfPlaneWidth;
    const randomY = Math.random() * 10 + 15; // Random y position between 15 and 25

    cloneMesh.position.set(randomX, randomY, 0);

    const shape = new CANNON.Box(new CANNON.Vec3(0.5, 0.5, 0.5)); // Simplified shape for all meshes
    const body = new CANNON.Body({
      mass: cloneMesh.userData.mass,
      position: new CANNON.Vec3(
        cloneMesh.position.x,
        cloneMesh.position.y,
        cloneMesh.position.z
      ),
      shape: shape,
      material: cloneMesh.userData.material, // Use the assigned material
    });

    body.velocity.setZero(); // Ensure no initial velocity
    body.angularVelocity.setZero(); // Ensure no initial angular velocity
    body.force.setZero(); // Ensure no initial force
    body.torque.setZero(); // Ensure no initial torque

    cannonWorld.addBody(body);
    cloneMesh.userData.physicsBody = body;
    cm1.scene.add(cloneMesh);
  };

  const addGarbageWithDelay = (totalCount, batchCount, delay) => {
    changeTextButton.disabled = true;
    changeTextButton.style.backgroundColor = "#808080";
    changeTextButton.style.cursor = "not-allowed";

    let addedCount = 0;
    const intervalId = setInterval(() => {
      if (addedCount >= totalCount) {
        clearInterval(intervalId);
        if (floatingText.textContent !== 2020) {
          changeTextButton.disabled = false;
          changeTextButton.style.backgroundColor = "#793602";
          changeTextButton.style.cursor = "pointer";
        }

        return;
      }

      for (let i = 0; i < batchCount; i++) {
        if (addedCount >= totalCount) {
          break;
        }
        const templateIndex = Math.floor(Math.random() * garbageMeshes.length);
        addGarbageMesh(garbageMeshes[templateIndex]);
        addedCount += 1;
      }
    }, delay);
  };

  const header = () => {
    let currentYear = 2012; // Initial year

    // Set initial text
    floatingText.textContent = currentYear;
    addGarbageWithDelay(500, 20, 100);

    changeTextButton.addEventListener("click", () => {
      if (currentYear < 2020) {
        currentYear += 1;
        floatingText.textContent = currentYear;
        switch (currentYear) {
          case 2013:
            addGarbageWithDelay(30, 20, 100);
            break;
          case 2014:
            addGarbageWithDelay(100, 20, 100);
            break;
          case 2015:
            addGarbageWithDelay(400, 20, 100);
            break;
          case 2016:
            addGarbageWithDelay(600, 20, 100);
            break;
          case 2017:
            addGarbageWithDelay(100, 20, 100);
            break;
          case 2018:
            addGarbageWithDelay(100, 20, 100);
            break;
          case 2019:
            addGarbageWithDelay(150, 20, 100);
            break;
          case 2020:
            changeTextButton.style.visibility = "hidden";
            addGarbageWithDelay(80, 20, 100);
            break;
        }
      }
    });
  };

  header();

  // Draw function
  const clock = new THREE.Clock();

  function draw() {
    const delta = clock.getDelta();

    cannonWorld.step(1 / 60, delta, 3);

    // Update Three.js model positions based on physics
    cm1.scene.traverse((object) => {
      if (object.userData.physicsBody) {
        const body = object.userData.physicsBody;
        object.position.copy(body.position);
        object.quaternion.copy(body.quaternion);
      }
    });

    renderer.render(cm1.scene, camera);
    renderer.setAnimationLoop(draw);
  }

  function setSize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.render(cm1.scene, camera);
  }

  // Event listener
  window.addEventListener("resize", setSize);

  draw();
}

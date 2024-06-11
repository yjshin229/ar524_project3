import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { degToRad } from "three/src/math/MathUtils";
import * as CANNON from "cannon-es";
import { defaultContactMaterial, defaultMaterial } from "./cannon";
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
  camera.position.y = 1.5;
  camera.position.z = 7;
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

  // Controls
  const controls = new OrbitControls(camera, renderer.domElement);

  const cannonWorld = new CANNON.World();
  //gravity(earth)
  cannonWorld.gravity.set(0, -9.8, 0);

  cannonWorld.defaultContactMaterial = defaultContactMaterial;

  const floorShape = new CANNON.Plane();
  const floorBody = new CANNON.Body({
    mass: 0,
    position: new CANNON.Vec3(0, 0, 0),
    shape: floorShape,
    material: defaultMaterial,
  });

  floorBody.quaternion.setFromAxisAngle(new CANNON.Vec3(-1, 0, 0), Math.PI / 2);
  cannonWorld.addBody(floorBody);

  const changeTextButton = document.getElementById("add-button");

  changeTextButton.addEventListener("click", () => {
    if (garbageMeshes.length > 0) {
      garbageMeshes.forEach((mesh) => {
        const cloneMesh = mesh.clone();
        cloneMesh.position.set(
          Math.random() * 20 - 10,
          10,
          Math.random() * 20 - 10
        ); // Random position at the top

        const shape = new CANNON.Box(new CANNON.Vec3(0.5, 0.5, 0.5)); // Simplified shape for all meshes
        const body = new CANNON.Body({
          mass: 1,
          position: new CANNON.Vec3(
            cloneMesh.position.x,
            cloneMesh.position.y,
            cloneMesh.position.z
          ),
          shape: shape,
          material: defaultMaterial,
        });

        cannonWorld.addBody(body);
        cloneMesh.userData.physicsBody = body;
        cm1.scene.add(cloneMesh);
      });
    }
  });

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

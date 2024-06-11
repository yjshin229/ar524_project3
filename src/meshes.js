import * as THREE from "three";

// Texture Loader
const textureLoader = new THREE.TextureLoader();
const rustyMetalTexture = textureLoader.load(
  "./textures/MetalCorroded_color.jpg"
);
const oldCardboardTexture = textureLoader.load(
  "./textures/Paper_Recycled_001_OCC.jpg"
);
const dirtyPlasticTexture = textureLoader.load(
  "./textures/Plastic_004_basecolor.jpg"
);
const tireTexture = textureLoader.load("./textures/Tire_rubber_color.jpg");
const waffleTexture = textureLoader.load("./textures/Waffle_001_basecolor.jpg");

// Function to create garbage mesh templates
const createGarbageMeshTemplates = () => {
  const garbageTemplates = [];

  // Crushed Can
  const createCrushedCan = () => {
    const geometry = new THREE.CylinderGeometry(0.1, 0.1, 0.3, 32);
    const material = new THREE.MeshStandardMaterial({
      map: rustyMetalTexture,
      color: "#808080",
    });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.scale.y = Math.random() * 0.5 + 0.1;
    mesh.rotation.x = Math.random() * Math.PI;
    mesh.rotation.z = Math.random() * Math.PI;
    return mesh;
  };
  garbageTemplates.push(createCrushedCan());

  // Broken Bottle
  const createBrokenBottle = () => {
    const geometry = new THREE.CylinderGeometry(0.15, 0.15, 0.4, 32);
    const material = new THREE.MeshStandardMaterial({
      map: dirtyPlasticTexture,
      color: "#a6bdbb",
    });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.y = 0.35;
    const brokenPart = new THREE.SphereGeometry(0.15, 32, 32);
    const brokenMaterial = new THREE.MeshStandardMaterial({
      map: dirtyPlasticTexture,
      color: "#a6bdbb",
    });
    const brokenMesh = new THREE.Mesh(brokenPart, brokenMaterial);
    brokenMesh.position.set(0, 0.3, 0);
    mesh.add(brokenMesh);
    return mesh;
  };
  garbageTemplates.push(createBrokenBottle());

  // Crumpled Cardboard Box
  const createCrumpledBox = () => {
    const geometry = new THREE.BoxGeometry(0.6, 0.6, 0.7);
    const material = new THREE.MeshStandardMaterial({
      map: oldCardboardTexture,
      color: "#94826f",
    });

    const positions = geometry.attributes.position.array;
    for (let i = 0; i < positions.length; i += 3) {
      positions[i] += (Math.random() - 0.5) * 0.1; // x
      positions[i + 1] += (Math.random() - 0.5) * 0.1; // y
      positions[i + 2] += (Math.random() - 0.5) * 0.1; // z
    }
    geometry.attributes.position.needsUpdate = true;
    geometry.computeVertexNormals();

    const mesh = new THREE.Mesh(geometry, material);
    return mesh;
  };
  garbageTemplates.push(createCrumpledBox());

  // Trash Bag
  const createTrashBag = () => {
    const geometry = new THREE.SphereGeometry(0.5, 32, 32);
    const material = new THREE.MeshStandardMaterial({
      map: dirtyPlasticTexture,
      color: "#424242",
    });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.scale.y = Math.random() * 0.5 + 0.5;
    return mesh;
  };
  garbageTemplates.push(createTrashBag());

  // Tire
  const createTire = () => {
    const geometry = new THREE.TorusGeometry(0.5, 0.2, 32, 100);
    const material = new THREE.MeshBasicMaterial({
      map: tireTexture,
      color: "#2b2b2b",
    });
    const mesh = new THREE.Mesh(geometry, material);
    return mesh;
  };
  garbageTemplates.push(createTire());

  const createWaffle = () => {
    const geometry = new THREE.CylinderGeometry(0.2, 0.2, 0.05, 32);
    const material = new THREE.MeshBasicMaterial({ map: waffleTexture });
    const mesh = new THREE.Mesh(geometry, material);
    return mesh;
  };

  garbageTemplates.push(createWaffle());

  return garbageTemplates;
};

// Function to create clones of garbage meshes
export const createGarbageMeshes = (count) => {
  const garbageTemplates = createGarbageMeshTemplates();
  const garbageMeshes = [];
  const initialHeight = 10; // Height from which all meshes will fall

  for (let i = 0; i < count; i++) {
    const templateIndex = Math.floor(Math.random() * garbageTemplates.length);
    const template = garbageTemplates[templateIndex].clone();
    template.position.set(Math.random() * 5 - 2.5, initialHeight, 0);
    garbageMeshes.push(template);
  }

  return garbageMeshes;
};

import * as THREE from "three";

// Texture Loader
const textureLoader = new THREE.TextureLoader();
const rustyMetalTexture = textureLoader.load(
  "./textures/Metal_007_Base_Color.png"
);
const oldCardboardTexture = textureLoader.load(
  "./textures/Paper_Recycled_001_COLOR.jpg"
);
const dirtyPlasticTexture = textureLoader.load(
  "./textures/Plastic_004_basecolor.jpg"
);

// Function to create garbage mesh templates
const createGarbageMeshTemplates = () => {
  const garbageTemplates = [];

  // Crushed Can
  const createCrushedCan = () => {
    const geometry = new THREE.CylinderGeometry(0.5, 0.5, 1, 32);
    const material = new THREE.MeshStandardMaterial({
      map: rustyMetalTexture,
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
    const geometry = new THREE.CylinderGeometry(0.3, 0.3, 0.7, 32);
    const material = new THREE.MeshStandardMaterial({
      map: dirtyPlasticTexture,
    });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.y = 0.35;
    const brokenPart = new THREE.SphereGeometry(0.3, 32, 32);
    const brokenMaterial = new THREE.MeshStandardMaterial({
      map: dirtyPlasticTexture,
    });
    const brokenMesh = new THREE.Mesh(brokenPart, brokenMaterial);
    brokenMesh.position.set(0, 0.7, 0);
    mesh.add(brokenMesh);
    return mesh;
  };
  garbageTemplates.push(createBrokenBottle());

  // Crumpled Cardboard Box
  const createCrumpledBox = () => {
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshStandardMaterial({
      map: oldCardboardTexture,
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
    });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.scale.y = Math.random() * 0.5 + 0.5;
    return mesh;
  };
  garbageTemplates.push(createTrashBag());

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

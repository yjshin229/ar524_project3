import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const gltfLoader = new GLTFLoader();

const loadModel = (url) => {
  return new Promise((resolve, reject) => {
    gltfLoader.load(
      url,
      (gltf) => {
        const model = gltf.scene.children[0];
        resolve(model);
      },
      undefined,
      (error) => {
        reject(error);
      }
    );
  });
};

export const preloadModels = (modelUrls) => {
  const modelPromises = modelUrls.map((url) => loadModel(url));
  return Promise.all(modelPromises);
};

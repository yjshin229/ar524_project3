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
  const modelPromises = modelUrls.map((url, index) =>
    loadModel(url).then((model) => {
      switch (index) {
        case 0:
          model.scale.set(2, 2, 2);
          break;
        case 1:
          model.scale.set(0.2, 0.2, 0.2);
          break;
        case 2:
          model.scale.set(0.2, 0.2, 0.2);
          break;
        case 3:
          model.scale.set(0.01, 0.01, 0.01);
          break;
        case 4:
          model.scale.set(1, 1, 1);
          break;
        case 5:
          model.scale.set(0.01, 0.01, 0.01);
          //position change.
          break;
        case 6:
          model.scale.set(0.2, 0.2, 0.2);
          break;
        case 7:
          model.scale.set(0.005, 0.005, 0.005);
          break;
        case 8:
          model.scale.set(0.01, 0.01, 0.01);
          break;
        case 9:
          model.scale.set(0.2, 0.2, 0.2);
          break;
        case 10:
          model.scale.set(0.1, 0.1, 0.1);
          break;
        case 11:
          model.scale.set(0.3, 0.3, 0.3);
          break;
        case 12:
          model.scale.set(0.5, 0.5, 0.5);
          break;
        case 13:
          model.scale.set(0.001, 0.001, 0.001);
          break;
        case 14:
          model.scale.set(0.8, 0.8, 0.8);
          break;
        case 15:
          model.scale.set(0.0005, 0.0005, 0.0005);
          break;
        case 16:
          model.scale.set(0.03, 0.03, 0.03);
          break;
        case 17:
          model.scale.set(0.01, 0.01, 0.01);
          break;
        case 18:
          model.scale.set(0.01, 0.01, 0.01);
          break;
        case 19:
          model.scale.set(0.1, 0.1, 0.1);
          break;
        case 20:
          model.scale.set(0.01, 0.01, 0.01);
          break;
        case 21:
          model.scale.set(0.2, 0.2, 0.2);
          break;
        case 22:
          model.scale.set(0.1, 0.1, 0.1);
          break;
        case 23:
          model.scale.set(0.0008, 0.0008, 0.0008);
          break;
        case 24:
          model.scale.set(0.1, 0.1, 0.1);
          break;
        case 25:
          model.scale.set(0.005, 0.005, 0.005);
          break;
        case 26:
          model.scale.set(0.05, 0.05, 0.05);
          break;
        // Add more cases as needed for other indexes
        default:
          model.scale.set(1, 1, 1); // Default scale
      }
      return model;
    })
  );
  return Promise.all(modelPromises);
};

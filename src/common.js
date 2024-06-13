import {
  Scene,
  PlaneGeometry,
  TextureLoader,
  MeshStandardMaterial,
} from "three";

const textureLoader = new TextureLoader();
const texture = textureLoader.load(
  "./textures/Asphalt_001_COLOR.jpg",
  () => {
    console.log("load complete");
  },
  () => {
    console.log("loading");
  },
  () => {
    console.log("load error");
  }
);

export const cm1 = {
  canvas: document.querySelector("#three-canvas"),
  scene: new Scene(),
};

export const cm2 = {
  backgroundColor: "#808080",
  lightColor: "#ffffff",
  woodColor: "#4f3c30",
};

export const geometry = {
  floor: new PlaneGeometry(50, 50),
};

export const material = {
  floor: new MeshStandardMaterial({ map: texture }),
};

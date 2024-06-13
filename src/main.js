import countCarousel from "./countCarousel";
import header from "./header";
import { createGarbageMeshes } from "./meshes";
import scene from "./scene";

const garbageMeshes = createGarbageMeshes(20);
scene(garbageMeshes);
const $counter = document.querySelector(".count");
countCarousel($counter, 669319000);

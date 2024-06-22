import countCarousel from "./countCarousel";
import header from "./header";
import { createGarbageMeshes } from "./meshes";
import scene from "./scene";
import Title from "./title";

Title();
const garbageMeshes = createGarbageMeshes(20);
scene(garbageMeshes);
const $counter = document.querySelector(".count");
countCarousel($counter, 0, 669319000);

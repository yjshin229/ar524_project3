import header from "./header";
import { createGarbageMeshes } from "./meshes";
import scene from "./scene";

const garbageMeshes = createGarbageMeshes(20);
scene(garbageMeshes);
header();

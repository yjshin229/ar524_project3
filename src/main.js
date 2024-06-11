import header from "./header";
import { createGarbageMeshes } from "./meshes";
import { preloadModels } from "./models";
import scene from "./scene";

// GLTF loader

const modelUrls = [
  "./models/bitten_pizza.glb",
  "./models/cardboard_box.glb",
  "./models/food_can_post-war.glb",
  "./models/orange_fruit.glb",
  "./models/rotten_apple.glb",
  "./models/plastic_chair_1.glb",
  "./models/plastic_chair.glb",
  "./models/plastic_jerrycan.glb",
  "./models/plastic_water_bottle.glb",
  "./models/rotten_avocado.glb",
  "./models/rotten_pumpkin.glb",
  "./models/tire.glb",
  "./models/trash_bag.glb",
  "./models/rusty_can.glb",
  "./models/laptop.glb",
  "./models/pillow.glb",
  "./models/candy_wrapper.glb",
  "./models/broken_wine_bottle.glb",
  "./models/retro_pepsi_can.glb",
  "./models/paper_bag.glb",
  "./models/old_dirty_mattress.glb",
  "./models/towels_pile.glb",
  "./models/barrel.glb",
  "./models/walkie_talkie.glb",
  "./models/trash_bag_1.glb",
  "./models/trash_bag_2.glb",
  "./models/simple_trash_bag.glb",
];

const modelMasses = [
  2, // Mass for bitten_pizza.glb
  0.5, // Mass for cardboard_box.glb
  1, // Mass for food_can_post-war.glb
  0.2, // Mass for orange_fruit.glb
  0.3, // Mass for rotten_apple.glb
  1.5, // Mass for plastic_chair_1.glb
  1.5, // Mass for plastic_chair.glb
  0.8, // Mass for plastic_jerrycan.glb
  0.4, // Mass for plastic_water_bottle.glb
  0.5, // Mass for rotten_avocado.glb
  0.3, // Mass for rotten_pumpkin.glb
  2.5, // Mass for tire.glb
  1, // Mass for trash_bag.glb
  0.6, // Mass for rusty_can.glb
  1.2, // Mass for laptop.glb
  0.7, // Mass for pillow.glb
  0.2, // Mass for candy_wrapper.glb
  0.3, // Mass for broken_wine_bottle.glb
  0.5, // Mass for retro_pepsi_can.glb
  0.4, // Mass for paper_bag.glb
  3, // Mass for old_dirty_mattress.glb
  1.8, // Mass for towels_pile.glb
  3.5, // Mass for barrel.glb
  0.9, // Mass for walkie_talkie.glb
  1.2, // Mass for trash_bag_1.glb
  1.2, // Mass for trash_bag_2.glb
  0.8, // Mass for simple_trash_bag.glb
];

// preloadModels(modelUrls)
//   .then((modelsArr) => {
//     // Call the scene function with the preloaded models
//     scene(modelsArr, modelMasses);
//   })
//   .catch((error) => {
//     console.error("Error loading models:", error);
//   });
const garbageMeshes = createGarbageMeshes();
scene(garbageMeshes);
header();

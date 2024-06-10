import header from "./header";
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

// Array to store preloaded models
let modelsArr = [];

// Preload all models
// preloadModels(modelUrls)
//   .then((models) => {
//     modelsArr = models;

//     // Add random models to the scene
//     //   addRandomModelToScene();
//   })
//   .catch((error) => {
//     console.error("Error loading models:", error);
//   });
preloadModels(modelUrls)
  .then((modelsArr) => {
    // Call the scene function with the preloaded models
    scene(modelsArr);
  })
  .catch((error) => {
    console.error("Error loading models:", error);
  });
header();
// scene(modelsArr);

import * as CANNON from "cannon-es";

export const createSimpleShape = (model) => {
  const shapes = [];

  model.traverse((child) => {
    if (child.isMesh && child.geometry) {
      child.geometry.computeBoundingBox();
      const box = child.geometry.boundingBox;

      const boxShape = new CANNON.Box(
        new CANNON.Vec3(
          (box.max.x - box.min.x) / 2,
          (box.max.y - box.min.y) / 2,
          (box.max.z - box.min.z) / 2
        )
      );

      shapes.push({
        shape: boxShape,
        position: child.position,
        quaternion: child.quaternion,
      });
    }
  });

  return shapes;
};

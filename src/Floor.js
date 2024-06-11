import { Mesh } from "three";
import { cm1, geometry, material } from "./common";
import { Stuff } from "./stuff";

export class Floor extends Stuff {
  constructor(info) {
    super(info);

    this.geometry = geometry.floor;
    this.material = material.floor;

    this.mesh = new Mesh(this.geometry, this.material);
    this.mesh.position.set(this.x, this.y, this.z);
    this.mesh.rotateX(this.rotationX);
    this.mesh.receiveShadow = true;

    cm1.scene.add(this.mesh);
  }
}

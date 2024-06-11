export class Stuff {
  //if not info new object
  constructor(info = {}) {
    this.name = info.name || "";
    this.x = info.x || 0;
    this.y = info.y || 0;
    this.z = info.z || 0;

    this.rotationX = info.rotationX || 0;
    this.rotationY = info.rotationY || 0;
  }
}

import * as CANNON from "cannon-es";

export const defaultMaterial = new CANNON.Material("default");
export const rubberMaterial = new CANNON.Material("rubber");
export const metalMaterial = new CANNON.Material("metal");
export const plasticMaterial = new CANNON.Material("plastic");
export const paperMaterial = new CANNON.Material("paper");

export const defaultContactMaterial = new CANNON.ContactMaterial(
  defaultMaterial,
  defaultMaterial,
  { friction: 0.5, restitution: 0.3 }
);
export const rubberContactMaterial = new CANNON.ContactMaterial(
  defaultMaterial,
  defaultMaterial,
  { friction: 0.2, restitution: 0.8 }
);

export const metalContactMaterial = new CANNON.ContactMaterial(
  metalMaterial,
  metalMaterial,
  { friction: 0.7, restitution: 0 }
);

export const plasticContactMaterial = new CANNON.ContactMaterial(
  plasticMaterial,
  plasticMaterial,
  { friction: 0.5, restitution: 0.1 }
);

export const paperContactMaterial = new CANNON.ContactMaterial(
  paperMaterial,
  paperMaterial,
  { friction: 1, restitution: 0 }
);

export const rubberDefaultContactMaterial = new CANNON.ContactMaterial(
  rubberMaterial,
  defaultMaterial,
  {
    friction: 0.5,
    restitution: 0.7,
  }
);

export const metalDefaultContactMaterial = new CANNON.ContactMaterial(
  metalMaterial,
  defaultMaterial,
  {
    friction: 0.5,
    restitution: 0,
  }
);

export const plasticDefaultContactMaterial = new CANNON.ContactMaterial(
  plasticMaterial,
  defaultMaterial,
  {
    friction: 0.5,
    restitution: 0.1,
  }
);

export const paperDefaultContactMaterial = new CANNON.ContactMaterial(
  paperMaterial,
  defaultMaterial,
  {
    friction: 0, //?
    restitution: 0,
  }
);

export const rubberMetalContactMaterial = new CANNON.ContactMaterial(
  rubberMaterial,
  metalMaterial,
  {
    friction: 0.5,
    restitution: 0.3,
  }
);

export const rubberPlasticContactMaterial = new CANNON.ContactMaterial(
  rubberMaterial,
  plasticMaterial,
  {
    friction: 0.5,
    restitution: 0.4,
  }
);

export const rubberPaperContactMaterial = new CANNON.ContactMaterial(
  rubberMaterial,
  paperMaterial,
  {
    friction: 0.5,
    restitution: 0,
  }
);

export const metalPlasticContactMaterial = new CANNON.ContactMaterial(
  metalMaterial,
  plasticMaterial,
  {
    friction: 0.5,
    restitution: 0.2,
  }
);

export const metalPaperContactMaterial = new CANNON.ContactMaterial(
  metalMaterial,
  paperMaterial,
  {
    friction: 0.5,
    restitution: 0,
  }
);

export const paperPlasticContactMaterial = new CANNON.ContactMaterial(
  paperMaterial,
  plasticMaterial,
  {
    friction: 0.5,
    restitution: 0,
  }
);

import * as CANNON from "cannon-es";

export const defaultMaterial = new CANNON.Material("default");
export const rubberMaterial = new CANNON.Material("rubber");
export const ironMaterial = new CANNON.Material("iron");
export const plasticMaterial = new CANNON.Material("plastic");
export const cottonMaterial = new CANNON.Material("cotton");

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

export const ironContactMaterial = new CANNON.ContactMaterial(
  ironMaterial,
  ironMaterial,
  { friction: 0.7, restitution: 0 }
);

export const plasticContactMaterial = new CANNON.ContactMaterial(
  plasticMaterial,
  plasticMaterial,
  { friction: 0.5, restitution: 0.1 }
);

export const cottonContactMaterial = new CANNON.ContactMaterial(
  cottonMaterial,
  cottonMaterial,
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

export const ironDefaultContactMaterial = new CANNON.ContactMaterial(
  ironMaterial,
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

export const cottonDefaultContactMaterial = new CANNON.ContactMaterial(
  cottonMaterial,
  defaultMaterial,
  {
    friction: 0, //?
    restitution: 0,
  }
);

export const rubberIronContactMaterial = new CANNON.ContactMaterial(
  rubberMaterial,
  ironMaterial,
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

export const rubberCottonContactMaterial = new CANNON.ContactMaterial(
  rubberMaterial,
  cottonMaterial,
  {
    friction: 0.5,
    restitution: 0,
  }
);

export const ironPlasticContactMaterial = new CANNON.ContactMaterial(
  ironMaterial,
  plasticMaterial,
  {
    friction: 0.5,
    restitution: 0.2,
  }
);

export const ironCottonContactMaterial = new CANNON.ContactMaterial(
  ironMaterial,
  cottonMaterial,
  {
    friction: 0.5,
    restitution: 0,
  }
);

export const cottonPlasticContactMaterial = new CANNON.ContactMaterial(
  cottonMaterial,
  plasticMaterial,
  {
    friction: 0.5,
    restitution: 0,
  }
);

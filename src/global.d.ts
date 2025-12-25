export {};

declare module '*.glb';
declare module '*.png';

declare module 'meshline' {
  export const MeshLineGeometry: unknown;
  export const MeshLineMaterial: unknown;
}

declare module '@react-three/fiber' {
  interface ThreeElements {
    meshLineGeometry: unknown;
    meshLineMaterial: unknown;
  }
}

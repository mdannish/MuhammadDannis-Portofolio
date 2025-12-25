/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-unused-vars */
export { };

declare module '*.glb';
declare module '*.png';

declare module 'meshline' {
  export const MeshLineGeometry: unknown;
  export const MeshLineMaterial: unknown;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      meshLineGeometry: unknown;
      meshLineMaterial: unknown;
    }
  }
}

- src/vite-env.d.ts
/// <reference types="vite/client" />
declare module '*.glb';
declare module '*.png';

/// <reference types="dcl" />
import { ImageSection } from "./types";
export declare const canvas: UICanvas;
export declare let SFFont: Font;
export declare let SFHeavyFont: Font;
export declare let lightTheme: Texture;
export declare let darkTheme: Texture;
export declare let bubblesTexture: Texture;
export declare function setUVs(plane: PlaneShape, _uv00: Vector2, _uv10: Vector2, _uv11: Vector2, _uv01: Vector2): void;
export declare function setUVSection(plane: PlaneShape, section: ImageSection, sizeX?: number, sizeY?: number): void;

export enum SHAPES {
  RECTANGLE = "RECTANGLE",
  ELLIPSE = "ELLIPSE",
}

export type ShapeType = SHAPES.RECTANGLE | SHAPES.ELLIPSE;

export enum DRAWING_TYPES {
  OUTLINE = "OUTLINE",
  FILL = "FILL",
}

export type DrawingType = DRAWING_TYPES.OUTLINE | DRAWING_TYPES.FILL;

export interface CanvasShapeType {
  shape: ShapeType;
  drawingType: DrawingType;
  color: string;
  x: number;
  y: number;
  width: number;
  height: number;
}

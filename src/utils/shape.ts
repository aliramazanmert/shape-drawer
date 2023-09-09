import {
  ShapeType,
  SHAPES,
  DrawingType,
  DRAWING_TYPES,
} from "../constants/shapes";

export const drawShapeUtil = (
  ctx: CanvasRenderingContext2D,
  shape: ShapeType,
  drawingType: DrawingType,
  color: string,
  x: number,
  y: number,
  width: number,
  height: number
) => {
  ctx?.beginPath();
  handleShape(ctx, shape, x, y, width, height);
  handleDrawingType(ctx, drawingType, color);
  ctx?.closePath();
};

export const handleShape = (
  ctx: CanvasRenderingContext2D,
  shape: ShapeType,
  x: number,
  y: number,
  width: number,
  height: number
) => {
  switch (shape) {
    case SHAPES.RECTANGLE:
      ctx.rect(x, y, width, height);
      return;
    case SHAPES.ELLIPSE:
      ctx.ellipse(
        x + width / 2,
        y + height / 2,
        width / 2,
        height / 2,
        0,
        0,
        2 * Math.PI
      );
      return;
  }
};

export const handleDrawingType = (
  ctx: CanvasRenderingContext2D,
  drawingType: DrawingType,
  color: string
) => {
  switch (drawingType) {
    case DRAWING_TYPES.OUTLINE:
      ctx.strokeStyle = color;
      ctx.stroke();
      return;
    case DRAWING_TYPES.FILL:
      ctx.fillStyle = color;
      ctx.fill();
      return;
  }
};

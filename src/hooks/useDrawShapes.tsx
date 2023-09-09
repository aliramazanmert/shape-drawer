import { useContext, useEffect, useRef } from "react";
import { ShapesContext } from "../context/Shapes";
import { SettingsContext } from "../context/Settings";
import { drawShapeUtil } from "../utils/shape";

export const useDrawShapes = () => {
  const ref = useRef<HTMLCanvasElement>(null);

  const { shapes } = useContext(ShapesContext);
  const {
    width: canvasWidth,
    height: canvasHeight,
    cursorX,
    cursorY,
    setPixelColor,
  } = useContext(SettingsContext);

  useEffect(() => {
    if (!ref?.current) return;

    drawShapes();

    return clearCanvas;
    // eslint-disable-next-line
  }, [canvasHeight, canvasWidth, shapes, ref]);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d");
    const rgbData = ctx?.getImageData(cursorX, cursorY, 1, 1).data;

    if (rgbData?.[3] === 0) {
      setPixelColor("#ffffff");
      return;
    }

    setPixelColor(`rgb(${rgbData?.[0]}, ${rgbData?.[1]}, ${rgbData?.[2]})`);
  }, [cursorX, cursorY]);

  const clearCanvas = () => {
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d");
    ctx?.clearRect(0, 0, canvasWidth, canvasHeight);
  };

  const drawShapes = () => {
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d");

    shapes.forEach((shapeItem) => {
      const { shape, drawingType, color, x, y, width, height } = shapeItem;
      drawShapeUtil(ctx!, shape, drawingType, color, x, y, width, height);
    });
  };

  return ref;
};

import { useContext, useEffect, useRef } from "react";
import { ShapesContext } from "../context/Shapes";
import { SettingsContext } from "../context/Settings";
import { drawShapeUtil } from "../utils/shape";
import { throttle } from "lodash";

interface Coordinate {
  x: number;
  y: number;
}

export const useDrawShapePreview = () => {
  let prevWidth = 0;
  let prevHeight = 0;
  let prevX = 0;
  let prevY = 0;
  let initialCoordinates: Coordinate;
  let debouncedDrawShape: any;

  const ref = useRef<HTMLCanvasElement>(null);

  const { setShapes } = useContext(ShapesContext);
  const { color, shape, drawingType, setCursorX, setCursorY } =
    useContext(SettingsContext);

  useEffect(() => {
    return window.removeEventListener("mouseUp", removeMouseMoveListener);
    // eslint-disable-next-line
  }, []);

  const handleDrawShapePreview = (e: React.MouseEvent<HTMLElement>) => {
    initialCoordinates = { x: e.clientX, y: e.clientY };
    debouncedDrawShape = throttle(drawShape, 10);
    window.addEventListener("mousemove", debouncedDrawShape);
    window.addEventListener("mouseup", removeMouseMoveListener);
  };

  const drawShape = (e: MouseEvent) => {
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d");

    if (!initialCoordinates) return;

    const { x: initialX, y: initialY } = initialCoordinates as Coordinate;

    ctx?.clearRect(prevX - 1, prevY - 1, prevWidth + 2, prevHeight + 2);

    const x =
      Math.min(initialX, e.clientX) - canvas?.getBoundingClientRect()?.x!;
    const y =
      Math.min(initialY, e.clientY) - canvas?.getBoundingClientRect()?.y!;
    const width = Math.abs(e.clientX - initialX);
    const height = Math.abs(e.clientY - initialY);

    drawShapeUtil(ctx!, shape, drawingType, color, x, y, width, height);

    prevX = x;
    prevY = y;
    prevWidth = width;
    prevHeight = height;
  };

  const removeMouseMoveListener = () => {
    const canvas = ref.current;
    let ctx = canvas?.getContext("2d");
    ctx?.clearRect(prevX - 1, prevY - 1, prevWidth + 2, prevHeight + 2);

    setShapes((prev) => {
      const newShapes = [
        ...prev,
        {
          x: prevX,
          y: prevY,
          width: prevWidth,
          height: prevHeight,
          color,
          drawingType,
          shape,
        },
      ];
      return newShapes;
    });

    window.removeEventListener("mousemove", debouncedDrawShape);
    window.removeEventListener("mouseup", removeMouseMoveListener);
  };

  const setCursorPosition = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = ref.current;
    setCursorX(e.clientX - canvas?.getBoundingClientRect().x!);
    setCursorY(e.clientY - canvas?.getBoundingClientRect().y!);
  };

  return { ref, handleDrawShapePreview, setCursorPosition };
};

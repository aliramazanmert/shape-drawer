import { useContext, useEffect, useRef } from "react";
import * as S from "./styles";
import { drawShapeUtil } from "../../utils/shape";
import { ShapesContext } from "../../context/Shapes";
import { SettingsContext } from "../../context/Settings";
import { useDrawShapes } from "../../hooks/useDrawShapes";

const Canvas = () => {
  const { width: canvasWidth, height: canvasHeight } =
    useContext(SettingsContext);

  const ref = useDrawShapes();

  return (
    <canvas
      ref={ref}
      id="canvas"
      width={`${canvasWidth}px`}
      height={`${canvasHeight}px`}
    />
  );
};

export default Canvas;

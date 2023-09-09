import React, { useContext, useEffect, useRef } from "react";
import { ShapesContext } from "../../context/Shapes";
import { throttle } from "lodash";
import { drawShapeUtil } from "../../utils/shape";
import { SettingsContext } from "../../context/Settings";
import { useDrawShapePreview } from "../../hooks/useDrawShapePreview";

const DrawerCanvas = () => {
  const { ref, handleDrawShapePreview, setCursorPosition } =
    useDrawShapePreview();

  const { width: canvasWidth, height: canvasHeight } =
    useContext(SettingsContext);

  return (
    <canvas
      ref={ref}
      onMouseDown={handleDrawShapePreview}
      onMouseMove={setCursorPosition}
      width={`${canvasWidth}px`}
      height={`${canvasHeight}px`}
    />
  );
};

export default DrawerCanvas;

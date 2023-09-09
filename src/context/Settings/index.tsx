import React, { Dispatch, SetStateAction, useState } from "react";
import {
  DRAWING_TYPES,
  DrawingType,
  SHAPES,
  ShapeType,
} from "../../constants/shapes";

interface SettingsContextType {
  width: number;
  height: number;
  setWidth: Dispatch<SetStateAction<number>>;
  setHeight: Dispatch<SetStateAction<number>>;
  color: string;
  setColor: Dispatch<SetStateAction<string>>;
  shape: ShapeType;
  setShape: Dispatch<SetStateAction<ShapeType>>;
  drawingType: DrawingType;
  setDrawingType: Dispatch<SetStateAction<DrawingType>>;
  cursorX: number;
  setCursorX: Dispatch<SetStateAction<number>>;
  cursorY: number;
  setCursorY: Dispatch<SetStateAction<number>>;
  pixelColor: string;
  setPixelColor: Dispatch<SetStateAction<string>>;
}

export const SettingsContext = React.createContext<SettingsContextType>({
  width: 720,
  height: 720,
  setWidth: () => {},
  setHeight: () => {},
  color: "#000000",
  setColor: () => {},
  shape: SHAPES.RECTANGLE,
  setShape: () => {},
  drawingType: DRAWING_TYPES.OUTLINE,
  setDrawingType: () => {},
  cursorX: 0,
  setCursorX: () => {},
  cursorY: 0,
  setCursorY: () => {},
  pixelColor: "#ffffff",
  setPixelColor: () => {},
});

interface Props {
  children: React.ReactNode;
}

const Settings = ({ children }: Props) => {
  const [width, setWidth] = useState(720);
  const [height, setHeight] = useState(720);
  const [color, setColor] = useState("#000000");
  const [shape, setShape] = useState(SHAPES.RECTANGLE);
  const [drawingType, setDrawingType] = useState(DRAWING_TYPES.OUTLINE);
  const [cursorX, setCursorX] = useState(0);
  const [cursorY, setCursorY] = useState(0);
  const [pixelColor, setPixelColor] = useState("#ffffff");

  return (
    <SettingsContext.Provider
      value={{
        width,
        height,
        setWidth,
        setHeight,
        color,
        setColor,
        shape,
        setShape,
        drawingType,
        setDrawingType,
        cursorX,
        setCursorX,
        cursorY,
        setCursorY,
        pixelColor,
        setPixelColor,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export default Settings;

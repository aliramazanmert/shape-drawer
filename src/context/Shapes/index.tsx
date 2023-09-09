import React, { Dispatch, SetStateAction, useState } from "react";
import { CanvasShapeType } from "../../constants/shapes";

interface ShapesContextType {
  shapes: CanvasShapeType[];
  setShapes: Dispatch<SetStateAction<CanvasShapeType[]>>;
  undoneShapes: any[];
  undo: () => void;
  redo: () => void;
}

export const ShapesContext = React.createContext<ShapesContextType>({
  shapes: [],
  setShapes: () => {},
  undoneShapes: [],
  undo: () => {},
  redo: () => {},
});

interface Props {
  children: React.ReactNode;
}

const Shapes = ({ children }: Props) => {
  const [shapes, setShapes] = useState<CanvasShapeType[]>([]);
  const [undoneShapes, setUndoneShapes] = useState<CanvasShapeType[]>([]);

  const undo = () => {
    if (shapes.length === 0) return;

    const undoneItem = shapes.at(-1);

    setShapes((prev) => {
      return prev.slice(0, -1);
    });

    setUndoneShapes((prev) => {
      return [...prev, undoneItem!];
    });
  };

  const redo = () => {
    if (undoneShapes.length === 0) return;

    const redoneItem = undoneShapes.at(-1);

    setUndoneShapes((prev) => {
      return prev.slice(0, -1);
    });

    setShapes((prev) => {
      return [...prev, redoneItem!];
    });
  };

  return (
    <ShapesContext.Provider
      value={{
        shapes,
        setShapes,
        undoneShapes,
        undo,
        redo,
      }}
    >
      {children}
    </ShapesContext.Provider>
  );
};

export default Shapes;

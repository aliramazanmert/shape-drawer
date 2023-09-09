import { useContext } from "react";
import * as S from "./styles";
import {
  DRAWING_TYPES,
  DrawingType,
  SHAPES,
  ShapeType,
} from "../../constants/shapes";
import { SettingsContext } from "../../context/Settings";

const SHAPE_OPTIONS = [
  {
    id: SHAPES.RECTANGLE,
    name: "Rectangle",
    icon: <S.Rectangle />,
  },
  {
    id: SHAPES.ELLIPSE,
    name: "Ellipse",
    icon: <S.Ellipse />,
  },
];

const DRAWING_OPTIONS = [
  {
    id: DRAWING_TYPES.OUTLINE,
    name: "Outline",
    icon: <S.Outline />,
  },
  {
    id: DRAWING_TYPES.FILL,
    name: "Fill",
    icon: <S.Fill />,
  },
];

const ShapeSelector = () => {
  const {
    shape: selectedShape,
    setShape,
    drawingType: selectedDrawingType,
    setDrawingType,
  } = useContext(SettingsContext);

  const handleShapeClick = (shape: ShapeType) => () => {
    setShape(shape);
  };

  const handleDrawingTypeClick = (drawingType: DrawingType) => () => {
    setDrawingType(drawingType);
  };

  return (
    <S.Container>
      <div>Shape Options</div>
      <S.OptionsContainer>
        {SHAPE_OPTIONS.map((shape) => (
          <S.OptionOutline
            onClick={handleShapeClick(shape.id)}
            isSelected={selectedShape === shape.id}
          >
            <S.Option>
              <div>{shape.icon}</div>
              <div>{shape.name}</div>
            </S.Option>
          </S.OptionOutline>
        ))}
      </S.OptionsContainer>

      <div>Drawing Options</div>
      <S.OptionsContainer>
        {DRAWING_OPTIONS.map((drawingType) => (
          <S.OptionOutline
            onClick={handleDrawingTypeClick(drawingType.id)}
            isSelected={selectedDrawingType === drawingType.id}
          >
            <S.Option>
              <div>{drawingType.icon}</div>
              <div>{drawingType.name}</div>
            </S.Option>
          </S.OptionOutline>
        ))}
      </S.OptionsContainer>
    </S.Container>
  );
};

export default ShapeSelector;

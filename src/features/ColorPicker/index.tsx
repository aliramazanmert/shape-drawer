import { useContext } from "react";
import * as S from "./styles";
import { SettingsContext } from "../../context/Settings";

const COLORS = ["#000000", "#75C2F6", "#F4D160", "#F31559", "#A8DF8E"];

const ColorPicker = () => {
  const { color: selectedColor, setColor } = useContext(SettingsContext);

  const handleColorClick = (color: string) => () => {
    setColor(color);
  };

  return (
    <S.Container>
      {COLORS.map((color) => (
        <S.ColorOutline isSelected={color === selectedColor}>
          <S.Color color={color} onClick={handleColorClick(color)} />
        </S.ColorOutline>
      ))}
    </S.Container>
  );
};

export default ColorPicker;

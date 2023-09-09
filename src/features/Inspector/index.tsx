import { useContext } from "react";
import * as S from "./styles";
import { SettingsContext } from "../../context/Settings";

const Inspector = () => {
  const { pixelColor, cursorX, cursorY } = useContext(SettingsContext);

  return (
    <S.Container>
      <S.Row>
        <div>X: {cursorX}</div>
        <div>Y: {cursorY}</div>
      </S.Row>
      <S.Row>
        <div>Color: </div>
        <S.ColorDisplay color={pixelColor} />
      </S.Row>
    </S.Container>
  );
};

export default Inspector;

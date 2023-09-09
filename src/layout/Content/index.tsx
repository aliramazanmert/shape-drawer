import { useContext } from "react";
import * as S from "./styles";
import Canvas from "../../features/Canvas";

import { SettingsContext } from "../../context/Settings";
import DrawerCanvas from "../../features/DrawerCanvas";

const Content = () => {
  const { width: canvasWidth, height: canvasHeight } =
    useContext(SettingsContext);

  return (
    <S.Container>
      <S.CanvasContainer canvasHeight={canvasHeight} canvasWidth={canvasWidth}>
        <Canvas />
        <DrawerCanvas />
      </S.CanvasContainer>
    </S.Container>
  );
};

export default Content;

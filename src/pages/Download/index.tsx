import React, { useContext } from "react";
import * as S from "./styles";
import Canvas from "../../features/Canvas";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { CanvasContainer } from "../../layout/Content/styles";
import { formatDateForFilename } from "../../utils/date";
import { SettingsContext } from "../../context/Settings";

const Drawing = () => {
  const navigate = useNavigate();
  const { width, height } = useContext(SettingsContext);

  const handleBackToEditing = () => {
    navigate("/");
  };

  const handleDownload = () => {
    var link = document.createElement("a");
    const date = new Date();
    link.download = `Shapes-${formatDateForFilename(date)}.png`;
    link.href = (
      document.getElementById("canvas")! as HTMLCanvasElement
    ).toDataURL();
    link.click();
  };

  return (
    <S.Container>
      <CanvasContainer canvasHeight={height} canvasWidth={width}>
        <Canvas />
      </CanvasContainer>
      <S.ButtonsContainer>
        <Button color="lightGray" onClick={handleBackToEditing}>
          Continue Editing
        </Button>
        <Button onClick={handleDownload}>Download Image File</Button>
      </S.ButtonsContainer>
    </S.Container>
  );
};

export default Drawing;

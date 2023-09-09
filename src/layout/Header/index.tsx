import { useContext } from "react";
import Button from "../../components/Button";
import * as S from "./styles";
import { useNavigate } from "react-router-dom";
import { ShapesContext } from "../../context/Shapes";

const Header = () => {
  const navigate = useNavigate();
  const { undo, redo } = useContext(ShapesContext);

  const handleNavigateDownloadPage = () => {
    navigate("/download");
  };

  return (
    <S.Container>
      <Button onClick={undo}>Undo</Button>
      <Button onClick={redo}>Redo</Button>
      <Button onClick={handleNavigateDownloadPage} color="#7091F5">
        Download
      </Button>
    </S.Container>
  );
};

export default Header;

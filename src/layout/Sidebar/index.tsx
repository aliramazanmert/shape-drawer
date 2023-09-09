import Collapse from "../../components/Collapse";
import ColorPicker from "../../features/ColorPicker";
import Inspector from "../../features/Inspector";
import ShapeSelector from "../../features/ShapeSelector";
import SizeChanger from "../../features/SizeChanger";
import * as S from "./styles";

const items = [
  {
    key: 0,
    label: "Project Size",
    content: <SizeChanger />,
  },
  {
    key: 1,
    label: "Color",
    content: <ColorPicker />,
  },
  {
    key: 2,
    label: "Shape",
    content: <ShapeSelector />,
  },
  {
    key: 3,
    label: "Inspect",
    content: <Inspector />,
  },
];

const Sidebar = () => {
  return (
    <S.Container>
      <Collapse items={items} />
    </S.Container>
  );
};

export default Sidebar;

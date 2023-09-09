import React, { useContext } from "react";
import Slider from "../../components/Slider";
import { debounce } from "lodash";
import * as S from "./styles";
import { SettingsContext } from "../../context/Settings";

const DEBOUNCE_TIME_MS = 150;

const SizeChanger = () => {
  const { setWidth, setHeight } = useContext(SettingsContext);

  const handleWidthChange = (value: number) => {
    setWidth(value);
  };

  const handleHeightChange = (value: number) => {
    setHeight(value);
  };

  return (
    <S.Container>
      <div>Width</div>
      <Slider
        min={36}
        max={2048}
        defaultValue={720}
        onChange={debounce(handleWidthChange, DEBOUNCE_TIME_MS)}
      />
      <div>Height</div>
      <Slider
        min={36}
        max={2048}
        defaultValue={720}
        onChange={debounce(handleHeightChange, DEBOUNCE_TIME_MS)}
      />
    </S.Container>
  );
};

export default SizeChanger;

import React, { useEffect, useRef, useState } from "react";
import * as S from "./styles";

interface Props {
  min: number;
  max: number;
  defaultValue: number;
  onChange: (value: number) => void;
}

const Slider = ({ min, max, defaultValue, onChange }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    setBackgroundSizeStyleProperty(defaultValue);
  }, [defaultValue]);

  const handleChange = (value: number) => {
    setBackgroundSizeStyleProperty(value);
    setValue(value);
    onChange(value);
  };

  const setBackgroundSizeStyleProperty = (value: number) => {
    let percentage = ((value - min) * 100) / (max - min);
    ref.current!.style.backgroundSize = percentage + "% 100%";
  };

  return (
    <S.Container>
      <S.SliderInput
        type="range"
        ref={ref}
        defaultValue={defaultValue}
        onChange={(e) => handleChange(parseInt(e.target.value, 10))}
        min={min}
        max={max}
      />
      <div>{value}</div>
    </S.Container>
  );
};

export default Slider;

import styled from "styled-components";

export const SliderInput = styled.input`
  -webkit-appearance: none;
  appearance: none;
  height: 5px;
  width: 250px;
  background: rgba(255, 255, 255, 0.6);
  background-image: linear-gradient(#91caff, #91caff);
  background-size: 0% 100%;
  background-repeat: no-repeat;
  border-radius: 5px;
  border: 1px solid #c8c8c8;
  cursor: pointer;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    height: 14px;
    width: 14px;
    border-radius: 50%;
    background: white;
    cursor: pointer;
    box-shadow: 0 0 2px 0 #555;
    border: 1px solid #91caff;
    transition: transform linear 0.2s;
  }

  &::-moz-range-thumb {
    -webkit-appearance: none;
    appearance: none;
    height: 14px;
    width: 14px;
    border-radius: 50%;
    background: white;
    cursor: pointer;
    box-shadow: 0 0 2px 0 #555;
    border: 1px solid #91caff;
    transition: transform linear 0.2s;
  }

  &:hover::-webkit-slider-thumb {
    border: 2px solid #69b1ff;
    transform: scale(1.5);
  }

  &:focus::-webkit-slider-thumb {
    border: 2px solid #69b1ff;
    transform: scale(1.5);
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 12px;
`;

import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const OptionsContainer = styled.div`
  display: flex;
  gap: 24px;
`;

export const OptionOutline = styled.div<{ isSelected: boolean }>`
  visibility: ${(props) => (props.isSelected ? "visible" : "hidden")};
  padding: 2px;
  border: 2px solid #69b1ff66;
  background: #91caff33;
`;

export const Option = styled.div`
  visibility: visible;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1px;
  font-size: 9px;
  cursor: pointer;
`;

export const Rectangle = styled.div`
  width: 16px;
  height: 12px;
  border: 1px solid black;
`;

export const Ellipse = styled.div`
  width: 16px;
  height: 12px;
  border: 1px solid black;
  border-radius: 50%;
`;

export const Outline = styled.div`
  width: 16px;
  height: 12px;
  border: 1px dotted black;
`;

export const Fill = styled.div`
  width: 16px;
  height: 12px;
  background-color: black;
  border: 1px solid black;
`;

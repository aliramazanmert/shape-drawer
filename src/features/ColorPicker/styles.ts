import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const ColorOutline = styled.div<{ isSelected: boolean }>`
  visibility: ${(props) => (props.isSelected ? "visible" : "hidden")};
  padding: 1px;
  border: dotted 2px #69b1ff;
`;

export const Color = styled.div<{ color: string }>`
  visibility: visible;
  background-color: ${(props) => props.color};
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Row = styled.div`
  display: flex;
  gap: 12px;
`;

export const ColorDisplay = styled.div<{ color: string }>`
  height: 36px;
  width: 36px;
  background-color: ${(props) => props.color};
  border: 1px solid black;
`;

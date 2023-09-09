import styled from "styled-components";

export const Container = styled.div`
  min-width: 800px;
  min-height: calc(100vh - 230px);
  background-color: gray;
  position: relative;
  display: flex;
  align-items: center;
  padding: 64px;
  overflow-x: auto;
  width: calc(100vw - 528px);

  &::before,
  &::after {
    content: ""; /* Insert pseudo-element */
    margin: auto; /* Make it push flex items to the center */
  }
`;

export const CanvasContainer = styled.div<{
  canvasWidth: number;
  canvasHeight: number;
}>`
  position: relative;
  background-color: white;
  width: ${(props) => props.canvasWidth}px;
  height: ${(props) => props.canvasHeight}px;
  display: grid;
  > canvas {
    grid-column: 1;
    grid-row: 1;
  }
  //overflow-x: auto;
`;

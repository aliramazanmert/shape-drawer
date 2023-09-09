import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.div<{ backgroundColor: string }>`
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.backgroundColor};
  cursor: pointer;
  padding: 12px 0;
  font-weight: bold;
  border: 1px solid #f8f6f4;
`;

export const Content = styled.div<{ height: number; visible: boolean }>`
  height: ${(props) => (props.visible ? props.height + "px" : 0)};
  overflow: hidden;
  transition: height 0.5s;
  //transition: padding 0s linear 0.5s;
  background-color: #f8f6f4;
  padding: ${(props) => (props.visible ? "16px 0" : 0)};
  padding-left: 16px;
  padding-right: 16px;
`;

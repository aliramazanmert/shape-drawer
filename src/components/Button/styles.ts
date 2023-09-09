import styled from "styled-components";

export const StyledButton = styled.div`
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  background-color: ${(props) => props.color || "#337CCF"};
  cursor: pointer;

  &:hover {
    opacity: 0.9 !important;
  }

  &:active {
    opacity: 0.75 !important;
  }
`;

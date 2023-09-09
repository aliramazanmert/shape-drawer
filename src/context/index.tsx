import React from "react";
import Shapes from "./Shapes";
import Settings from "./Settings";

interface Props {
  children: React.ReactNode;
}

const Context = ({ children }: Props) => {
  return (
    <Shapes>
      <Settings>{children}</Settings>
    </Shapes>
  );
};

export default Context;

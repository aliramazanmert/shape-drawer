import React from "react";
import Header from "../../layout/Header";
import Content from "../../layout/Content";
import Sidebar from "../../layout/Sidebar";
import * as S from "./styles";

const Drawing = () => {
  return (
    <S.Container>
      <S.LeftArea>
        <Header />
        <Content />
      </S.LeftArea>
      <Sidebar />
    </S.Container>
  );
};

export default Drawing;

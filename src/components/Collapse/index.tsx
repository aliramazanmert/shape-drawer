import React, { useState } from "react";
import * as S from "./styles";

const LABEL_BACKGROUND_COLORS = ["#AEC3AE", "#E4E4D0", "#FFEEF4", "#ADC4CE"];

interface PanelItem {
  key: string | number;
  label: string;
  content: React.ReactNode;
}

interface Props {
  items: PanelItem[];
}
const Collapse = ({ items }: Props) => {
  const [selectedPanelKey, setSelectedPanelKey] = useState<string | number>();
  const [selectedContentHeight, setSelectedContentHeight] = useState(0);

  const handlePanelClick = (
    e: React.MouseEvent<HTMLElement>,
    panelKey: string | number
  ) => {
    if (panelKey === selectedPanelKey) return;

    setSelectedPanelKey(panelKey);
    const contentElement = (e.target as any).nextElementSibling;
    setSelectedContentHeight(contentElement.scrollHeight);
  };

  return (
    <S.Container>
      {items.map((panelItem, index) => (
        <div key={panelItem.key}>
          <S.Label
            backgroundColor={
              LABEL_BACKGROUND_COLORS[index % LABEL_BACKGROUND_COLORS.length]
            }
            onClick={(e) => handlePanelClick(e, panelItem.key)}
          >
            {panelItem.label}
          </S.Label>
          <S.Content
            height={selectedContentHeight}
            visible={panelItem.key === selectedPanelKey}
          >
            {panelItem.content}
          </S.Content>
        </div>
      ))}
    </S.Container>
  );
};

export default Collapse;

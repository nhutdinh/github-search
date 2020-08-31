import React from "react";
import { TabsTitleStyled, TabTitleStyled } from "./Tabs.styled";

interface TabsProps {
  tabs: { title: string | React.ReactNode; content: React.ReactNode }[];
}
const Tabs: React.FC<TabsProps> = (props: TabsProps): React.ReactElement => {
  const [activeIndex, setActiveIndex] = React.useState<number>(0);
  return (
    <>
      <TabsTitleStyled>
        {props.tabs.map((tab, index) => (
          <TabTitleStyled
            active={activeIndex === index}
            key={index}
            onClick={(): void => setActiveIndex(index)}
          >
            {tab.title}
          </TabTitleStyled>
        ))}
      </TabsTitleStyled>
      <div>{props.tabs[activeIndex].content}</div>
    </>
  );
};
export default Tabs;

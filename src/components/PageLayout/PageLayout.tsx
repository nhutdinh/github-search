import React from "react";
import {
  PageLayoutHeaderStyled,
  PageLayoutStyled,
  PageLayoutContentStyled,
} from "./PageLayout.styled";
import CommunitySvg from "../Icons/CommunitySvg";
interface PageLayoutProps {
  children: {
    header: React.ReactNode;
    content: React.ReactNode;
  };
}
const PageLayout: React.FC<PageLayoutProps> = (props: PageLayoutProps) => {
  return (
    <PageLayoutStyled>
      <PageLayoutHeaderStyled>
        <div>
          <CommunitySvg />
        </div>
        <div>{props.children.header}</div>
      </PageLayoutHeaderStyled>
      <PageLayoutContentStyled>
        {props.children.content}
      </PageLayoutContentStyled>
    </PageLayoutStyled>
  );
};
export default PageLayout;

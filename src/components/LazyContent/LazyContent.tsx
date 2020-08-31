import React from "react";
import { LazyContentStyled } from "./LazyContent.styled";
import Loader from "../Loader/Loader";

interface LazyContentProps {
  children?: React.ReactNode;
  loading?: boolean;
}
const LazyContent: React.FC<LazyContentProps> = (props: LazyContentProps) => {
  return (
    <LazyContentStyled>
      {props.children}
      <Loader loading={props.loading} />
    </LazyContentStyled>
  );
};
export default LazyContent;

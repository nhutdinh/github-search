import React from "react";
import { LoaderStyled } from "./Loader.styled";
import LoaderCircleSvg from "../Icons/LoaderCircleSvg";

interface LoaderProps {
  loading?: boolean;
}
const Loader: React.FC<LoaderProps> = (props: LoaderProps) => {
  return (
    <>
      {props.loading && (
        <LoaderStyled>
          <LoaderCircleSvg />
          Loading...
        </LoaderStyled>
      )}
    </>
  );
};
export default Loader;

import React from "react";
import { ErrorBoundaryStyled } from "./ErrorBoundary.styled";

interface ErrorBoundaryProps {
  children?: React.ReactNode;
  error: string;
}
const ErrorBoundary: React.FC<ErrorBoundaryProps> = (
  props: ErrorBoundaryProps
) => {
  return (
    <>
      {!props.error ? (
        props.children
      ) : (
        <ErrorBoundaryStyled>{props.error}</ErrorBoundaryStyled>
      )}
    </>
  );
};
export default ErrorBoundary;

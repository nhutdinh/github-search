import React from "react";
import { EmptyStateStyled } from "./EmptyState.styled";

interface EmptyStateProps {
  children?: React.ReactNode;
}
const EmptyState: React.FC<EmptyStateProps> = (props: EmptyStateProps) => {
  return <EmptyStateStyled>{props.children}</EmptyStateStyled>;
};
export default EmptyState;

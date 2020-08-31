import React from "react";
import { LoadMoreStyled } from "./LoadMore.styled";
import Loader from "../Loader/Loader";

interface LoadMoreProps {
  loadMore: () => void;
  isLastPage?: boolean;
  loading?: boolean;
}

const LoadMore: React.FC<LoadMoreProps> = (props: LoadMoreProps) => {
  return !props.isLastPage ? (
    <div>
      <Loader loading={props.loading} />
      {!props.loading && (
        <LoadMoreStyled onClick={props.loadMore}>Load More</LoadMoreStyled>
      )}
    </div>
  ) : (
    <></>
  );
};
export default LoadMore;

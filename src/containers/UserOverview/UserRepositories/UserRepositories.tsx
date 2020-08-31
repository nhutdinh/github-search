import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ApplicationState } from "../../../store/store";
import { UserRepositoriesState } from "../../../store/User/UserRepositories/UserRepositories.types";
import {
  UserRepositoriesStyled,
  UserRepositoriesCardStyled,
} from "./UserRepositories.styled";
import RepositoryCard from "../../../components/RepositoryCard/RepositoryCard";
import {
  getUserRepositories,
  resetUserRepositories,
  getMoreUserRepositories,
} from "../../../store/User/UserRepositories/UserRepositories.action";
import LoadMore from "../../../components/LoadMore/LoadMore";
import RepositorySvg from "../../../components/Icons/RepositorySvg";
import EmptyState from "../../../components/EmptyState/EmptyState";
import LazyContent from "../../../components/LazyContent/LazyContent";
interface UserRepositoriesProps {
  userName: string;
}
const UserRepositories: React.FC<UserRepositoriesProps> = (
  props: UserRepositoriesProps
): React.ReactElement => {
  const dispatch = useDispatch();

  React.useEffect((): void => {
    dispatch(getUserRepositories({ username: props.userName, page: 0 }));
  }, [props.userName]);

  React.useEffect((): (() => void) => {
    return () => {
      dispatch(resetUserRepositories());
    };
  }, []);
  const repoData = useSelector<ApplicationState, UserRepositoriesState>(
    (state) => state.user.repoData
  );

  const loadMoreClicked = (): void => {
    dispatch(
      getMoreUserRepositories({
        username: props.userName,
        page: repoData.page + 1,
      })
    );
  };
  return (
    <UserRepositoriesStyled>
      <LazyContent loading={repoData.loading && repoData.page === 1}>
        {repoData.repos.map((repo) => (
          <UserRepositoriesCardStyled key={repo.id}>
            <RepositoryCard repo={repo} />
          </UserRepositoriesCardStyled>
        ))}
        {repoData.repos.length === 0 && !repoData.loading && (
          <EmptyState>
            <div>
              <RepositorySvg />
              <h2>{props.userName} hasn't created any repositories yet.</h2>
            </div>
          </EmptyState>
        )}
        <LoadMore
          loading={repoData.loading}
          loadMore={loadMoreClicked}
          isLastPage={
            repoData.lastPage === repoData.page || repoData.lastPage === 0
          }
        ></LoadMore>
      </LazyContent>
    </UserRepositoriesStyled>
  );
};
export default UserRepositories;

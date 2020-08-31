import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ApplicationState } from "../../../store/store";
import { UserOrganizationsState } from "../../../store/User/UserOrganizations/UserOrganizations.types";
import {
  UserOrganizationsStyled,
  UserOrganizationsCardStyled,
} from "./UserOrganizations.styled";
import OrganizationCard from "../../../components/OrganizationCard/OrganizationCard";
import {
  getUserOrganizations,
  resetUserOrganizations,
  getMoreUserOrganizations,
} from "../../../store/User/UserOrganizations/UserOrganizations.action";
import LoadMore from "../../../components/LoadMore/LoadMore";

import OrganizationSvg from "../../../components/Icons/OrganizationSvg";
import EmptyState from "../../../components/EmptyState/EmptyState";
import LazyContent from "../../../components/LazyContent/LazyContent";

interface UserOrganizationsProps {
  userName: string;
}
const UserOrganizations: React.FC<UserOrganizationsProps> = (
  props: UserOrganizationsProps
): React.ReactElement => {
  const dispatch = useDispatch();

  React.useEffect((): void => {
    dispatch(getUserOrganizations({ username: props.userName, page: 0 }));
  }, [props.userName]);

  React.useEffect((): (() => void) => {
    return () => {
      dispatch(resetUserOrganizations());
    };
  }, []);
  const orgsData = useSelector<ApplicationState, UserOrganizationsState>(
    (state) => state.user.orgsData
  );

  const loadMoreClicked = (): void => {
    dispatch(
      getMoreUserOrganizations({
        username: props.userName,
        page: orgsData.page + 1,
      })
    );
  };
  return (
    <LazyContent loading={orgsData.loading}>
      <UserOrganizationsStyled>
        {orgsData.orgs.map((org) => (
          <UserOrganizationsCardStyled key={org.id}>
            <OrganizationCard org={org} />
          </UserOrganizationsCardStyled>
        ))}
        {orgsData.orgs.length === 0 && !orgsData.loading && (
          <EmptyState>
            <div>
              <OrganizationSvg />
              <h2>{props.userName} hasn't joined any organizations yet.</h2>
            </div>
          </EmptyState>
        )}
        <LoadMore
          loading={orgsData.loading}
          loadMore={loadMoreClicked}
          isLastPage={
            orgsData.lastPage === orgsData.page || orgsData.lastPage === 0
          }
        ></LoadMore>
      </UserOrganizationsStyled>
    </LazyContent>
  );
};
export default UserOrganizations;

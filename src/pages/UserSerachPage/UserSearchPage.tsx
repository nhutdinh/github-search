import React from "react";
import UserSearch from "../../containers/UserSearch/UserSearch";
import UserOverview from "../../containers/UserOverview/UserOverview";
import {
  UserSearchPageStyled,
  UserSerachWrapperStyled,
} from "./UserSearchPage.styled";
import PageLayout from "../../components/PageLayout/PageLayout";
const UserSearchPage: React.FC = (): React.ReactElement => {
  return (
    <PageLayout>
      {{
        header: (
          <UserSerachWrapperStyled>
            <UserSearch />
          </UserSerachWrapperStyled>
        ),
        content: (
          <UserSearchPageStyled>
            <UserOverview />
          </UserSearchPageStyled>
        ),
      }}
    </PageLayout>
  );
};
export default UserSearchPage;

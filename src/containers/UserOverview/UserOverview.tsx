import React from "react";
import { useSelector } from "react-redux";
import Tabs from "../../components/Tabs/Tabs";
import { ApplicationState } from "../../store/store";
import { UserOverviewState } from "../../store/User/UserOverview/UserOverview.types";
import CommunitySvg from "../../components/Icons/CommunitySvg";
import {
  UserOverviewLeftColumnStyled,
  UserOverviewRightColumnStyled,
  UserOverviewStyled,
  UserOverviewSocialInfoStyled,
  UserOverviewTabContentStyled,
} from "./UserOverview.styled";
import UserRepositories from "./UserRepositories/UserRepositories";
import UserOrganizations from "./UserOrganizations/UserOrganizations";
import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";

interface UserOverviewProps {
  userName?: string;
}
const UserOverview: React.FC<UserOverviewProps> = (
  props: UserOverviewProps
): React.ReactElement => {
  const userOverview = useSelector<ApplicationState, UserOverviewState>(
    (state) => state.user.overview
  );
  return (
    <ErrorBoundary error={userOverview.error}>
      {userOverview.user && (
        <>
          <UserOverviewStyled
            key={userOverview.user.id}
            data-testid="user-overview"
          >
            <UserOverviewLeftColumnStyled data-testid="user-overview__user-info">
              <img src={userOverview.user.avatar_url} alt="User avatar"></img>
              <h2>{userOverview.user.name}</h2>
              <h3>{userOverview.user.login}</h3>
              <h4>{userOverview.user.bio}</h4>
              <UserOverviewSocialInfoStyled data-testid="user-overview__social-info">
                <div>
                  <CommunitySvg />
                </div>
                <div>
                  <span>{userOverview.user.followers}</span> followers
                </div>
                <span>·</span>
                <div>
                  <span>{userOverview.user.following}</span> following
                </div>
              </UserOverviewSocialInfoStyled>
            </UserOverviewLeftColumnStyled>
            <UserOverviewRightColumnStyled>
              <Tabs
                tabs={[
                  {
                    title: (
                      <span>
                        Repositories ({userOverview.user.public_repos})
                      </span>
                    ),
                    content: (
                      <UserOverviewTabContentStyled data-testid="user-overview__user-repositories">
                        <UserRepositories
                          userName={userOverview.user.login}
                        ></UserRepositories>
                      </UserOverviewTabContentStyled>
                    ),
                  },
                  {
                    title: <span>Organizations</span>,
                    content: (
                      <UserOverviewTabContentStyled data-testid="user-overview__user-organizations">
                        <UserOrganizations userName={userOverview.user.login} />
                      </UserOverviewTabContentStyled>
                    ),
                  },
                ]}
              ></Tabs>
            </UserOverviewRightColumnStyled>
          </UserOverviewStyled>
        </>
      )}
    </ErrorBoundary>
  );
};
export default UserOverview;

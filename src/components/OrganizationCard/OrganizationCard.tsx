import React from "react";
import { Organization } from "../../store/User/UserOrganizations/UserOrganizations.types";
import {
  OrganizationCardStyled,
  OrganizationCardInfoWrapperStyled,
} from "./OrganizationCard.styled";

interface OrganizationCardProps {
  org: Organization;
}
const OrganizationCard: React.FC<OrganizationCardProps> = (
  props: OrganizationCardProps
) => {
  return (
    <OrganizationCardStyled>
      <img src={props.org.avatar_url} alt="organization logo" />
      <OrganizationCardInfoWrapperStyled>
        <h3>
          <a href={props.org.url}>{props.org.login}</a>
        </h3>
        <p>{props.org.description}</p>
      </OrganizationCardInfoWrapperStyled>
    </OrganizationCardStyled>
  );
};
export default OrganizationCard;

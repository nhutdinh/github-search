import React from "react";
import { Repository } from "../../store/User/UserRepositories/UserRepositories.types";
import {
  RepositoryCardStatsStyled,
  RepositoryCardStyled,
} from "./RepositoryCard.styled";
import StarSvg from "../Icons/StarSvg";
import ForksSvg from "../Icons/ForksSvg";

interface RepositoryCardProps {
  repo: Repository;
}
const RepositoryCard: React.FC<RepositoryCardProps> = (
  props: RepositoryCardProps
) => {
  return (
    <RepositoryCardStyled>
      <h3>
        <a href={props.repo.html_url}>{props.repo.name}</a>
      </h3>
      <p>{props.repo.description}</p>
      <RepositoryCardStatsStyled>
        <div>{props.repo.language}</div>
        <div>
          <StarSvg /> {props.repo.stargazers_count}
        </div>
        <div>
          <ForksSvg /> {props.repo.forks}
        </div>
      </RepositoryCardStatsStyled>
    </RepositoryCardStyled>
  );
};
export default RepositoryCard;

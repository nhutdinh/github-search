import styled from "styled-components";

export const UserOverviewStyled = styled.div`
  display: flex;
`;
export const UserOverviewLeftColumnStyled = styled.div`
  flex: 20%;
  padding: 0 1.5rem;
  img {
    width: 100%;
    border-radius: 50%;
  }
  h3 {
    color: #666;
    margin-block-start: 0;
  }
  h2 {
    margin-block-end: 0;
  }
  h4 {
    font-weight: normal;
  }
`;
export const UserOverviewRightColumnStyled = styled.div`
  flex: 80%;
  padding: 0 1.5rem;
`;
export const UserOverviewSocialInfoStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: 0.875rem;
  span {
    margin-left: 0.25rem;
  }
`;

export const UserOverviewTabContentStyled = styled.div`
  margin-top: 1.5rem;
`;

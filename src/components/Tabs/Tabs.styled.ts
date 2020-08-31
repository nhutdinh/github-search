import styled from "styled-components";
export const TabsTitleStyled = styled.div`
  display: flex;
`;
export const TabTitleStyled = styled.div<{ active?: boolean }>`
  padding: 0.5rem 1rem;
  border-bottom: ${(props) => (props.active ? "2px solid red" : "")};
  :hover {
    cursor: pointer;
  }
`;

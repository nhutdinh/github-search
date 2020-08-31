import styled from "styled-components";

export const SearchInputStyled = styled.div<{ showSugesstions?: boolean }>`
  width: 500px;
  position: relative;
  display: flex;
  align-items: center;
  svg {
    position: absolute;
    left: 0.75rem;
    z-index: 2;
  }
  input {
    box-sizing: border-box;
    box-shadow: ${(props) =>
      props.showSugesstions ? "none" : "0 1px 6px 0 rgba(32, 33, 36, 0.28)"};
    height: 2.5rem;
    border: none;
    border-radius: 1.375rem;
    outline: none;
    padding: 0 2.5rem;
    width: 100%;
    position: relative;
    z-index: 1;
    font-size: 1rem;
  }
`;
export const SearchInputSuggestionStyled = styled.ul`
  position: absolute;
  box-sizing: border-box;
  list-style: none;
  box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);
  width: 100%;
  border-radius: 1.375rem;
  top: 0;
  padding-inline-start: 0;
  margin-block-start: 0;
  padding: 2.5rem 0 0.5rem;
  background-color: white;
`;
export const SearchInputSuggestionItemStyled = styled.li<{
  isActive?: boolean;
}>`
  background-color: ${(props) =>
    props.isActive ? "rgba(32, 33, 36, 0.28)" : "none"};
  div {
    padding: 0.5rem 2.5rem;
  }
`;

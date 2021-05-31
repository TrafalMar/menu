import styled from "styled-components";

export const StyledLinkControlItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0 2rem;
  height: 100%;
  width: max-content;

  :hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.linkControlsTextHighlight};
  }
  :first-child {
    padding-left: 7rem;
  }
  :last-child {
    padding-right: 3rem;
  }

  color: ${(props) => props.theme.linkControlsText};
`;

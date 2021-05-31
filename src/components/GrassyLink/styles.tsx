import styled from "styled-components";

export const StyledGlossyBlock = styled.div`
  position: relative;
  display: flex;
  box-shadow: 0 0.3rem 0.4rem rgba(0, 0, 0, 0.1);

  width: max-content;
  height: min-content;
  border-radius: 1000rem;

  transition: transform 0.3s;

  margin-bottom: 2rem;
  :not(:first-child) {
    margin-left: 1rem;
  }
  :not(:last-child) {
    margin-right: 1rem;
  }

  & a {
    padding: 2rem;
    font-size: 2rem;
    font-weight: bold;
    letter-spacing: 0.1rem;
    color: ${(props) =>
      props.theme.linkColor ? props.theme.linkColor : "#fff"};
  }

  :hover {
    transform: translateY(-0.5rem);
    background: ${(props) => (props.theme.main ? props.theme.main : "#fff")};
    transition: transform 0.05s;
  }
  :hover a {
    color: ${(props) =>
      props.theme.linkHighlight ? props.theme.linkHighlight : "#fff"};
  }
`;

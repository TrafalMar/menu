import styled from "styled-components";

export const StyledNavbarButton = styled.button`
  display: grid;
  place-items: center;
  padding: 0 2.5rem 0 1.5rem;
  height: 6.4rem;

  font-size: 1.5rem;
  color: ${(props) =>
    props.theme.navBarButton ? props.theme.navBarButton : "white"};
  border: none;
  background-color: transparent;
  transition: padding 0.3s;

  &:hover {
    cursor: pointer;
    border-radius: 0.5rem;
    background-color: rgba(255, 255, 255, 0.1);
    padding: 0 2.5rem 0 4.5rem;
  }
  @media (max-width: 900px) {
    padding: 0 1.5rem 0 2.5rem;
    &:hover {
      padding: 0 4.4rem 0 2.5rem;
    }
  }
`;

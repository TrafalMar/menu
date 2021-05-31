import styled from "styled-components";

export const NavbarLogo = styled.nav`
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  height: auto;
  padding: 0 5rem;
  margin-top: 2rem;

  border-top-right-radius: 50rem;
  border-bottom-right-radius: 50rem;

  background-color: ${(props) =>
    props.theme.main ? props.theme.main : "#fff"};
  box-shadow: 0 0.2rem 0.2rem 0 rgb(0 0 0 / 14%),
    0 0.3rem 0.1rem -0.2rem rgb(0 0 0 / 12%), 0 0.1rem 0.5rem 0 rgb(0 0 0 / 20%);

  z-index: 10;
`;

export const NavbarControls = styled.div`
  position: fixed;
  display: fixed;
  left: 0;
  top: 10rem;
  width: min-content;
  overflow: hidden;
  z-index: 10;

  height: auto;
  margin-top: 2rem;

  border-top-right-radius: 50rem;
  border-bottom-right-radius: 50rem;

  background-color: ${(props) =>
    props.theme.main ? props.theme.main : "#fff"};
  box-shadow: 0 0.2rem 0.2rem 0 rgb(0 0 0 / 14%),
    0 0.3rem 0.1rem -0.2rem rgb(0 0 0 / 12%), 0 0.1rem 0.5rem 0 rgb(0 0 0 / 20%);

  @media (max-width: 900px) {
    top: 0;
    right: 0;
    left: auto;
    border-radius: 0;
    border-top-left-radius: 50rem;
    border-bottom-left-radius: 50rem;
  }
  @media (max-width: 320px) {
    top: 7rem;
    right: 0;
    left: auto;
    border-radius: 0;
    border-top-left-radius: 50rem;
    border-bottom-left-radius: 50rem;
  }
`;

import styled from "styled-components";

export const NavbarItemStyled = styled.div`
  display: flex;
  font-size: 1.5rem;
  color: white;
  & a {
    display: grid;
    place-content: center;
    max-width: 15rem;
  }
  & a p {
    height: fit-content;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

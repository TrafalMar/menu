import styled from "styled-components";

export const LinksContainer = styled.div`
  display: flex;
  & div {
    height: 6.4rem;
  }

  grid-gap: 2rem;

  @media (max-width: 1200px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
    place-items: center;
  }
`;

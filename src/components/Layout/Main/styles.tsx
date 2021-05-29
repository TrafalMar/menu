import styled from "styled-components";

export const StyledMain = styled.main`
  display: grid;
  grid-template-columns: 22rem 1fr;
  grid-template-rows: [nav-start] 18rem [nav-end content-start] 1fr [content-end];
  width: 100vw;
  height: 100vh;
`;

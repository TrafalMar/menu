import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 body {

    background-color: ${(props: any) =>
      props.theme.bgColor ? props.theme.bgColor : "white"};
  }
`;

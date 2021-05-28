import styled from "styled-components";
import NavBar from "./NavBar";

interface Props {
  children: any;
}

const Layout = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: auto;
`;

export default function layout({ children }: Props) {
  return (
    <Layout>
      <NavBar />
      <main>{children}</main>
    </Layout>
  );
}

import Main from "./Main";
import NavBar from "./NavBar";
import { Layout as StyledLayout } from "./styles";

interface Props {
  children: any;
}

export default function layout({ children }: Props) {
  return (
    <StyledLayout>
      <NavBar />
      <Main>{children}</Main>
    </StyledLayout>
  );
}

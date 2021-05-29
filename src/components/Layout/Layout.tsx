import Main from "./Main";
import NavBar from "./NavBar";

interface Props {
  children: any;
}

export default function layout({ children }: Props) {
  return (
    <>
      <NavBar />
      <Main>{children}</Main>
    </>
  );
}

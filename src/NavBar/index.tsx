import Link from "next/link";
import { Navbar, Logo, LinksContainer } from "./styles";

interface Props {
  children: any | any[];
}

export default function NavBar({ children }: Props) {
  return (
    <Navbar>
      <Logo>
        <Link href="/">Assistant</Link>
      </Logo>
      <LinksContainer>
        {Array.isArray(children) ? children.map((el) => el) : children}
      </LinksContainer>
    </Navbar>
  );
}

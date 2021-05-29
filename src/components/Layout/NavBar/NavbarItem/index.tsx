import { LinksContainer } from "./styles";

interface Props {
  children: any;
}

const NavbarItem = ({ children }: Props) => {
  return <LinksContainer>{children}</LinksContainer>;
};
export default NavbarItem;

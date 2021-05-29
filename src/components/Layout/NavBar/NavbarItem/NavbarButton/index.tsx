import { StyledNavbarButton } from "./styles";

interface Props {
  children: any;
  onClick: () => void;
}

const NavbarButton = ({ children, onClick }: Props) => {
  return <StyledNavbarButton onClick={onClick}>{children}</StyledNavbarButton>;
};
export default NavbarButton;

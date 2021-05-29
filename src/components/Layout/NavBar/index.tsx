import Settings from "./Settings";
import { NavbarLogo, NavbarControls } from "./styles";
import Logo from "../../Logo";
import NavbarItem from "./NavbarItem";

export default function NavBar() {
  return (
    <header>
      <NavbarLogo>
        <Logo />
      </NavbarLogo>
      <NavbarControls>
        <NavbarItem>
          <Settings />
        </NavbarItem>
      </NavbarControls>
    </header>
  );
}

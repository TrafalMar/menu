import Link from "next/link";
import { NavbarItem } from "./NavbarItem";
import Settings from "./Settings";
import { Navbar, Logo, LinksContainer } from "./styles";

export default function NavBar() {
  return (
    <header>
      <Navbar>
        <Logo>
          <Link href="/">Assistant</Link>
        </Logo>
        <LinksContainer>
          <NavbarItem text="Twitch" href="https://www.twitch.tv/" />
          <NavbarItem text="YummyAnime" href="https://yummyanime.com/" />
          <NavbarItem text="Udemy" href="https://www.udemy.com/" />
          <NavbarItem text="YouTube" href="https://www.youtube.com/" />
          <NavbarItem text="Rozetka" href="https://rozetka.com.ua/" />
          <NavbarItem text="Steam" href="http://store.steampowered.com/" />
          <NavbarItem text="ХПК" href="http://hpk.edu.ua/" />
          <Settings />
        </LinksContainer>
      </Navbar>
    </header>
  );
}

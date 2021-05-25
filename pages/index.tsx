import NavBar from "../src/NavBar";
import { NavbarItem } from "../src/NavBar/NavbarItem";
import styled from "styled-components";

const Layout = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: auto;
  height: 100%;
  width: 100%;
`;

export default function Home() {
  return (
    <Layout>
      <NavBar>
        <NavbarItem text="Twitch" href="https://www.twitch.tv/" />
        <NavbarItem text="YummyAnime" href="https://yummyanime.com/" />
        <NavbarItem text="Udemy" href="https://www.udemy.com/" />
        <NavbarItem text="YouTube" href="https://www.youtube.com/" />
        <NavbarItem text="Rozetka" href="https://rozetka.com.ua/" />
        <NavbarItem text="Steam" href="http://store.steampowered.com/" />
        <NavbarItem text="ХПК" href="http://hpk.edu.ua/" />
      </NavBar>
    </Layout>
  );
}

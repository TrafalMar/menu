import classes from "../styles/Home.module.css";
import GrassyLink from "../src/components/GrassyLink";
import LinkControls from "../src/components/LinkControls";

const Home = () => {
  return (
    <div className={classes.Container}>
      <div className={classes.Links}>
        <GrassyLink name="Twitch" link="https://www.twitch.tv/" />
        <GrassyLink name="YummyAnime" link="https://yummyanime.com/" />
        <GrassyLink name="Udemy" link="https://www.udemy.com/" />
        <GrassyLink name="YouTube" link="https://www.youtube.com/" />
        <GrassyLink name="Rozetka" link="https://rozetka.com.ua/" />
        <GrassyLink name="Steam" link="http://store.steampowered.com/" />
        <GrassyLink name="ХПК" link="http://hpk.edu.ua/" />
      </div>

      <LinkControls />
    </div>
  );
};
export default Home;

import classes from "../styles/Home.module.css";
import GrassyLink from "../src/components/GrassyLink";

const Home = () => {
  return (
    <div className={classes.Container}>
      <GrassyLink name="Twitch" link="https://www.twitch.tv/" />
      <GrassyLink name="YummyAnime" link="https://yummyanime.com/" />
      <GrassyLink name="Udemy" link="https://www.udemy.com/" />
      <GrassyLink name="YouTube" link="https://www.youtube.com/" />
      <GrassyLink name="Rozetka" link="https://rozetka.com.ua/" />
      <GrassyLink name="Steam" link="http://store.steampowered.com/" />
      <GrassyLink name="ХПК" link="http://hpk.edu.ua/" />
    </div>
  );
};
export default Home;

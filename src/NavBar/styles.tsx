import styled from "styled-components";
import { colors } from "../constants/colors";

export const Navbar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 10vw;
  background-color: ${colors.pink};
  height: auto;
  width: 100vw;
  margin-top: 2rem;
  box-shadow: 0 0.2rem 0.2rem 0 rgb(0 0 0 / 14%),
    0 0.3rem 0.1rem -0.2rem rgb(0 0 0 / 12%), 0 0.1rem 0.5rem 0 rgb(0 0 0 / 20%);

  @media (max-width: 1500px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 1rem;
  }
`;

export const Logo = styled.div`
  display: flex;
  height: 6.4rem;
  font-size: 3rem;
  font-weight: 400;
  color: white;
  align-items: center;
  & a {
    display: grid;
    place-items: center;
    height: 100%;
    transition: 0.3s;
  }
  & a:hover {
    transform: translateY(-0.3rem);
    text-shadow: 0.1rem 0.6rem 0.6rem rgba(0, 0, 0, 0.3);
    outline: none;
  }
  @media (max-width: 1500px) {
    width: 100%;
    justify-content: center;
    border-bottom: 0.1rem solid rgba(255, 255, 255, 0.2);
    margin-bottom: 1rem;
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  & div {
    height: 6.4rem;
  }
  & a {
    padding: 0 1.5rem;
  }
  & a:hover {
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    background-color: rgba(255, 255, 255, 0.1);
    outline: none;
  }
  grid-gap: 2rem;

  @media (max-width: 1200px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
    place-items: center;
    & a:hover {
      border-bottom-left-radius: 0.5rem;
      border-bottom-right-radius: 0.5rem;
    }
  }
`;

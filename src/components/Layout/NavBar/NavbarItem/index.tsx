import { NavbarItemStyled } from "./styles";

interface Props {
  text: string;
  href: string;
}

export const NavbarItem = ({ text, href }: Props) => {
  return (
    <NavbarItemStyled>
      <a href={href} target="_blank">
        <p>{text}</p>
      </a>
    </NavbarItemStyled>
  );
};

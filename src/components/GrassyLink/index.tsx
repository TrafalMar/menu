import { StyledGlossyBlock } from "./styles";

interface Props {
  name: string;
  link: string;
  target?: "_blank";
}

const GrassyLink = ({ name, link, target }: Props) => {
  return (
    <StyledGlossyBlock>
      <a href={link} target={target}>
        {name}
      </a>
    </StyledGlossyBlock>
  );
};
export default GrassyLink;

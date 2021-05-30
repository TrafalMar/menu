import { StyledGlossyBlock } from "./styles";

interface Props {
  name: string;
  link: string;
  target?: string;
}

const GrassyLink = ({ name, link, target = "_blank" }: Props) => {
  return (
    <StyledGlossyBlock>
      <a href={link} target={target}>
        {name}
      </a>
    </StyledGlossyBlock>
  );
};
export default GrassyLink;

import { StyledGlossyBlock } from "./styles";

export interface Props {
  name?: string;
  link?: string;
  target?: string;
}

const GrassyLink = ({ name = "Link", link, target = "_blank" }: Props) => {
  return (
    <StyledGlossyBlock>
      <a href={link} target={target} role="link">
        {name}
      </a>
    </StyledGlossyBlock>
  );
};
export default GrassyLink;

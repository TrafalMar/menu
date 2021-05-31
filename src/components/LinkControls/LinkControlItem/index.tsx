import { StyledLinkControlItem } from "./styles";

interface Props {
  children: any;
}

const LinkControlItem = ({ children }: Props) => {
  return <StyledLinkControlItem>{children}</StyledLinkControlItem>;
};

export default LinkControlItem;

import { StyledMain } from "./styles";

interface Props {
  children: any;
}

const Main = ({ children }: Props) => {
  return <StyledMain>{children}</StyledMain>;
};
export default Main;

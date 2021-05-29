import Link from "next/link";
import { Logo as StyledLogo } from "./styles";

const Logo = () => {
  return (
    <StyledLogo>
      <Link href="/">Assistant</Link>
    </StyledLogo>
  );
};
export default Logo;

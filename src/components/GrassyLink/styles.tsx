import styled from "styled-components";
import { colors } from "../../constants/colors";

export const StyledGlossyBlock = styled.div`
  position: relative;
  display: flex;
  box-shadow: 0 0.3rem 0.4rem rgba(0, 0, 0, 0.1);

  width: max-content;
  border-radius: 1000rem;

  transition: transform 0.3s;

  & a {
    padding: 2rem;
    font-size: 2rem;
    font-weight: bold;
    letter-spacing: 0.1rem;
    color: ${colors.lightText};
  }

  :hover {
    transform: translateY(-0.5rem);
    background: ${colors.main};
    transition: transform 0.05s;
  }
`;

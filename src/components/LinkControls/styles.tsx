import styled, { keyframes } from "styled-components";

export const StyledLinkControls = styled.div`
  margin-top: auto;
  overflow: hidden;

  margin: 3rem 0;
  display: flex;

  @media (max-width: 900px) {
    width: 100%;
    text-align: center;
    justify-content: center;
  }
`;

export const OpenButton = styled.button`
  border: none;
  background-color: ${(props) => props.theme.linkControlsBg};

  color: ${(props) => props.theme.linkControlsText};

  min-height: 8rem;
  min-width: 8rem;

  border-radius: 50%;
  z-index: 1;

  :hover {
    cursor: pointer;
  }
`;

export const ControlsContainer = styled.section`
  display: flex;

  background-color: ${(props) => props.theme.linkControlsBg};
  position: relative;

  height: 8rem;
  overflow: hidden;

  border-top-right-radius: 100rem;
  border-bottom-right-radius: 100rem;

  transform: translateX(-3rem);
  margin-right: -3rem;

  :before {
    content: "";
    position: absolute;
    left: -5.5rem;

    transform: translateY(-1rem);

    height: 10rem;
    width: 10rem;

    background-color: ${(props) => props.theme.bgColor};
    border-radius: 50%;
  }
`;

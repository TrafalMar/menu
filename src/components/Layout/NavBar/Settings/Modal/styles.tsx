import styled, { CSSProp } from "styled-components";

export const Backdrop = styled.div`
  background-color: rgba(0, 0, 0, 0.1);

  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  cursor: pointer;
  z-index: 100;
`;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;

  margin-top: 20rem;
  width: 30rem;
  height: 30rem;

  border-radius: 0.5rem;
  box-shadow: rgba(255, 255, 255, 0.15) 0px 4.8rem 10rem 0px;
  background-color: white;
  z-index: 101;
  overflow: hidden;
`;

export const ModalHeader = styled.div<{ color: CSSProp }>`
  display: grid;
  place-items: center;
  width: 100%;
  padding: 1.5rem 0;
  background-color: ${(props) => (props.color ? props.color : "transparent")};
`;

export const ModalBody = styled.div`
  padding: 1rem 2rem;
`;

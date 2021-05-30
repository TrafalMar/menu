import styled from "styled-components";

export const Backdrop = styled.div`
  background-color: rgba(0, 0, 0, 0.3);

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

  background-color: ${(props) =>
    props.theme.bgColor ? props.theme.bgColor : "#fff"};

  border-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.5) 0 0.2rem 1rem 0px;
  z-index: 101;
  overflow: hidden;
`;

export const ModalHeader = styled.div`
  display: grid;
  place-items: center;
  width: 100%;
  padding: 1.5rem 0;
  background-color: ${(props) =>
    props.theme.main ? props.theme.main : "transparent"};

  & p {
    font-size: 2.5rem;
    font-weight: bold;
    color: ${(props) =>
      props.theme.modalHeader ? props.theme.modalHeader : "#fff"};
  }
`;

export const ModalBody = styled.div`
  padding: 1rem 3rem;
`;

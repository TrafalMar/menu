import styled, { CSSProp } from "styled-components";

export const StyledColorPickerContainer = styled.div<{
  marginTop?: CSSProp;
  marginBottom?: CSSProp;
}>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: ${(props) => (props.marginTop ? props.marginTop : 0)};
  margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom : 0)};

  cursor: pointer;

  :hover p {
    color: ${(props) =>
      props.theme.colorPickerTextHighlight
        ? props.theme.colorPickerTextHighlight
        : "white"};
  }
  :hover span {
    transform: translateX(-1rem);
    transition: transform 0.1s;
  }
`;

export const ColorIndicator = styled.span<{
  color?: CSSProp;
  themeBorder?: CSSProp;
}>`
  height: 2.5rem;
  width: 2.5rem;

  background-color: ${(props) => (props.color ? props.color : "white")};

  border-radius: 50%;
  box-sizing: co;
  border: 0.5rem solid
    ${(props) => (props.themeBorder ? props.themeBorder : "white")};
  box-shadow: 0 0.1rem 0.3rem rgba(0, 0, 0, 0.3);

  transition: transform 0.3s;
`;

export const StyledColorPicker = styled.div`
  display: flex;
  align-items: center;
  height: 4rem;
  user-select: none;

  & p {
    font-weight: bold;
    font-size: 2rem;
    color: ${(props) =>
      props.theme.colorPickerText ? props.theme.colorPickerText : "white"};
  }
`;

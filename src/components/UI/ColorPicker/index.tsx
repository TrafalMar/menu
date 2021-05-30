import { Themes } from "../../Layout/Layout";
import {
  ColorIndicator,
  StyledColorPicker,
  StyledColorPickerContainer,
} from "./styles";

interface Props {
  name: string;
  color: string;
  themeBorder: string;
  marginTop?: string;
  marginBottom?: string;
  onClick: () => void;
}

const ColorPicker = ({
  name,
  marginTop,
  marginBottom,
  color,
  themeBorder,
  onClick,
}: Props) => {
  return (
    <StyledColorPickerContainer
      marginBottom={marginBottom}
      marginTop={marginTop}
      onClick={onClick}
    >
      <StyledColorPicker>
        <p>{name}</p>
      </StyledColorPicker>
      <ColorIndicator color={color} themeBorder={themeBorder} />
    </StyledColorPickerContainer>
  );
};
export default ColorPicker;

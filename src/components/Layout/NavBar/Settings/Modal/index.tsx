import { Fragment, useContext } from "react";
import { themePreviewColors } from "../../../../../constants/colors";

import ColorPicker from "../../../../UI/ColorPicker";
import { ThemeContext } from "../../../../Layout/Layout";
import { Modal, Backdrop, ModalHeader, ModalBody } from "./styles";

interface Props {
  isModalVisible: boolean;
  onClose: () => void;
}

export default function index({ isModalVisible, onClose }: Props) {
  const { changeTheme } = useContext(ThemeContext);

  return isModalVisible ? (
    <Fragment>
      <Backdrop onClick={onClose} />
      <Modal>
        <ModalHeader>
          <p>Theme</p>
        </ModalHeader>
        <ModalBody>
          <ColorPicker
            name="Standard"
            marginTop="2rem"
            marginBottom="2rem"
            color={themePreviewColors.standard}
            themeBorder={themePreviewColors.standardBorder}
            onClick={() => {
              changeTheme("default");
            }}
          />
          <ColorPicker
            name="Dark"
            marginTop="2rem"
            marginBottom="2rem"
            color={themePreviewColors.dark}
            themeBorder={themePreviewColors.darkBorder}
            onClick={() => {
              changeTheme("dark");
            }}
          />
          <ColorPicker
            name="Night"
            marginTop="2rem"
            marginBottom="2rem"
            color={themePreviewColors.night}
            themeBorder={themePreviewColors.nightBorder}
            onClick={() => {
              changeTheme("night");
            }}
          />
        </ModalBody>
      </Modal>
    </Fragment>
  ) : (
    <div />
  );
}

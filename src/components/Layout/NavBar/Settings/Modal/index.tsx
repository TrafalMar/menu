import { Fragment } from "react";
import { colors } from "../../../../../constants/colors";

import Text from "../../../../UI/Text";
import { Modal, Backdrop, ModalHeader, ModalBody } from "./styles";

interface Props {
  isModalVisible: boolean;
  onClose: () => void;
}

export default function index({ isModalVisible, onClose }: Props) {
  return isModalVisible ? (
    <Fragment>
      <Backdrop onClick={onClose} />
      <Modal>
        <ModalHeader color={colors.main}>
          <Text size={"2.5rem"} bold={"bold"} color={colors.lightText}>
            Settings
          </Text>
        </ModalHeader>
        <ModalBody>
          <Text lineHeight={1.6}>
            Here will be placed general account settings for visual
            representation.
          </Text>
        </ModalBody>
      </Modal>
    </Fragment>
  ) : (
    <div />
  );
}

import { useState } from "react";

import { OpenButton, StyledLinkControls, ControlsContainer } from "./styles";
import { FaPlus, FaTimes, FaPen, FaTrash } from "react-icons/fa";
import LinkControlItem from "./LinkControlItem";

const LinkControls = () => {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  const OpenCloseHandler = () => {
    setIsOpened((prev) => !prev);
  };

  const getIcon = () => {
    return isOpened ? <FaTimes size="3rem" /> : <FaPlus size="3rem" />;
  };

  const renderControls = () => {
    if (!isOpened) return;
    return (
      <ControlsContainer role="controls">
        <LinkControlItem>
          <FaPlus size="3rem" />
        </LinkControlItem>
        <LinkControlItem>
          <FaPen size="2.5rem" />
        </LinkControlItem>
        <LinkControlItem>
          <FaTrash size="2.5rem" />
        </LinkControlItem>
      </ControlsContainer>
    );
  };

  return (
    <StyledLinkControls>
      <OpenButton onClick={OpenCloseHandler}>{getIcon()}</OpenButton>

      {renderControls()}
    </StyledLinkControls>
  );
};
export default LinkControls;

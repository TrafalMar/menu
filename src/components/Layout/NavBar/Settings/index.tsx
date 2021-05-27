import { Fragment, useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { Settings } from "./styles";
import { FaCogs } from "react-icons/fa";
import Modal from "./Modal";

export default function index() {
  const [showSettings, setShowSettings] = useState<boolean>(false);
  const [root, setRoot] = useState<HTMLElement | null>(null);

  const openSettings = () => {
    setShowSettings(true);
  };
  const closeSettings = () => {
    setShowSettings(false);
  };

  useEffect(() => {
    setRoot(document.getElementById("root"));
  }, []);

  return (
    <Fragment>
      <Settings onClick={openSettings}>
        <FaCogs size={"3rem"} />
      </Settings>
      {root !== null &&
        ReactDOM.createPortal(
          <Modal onClose={closeSettings} isModalVisible={showSettings} />,
          root
        )}
    </Fragment>
  );
}

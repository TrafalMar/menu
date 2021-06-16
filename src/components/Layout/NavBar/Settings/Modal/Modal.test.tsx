import { shallow, mount, ShallowWrapper, render } from "enzyme";
import "jsdom-global/register";

import Modal from "./index";
import sinon, { SinonSpy } from "sinon";

import ColorPicker from "../../../../UI/ColorPicker";
import { Backdrop } from "./styles";

describe("<Modal />", () => {
  let wrapper: ShallowWrapper;
  let closeFn: SinonSpy;
  beforeEach(() => {
    closeFn = sinon.spy();
    wrapper = shallow(<Modal isModalVisible={true} onClose={closeFn} />);
  });

  it("Contains header 'Theme'", () => {
    expect(wrapper.find("#modal-header").text()).toContain("Theme");
  });

  it("Contains three(3) options", () => {
    expect(wrapper.find(ColorPicker)).toHaveLength(3);
  });

  it("Pushes close button", () => {
    wrapper.find(Backdrop).simulate("click");
    expect(closeFn).toHaveProperty("callCount", 1);
  });
});

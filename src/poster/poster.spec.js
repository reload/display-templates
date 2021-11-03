import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import slides from "../../examples/src/slides";
import Poster from "./poster";

configure({ adapter: new Adapter() });

test("Test that poster loads", () => {
  const slide = slides[4];
  const wrapper = shallow(
    <Poster run slide={slide} content={slide.content} slideDone={() => { }} />
  );

  expect(
    wrapper.find(".image-area").get(0).props.style.backgroundImage
  ).toBe('url("./fixtures/images/mountain1.jpeg")');
  expect(
    wrapper.find("h1").text()).toContain("Havnerundfart med MS TUNØ")
  expect(
    wrapper.find(".ticket").text()).toContain("75-150 kr.")
});

import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });
import React from "react";
import { shallow, mount } from "enzyme";
import App from "../../src/App";

it("renders without crashing", () => {
    shallow(<App />);
  });
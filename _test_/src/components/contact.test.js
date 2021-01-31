import 'jsdom-global/register'; 
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });
import React from "react";
import { shallow, mount } from "enzyme";
import Contact from "../../../src/components/contact";


it("renders without crashing", () => {
    shallow(<Contact />);
  });

  it("render Contact", () => {
    const wrapper = shallow(<Contact />);
    const getintouch = <h2>Get In Touch</h2>;
    expect(wrapper.contains(getintouch)).toEqual(true);
  });
 
  const data = {
    "Contact": {
        "address": "4321 California St, San Francisco, CA 12345 ",
        "phone": "+1 123 456 1234",
        "email": "info@company.com",
        "facebook": "fb.com",
        "twitter": "twitter.com",
        "youtube": "youtube.com"
    }
  }
  describe("", () => {
    it("checks data", () => {   
      const wrapper = mount(<Contact data={data.Contact} />);
      expect(wrapper.props().data).toEqual(data.Contact);
      expect(wrapper.find('#phone').props().children[1]).toEqual(data.Contact.phone)
     
    });
  });
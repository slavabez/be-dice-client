import React from "react";
import { shallow } from "enzyme";
import BeDice from "./index";

describe("<BeDice />", () => {
    it("renders the component with no props", () => {
        const wrapper = shallow(<BeDice />);
        // Expect one wrapper, which is the AppWrapper
        expect(wrapper.length).toBe(1);
    });
});
import { shallow } from "enzyme";
import * as React from "react";
import { HistoryListLoadingMessage } from "../HistoryListLoadingMessage";

test("test", () => {
    const message = "test";
    const component = shallow(<HistoryListLoadingMessage message={message} />);
    expect(component.find("h1").text()).toEqual(message);
});

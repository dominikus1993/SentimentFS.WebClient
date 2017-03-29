import { shallow } from "enzyme";
import * as React from "react";
import { History } from "../../glabal/models";
import { HistoryList } from "../HistoryListComponent";

test("<History /> one element", () => {
    const history: History = { isLoading: false, keywords: [{ key: "Dominik", quantity: 10 }] };
    const component = shallow(<HistoryList history={history} />);
    const list = component.find(".search-history").children();
    expect(list.length).toBe(history.keywords.length);
    expect(list.at(0).childAt(0).text()).toBe(history.keywords[0].quantity.toString());
    expect(list.at(0).childAt(1).text()).toBe(history.keywords[0].key.toString());
});

test("<History /> more than one element", () => {
    const history: History = { isLoading: false, keywords: [{ key: "Dominik", quantity: 10 }, { key: "Dominik2", quantity: 102 }, { key: "Dominik3", quantity: 103 }] };

    const component = shallow(<HistoryList history={history} />);
    const list = component.find(".search-history").children();
    expect(list.length).toBe(history.keywords.length);
    for (let i = 0; i < history.keywords.length; i++) {
        expect(list.at(i).childAt(0).text()).toBe(history.keywords[i].quantity.toString());
        expect(list.at(i).childAt(1).text()).toBe(history.keywords[i].key.toString());
    }
});


test("<History /> has no elements", () => {
    const history: History = { isLoading: false, keywords: [] };

    const component = shallow(<HistoryList history={history} />);
    const list = component.find(".search-history").children();
    expect(list.length).toBe(history.keywords.length);
});

test("<History /> isLoading", () => {
    const history: History = { isLoading: true, keywords: [] };

    const component = shallow(<HistoryList history={history} />);
    const text = component.find("h1").text();
    expect(text).toBeDefined();
});
import { shallow } from "enzyme";
import * as React from "react";
import { IKeyWord } from "../../glabal/models";
import { History } from "../HistoryComponent";

test("<History /> one element", () => {
    const keyWords: IKeyWord[] = [{ key: "Dominik", quantity: 10 }];
    const component = shallow(<History keyWords={keyWords} />);
    const list = component.find(".search-history").children();
    expect(list.length).toBe(keyWords.length);
    expect(list.at(0).childAt(0).text()).toBe(keyWords[0].quantity.toString());
    expect(list.at(0).childAt(1).text()).toBe(keyWords[0].key.toString());
});

test("<History /> more than one element", () => {
    const keyWords: IKeyWord[] = [{ key: "Dominik", quantity: 10 }, { key: "Dominik2", quantity: 102 }, { key: "Dominik3", quantity: 103 }];
    const component = shallow(<History keyWords={keyWords} />);
    const list = component.find(".search-history").children();
    expect(list.length).toBe(keyWords.length);
    for (let i = 0; i < keyWords.length; i++) {
        expect(list.at(i).childAt(0).text()).toBe(keyWords[i].quantity.toString());
        expect(list.at(i).childAt(1).text()).toBe(keyWords[i].key.toString());
    }
});
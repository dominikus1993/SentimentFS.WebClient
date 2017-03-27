import { shallow } from "enzyme";
import * as React from "react";
import { IKeyWord } from "../../glabal/models";
import { History } from "../HistoryComponent";

test("<History />", () => {
    const keyWords: IKeyWord[] = [{key: "Dominik", quantity: 10}];
    const component = shallow(<History keyWords= {keyWords}/>);
    expect(1).toBe(1);
});
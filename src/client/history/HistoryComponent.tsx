import * as React from "react";
import { IKeyWord } from "../glabal/models";

export interface IHistoryProps {
    keyWords: IKeyWord[];
};

export interface IHistoryState { };

export class History extends React.Component<IHistoryProps, IHistoryState> {
    public render(): JSX.Element {
        const keyWords = this.props.keyWords.map((keyWord) => (
            <li key={keyWord.key}>
                <span>{keyWord.quantity}</span>
                {keyWord.key}
            </li>
        ));
        return (<ul className="search-history">{keyWords}</ul>);
    }
}

export default History;

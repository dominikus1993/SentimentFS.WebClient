import * as React from "react";
import { IKeyWord } from "../glabal/models";

interface IHistoryProps {
    keyWords: IKeyWord[];
};

interface IHistoryState { };

class History extends React.Component<IHistoryProps, IHistoryState> {
    public render(): JSX.Element {
        const keyWords = this.props.keyWords.map((keyWord) => (
            <li key={keyWord.key}>
                <span>{keyWord.quantity}</span>
                {keyWord.key}
            </li>
        ));
        return (<ul>{keyWords}</ul>);
    }
}

export default History;

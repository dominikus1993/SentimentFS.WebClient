import * as React from "react";
import { IKeyWord } from "../glabal/models";

export interface IHistoryListProps {
    keyWords: IKeyWord[];
};

export function HistoryList(props: IHistoryListProps) {
    const { keyWords } = props;
    const keyWordsLi = keyWords.map((keyWord) => (
        <li key={keyWord.key}>
            <span>{keyWord.quantity}</span>
            {keyWord.key}
        </li>
    ));
    return (<ul className="search-history">{keyWordsLi}</ul>);
}

export default HistoryList;

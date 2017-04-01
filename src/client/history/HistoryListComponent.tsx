import * as React from "react";
import { History } from "../glabal/models";
import { HistoryListLoadingMessage } from "./HistoryListLoadingMessage";

export interface IHistoryListProps {
    history: History;
};

export function HistoryList(props: IHistoryListProps) {
    const { history: { keywords, isLoading } } = props;
    if (isLoading) {
        return (<HistoryListLoadingMessage message="History is Loading. Please wait." />);
    } else {
        const keyWordsLi = keywords.map((keyWord) => (
            <li key={keyWord.key}>
                <span>{keyWord.quantity}</span>
                {keyWord.key}
            </li>
        ));
        return (<ul className="search-history">{keyWordsLi}</ul>);
    }
}

export default HistoryList;

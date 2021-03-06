import CircularProgress from "material-ui/CircularProgress";
import * as React from "react";
import { History } from "../glabal/models";
export interface IHistoryListProps {
    history: History;
};

export function HistoryList(props: IHistoryListProps) {
    const { history: { keywords, isLoading } } = props;
    if (isLoading) {
        return (<CircularProgress></CircularProgress>);
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

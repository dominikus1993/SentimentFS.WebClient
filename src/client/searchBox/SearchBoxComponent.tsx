import { Actions } from "../glabal/actions";
import * as React from "react";

interface ISearchBoxProps {
    readonly onSearch: (value: string) => Actions;
    readonly isLoading: boolean;
}

interface ISearchBoxState {
    text: string;
}

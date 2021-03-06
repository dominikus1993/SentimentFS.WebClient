export interface ISuccess<T> {
    readonly isSuccess: true;
    readonly value: T;
}

export interface IError<T> {
    readonly isSuccess: false;
    readonly errors: string[];
}

export type IResult<T> = IError<T> | ISuccess<T>;

export type Sentiment = "VaryNegative" | "Negative" | "Neutral" | "Positive" | "VeryPositive";

export interface ILoadable {
    isLoading: boolean;
}

export const enum Trend {
    Decreasing = -1,
    Stable = 0,
    Increasing = 1,
}

export interface IKeyWord {
    readonly key: string;
    readonly quantity: number;
}

export interface ILocalization {
    readonly longitude: number;
    readonly latitude: number;
}

export interface IStatisticData {
    readonly mediana: number;
    readonly mean: number;
    readonly dominanta: number;
    readonly variance: number;
    readonly stdDev: number;
}

export interface IAnalysisScore {
    readonly key: string;
    readonly sentimentByQuantity: {[K in Sentiment]: number};
    readonly trend: Trend;
    readonly keyWords: IKeyWord[];
    readonly localizations: ILocalization[];
    readonly statisticData: IStatisticData;
}

export type AnalysisScore = IAnalysisScore & ILoadable;
export type History = { keywords: IKeyWord[] } & ILoadable;

export interface IApplicationState {
    readonly analysisScore: AnalysisScore;
    readonly history: History;
}


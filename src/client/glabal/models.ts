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
    sentimentByQuantity: {[K in Sentiment]: number};
    trend: Trend;
    keyWords: IKeyWord[];
    localizations: ILocalization[];
    statisticData: IStatisticData;
}

import { IAnalysisScore, IApplicationState, IKeyWord, ILocalization, Trend } from "./models";
export const InitialAnalysisScore: IAnalysisScore = {
    key: "",
    sentimentByQuantity: { Negative: 0, Neutral: 0, Positive: 0, VaryNegative: 0, VeryPositive: 0 },
    trend: Trend.Increasing,
    keyWords: [] as IKeyWord[],
    localizations: [] as ILocalization[],
    statisticData: {
        dominanta: 0,
        mean: 0,
        mediana: 0,
        stdDev: 0,
        variance: 0,
    },
};

export const InittialApplicationState: IApplicationState = {
    analysisScore: InitialAnalysisScore,
};

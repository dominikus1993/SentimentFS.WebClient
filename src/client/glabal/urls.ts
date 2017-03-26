import { BaseUrl } from "./constants";

export const History = (quantity: number)  => `${BaseUrl}/api/Search/history/${quantity}`;

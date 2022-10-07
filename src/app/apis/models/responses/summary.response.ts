export interface SummaryResponse {
    totalQuantity: number;
    totalAmount: number;
    totalNetAmount: number;
    totalAverageAmount: number;
    initialDate: Date | string;
    finalDate: Date | string;
}
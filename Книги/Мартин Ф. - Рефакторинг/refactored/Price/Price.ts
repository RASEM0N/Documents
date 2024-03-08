export enum PRICE_CODE {
    children,
    newRelease,
    regular
}

export abstract class Price {

    abstract getAmount(daysRenter: number): number;
    abstract getFrequentRenterPoint(daysRented: number): number;
}
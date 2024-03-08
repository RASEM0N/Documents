export abstract class Movie {

    constructor(
        private _title: string,
        private _priceCode: number
    ) {
    }

    public get priceCode(): number {
        return this._priceCode;
    }

    public set priceCode(priceCode: number) {
        this._priceCode = priceCode;
    }

    public get title(): string {
        return this._title;
    }

    abstract getAmount(daysRenter: number): number;
    abstract getFrequentRenterPoint(daysRented: number): number;
}

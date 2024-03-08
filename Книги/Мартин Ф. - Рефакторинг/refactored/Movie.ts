export class Movie {
    static readonly CHILDREN = 1;
    static readonly REGULAR = 2;
    static readonly NEW_RELEASE = 3;

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

    public getAmount(daysRented: number) {
        switch (this.priceCode) {

            case Movie.CHILDREN: {
                let thisAmount = 2;
                if (daysRented > 2) {
                    thisAmount += (daysRented - 2) * 1.5
                }
                return thisAmount;
            }

            case Movie.REGULAR: {
                return daysRented * 3
            }

            case Movie.NEW_RELEASE: {
                let thisAmount = 1.5;

                if (daysRented > 3) {
                    thisAmount += (daysRented - 3) * 1.5
                }
                return thisAmount
            }

            default:
                return 0;
        }
    }

    public getFrequentRenterPoint = (daysRented: number) => {
        let value = 1;

        if (this.priceCode === Movie.NEW_RELEASE && daysRented > 1) {
            value++;
        }

        return value;
    }
}

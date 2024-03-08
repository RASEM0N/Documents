import {Price, PRICE_CODE} from './Price/Price';
import {FactoryPrice} from './Price/FactoryPrice';

export class Movie {
    private readonly _title: string;
    private readonly _price: Price;

    constructor(
        title: string,
        priceCode: PRICE_CODE
    ) {
        this._title = title;
        this._price = new FactoryPrice().getPrice(priceCode)
    }

    public get price(): Price {
        return this._price;
    }

    public get title(): string {
        return this._title;
    }

    public getAmount(daysRented: number): number {
        return this._price.getAmount(daysRented);
    }

    public getFrequentRenterPoint(daysRented: number): number {
        return this._price.getFrequentRenterPoint(daysRented);
    }
}

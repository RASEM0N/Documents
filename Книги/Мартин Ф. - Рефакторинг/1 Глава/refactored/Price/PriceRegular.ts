import { Price } from './Price';

export class PriceRegular extends Price {
    public getAmount(daysRented: number): number {
        return daysRented * 3;
    }

    public getFrequentRenterPoint(): number {
        return 1;
    }
}
import { Price } from './Price';

export class PriceChildren extends Price {
    public getAmount(daysRented: number): number {
        let thisAmount = 2;
        if (daysRented > 2) {
            thisAmount += (daysRented - 2) * 1.5
        }
        return thisAmount;
    }

    public getFrequentRenterPoint(): number {
        return 1;
    }
}
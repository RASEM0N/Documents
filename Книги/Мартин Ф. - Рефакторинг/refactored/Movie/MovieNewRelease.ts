import { Movie } from './Movie';

export class MovieNewRelease extends Movie {
    public getAmount(daysRented: number): number {
        let thisAmount = 1.5;

        if (daysRented > 3) {
            thisAmount += (daysRented - 3) * 1.5
        }
        return thisAmount
    }

    public getFrequentRenterPoint(daysRented: number): number {
        let value = 1;

        if (daysRented > 1) {
            value++;
        }

        return value;
    }
}
import { Movie } from './Movie';

export class MovieRegular extends Movie {
    public getAmount(daysRented: number): number {
        return daysRented * 3;
    }

    public getFrequentRenterPoint(): number {
        return 1;
    }
}
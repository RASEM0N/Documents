import {Movie} from './Movie';

export class Retail {
    constructor(
        private _movie: Movie,
        private _daysRented: number
    ) {
    }

    public get daysRented(): number {
        return this._daysRented;
    }

    public get movie(): Movie {
        return this._movie;
    }

    public getAmount(): number {
        return this._movie.getAmount(this._daysRented);
    }

    public getFrequentRenterPoint(): number {
        return this._movie.getFrequentRenterPoint(this._daysRented)
    }
}

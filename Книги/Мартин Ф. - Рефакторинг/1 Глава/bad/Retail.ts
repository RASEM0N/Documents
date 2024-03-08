import { Movie } from './Movie';

export class Retail {
    constructor(
        private _movie: Movie,
        private _daysRented: number
    ) {
    }

    public get daysRender(): number {
        return this._daysRented;
    }

    public get movie(): Movie {
        return this._movie;
    }
}

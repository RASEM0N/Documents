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

    public getAmount(): number {

        switch (this.movie.priceCode) {

            case Movie.CHILDREN: {
                let thisAmount = 2;
                if (this.daysRender > 2) {
                    thisAmount += (this.daysRender - 2) * 1.5
                }
                return thisAmount;
            }

            case Movie.REGULAR: {
                return this.daysRender * 3
            }

            case Movie.NEW_RELEASE: {
                let thisAmount = 1.5;

                if (this.daysRender > 3) {
                    thisAmount += (this.daysRender - 3) * 1.5
                }
                return thisAmount
            }

            default:
                return 0;
        }
    }
}

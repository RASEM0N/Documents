import { Retail } from './Retail';
import { Movie } from './Movie';

export class Customer {

    constructor(
        private _name: string,
        private _retails: Retail[] = []
    ) {
    }

    public addRetail(retail: Retail): void {
        this._retails.push(retail);
    }

    public get name(): string {
        return this._name;
    }

    public statement(): string {
        let totalAmount = 0;
        let frequentRenterPoints = 0;
        let result = `Прокат ${this.name}\n`

        this._retails.forEach((retail) => {
            const thisAmount = retail.getAmount();

            frequentRenterPoints++;

            if (retail.movie.priceCode === Movie.NEW_RELEASE && retail.daysRender > 1) {
                frequentRenterPoints++;
            }

            result += `\t${retail.movie.title}\t ${thisAmount}\n`
            totalAmount += thisAmount;
        })

        result += `Сумма задолжности: ${totalAmount}\n`
        result += `Вы зарабали ${frequentRenterPoints} бонусных очков`


        return result
    }
}
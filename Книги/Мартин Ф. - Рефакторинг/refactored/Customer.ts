import { Retail } from './Retail';

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
            const amount = retail.getAmount();
            frequentRenterPoints += retail.getFrequentRenterPoint();

            result += `"${retail.movie.title}" ${amount}\n`
            totalAmount += amount;
        })

        result += `Сумма задолжности: ${totalAmount}\n`
        result += `Вы зарабали ${frequentRenterPoints} бонусных очков`


        return result
    }
}
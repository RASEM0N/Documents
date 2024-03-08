import {Retail} from './Retail';

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
        let result = `Прокат ${this.name}\n`
        result += this._retails.reduce((r, v) => r + `"${v.movie.title}" ${v.getAmount()}\n`,'')
        result += `Сумма задолжности: ${this.getTotalAmount()}\n`
        result += `Вы зарабали ${this.getTotalFrequentRenterPoints()} бонусных очков`

        return result
    }

    private getTotalAmount(): number {
        return this._retails.reduce((r, v) => r + v.getAmount(), 0)
    }

    private getTotalFrequentRenterPoints(): number {
        return this._retails.reduce((r, v) => r + v.getFrequentRenterPoint(), 0);
    }
}
/*
*
* AbstractMovie                                Retail                              Customer
* -----                                  <--   ------                         <--  --------
* priceCode: number                            daysRented: number                  statement(): void
* abstract getAmount(): number                 getAmount(): number                 getTotalAmount(): number
* abstract getFrequentRenterPoint(): number    getFrequentRenterPoint(): number    getTotalFrequentRenterPoints(): number
* */


import { Customer } from './Customer';
import { Retail } from './Retail';
import { Movie } from './Movie';
import { PRICE_CODE } from './Price/Price';

(() => {

    const customer = new Customer('Кинотеатр Сокол')

    customer.addRetail(
        new Retail(
            new Movie('Какой-то фильм 1', PRICE_CODE.newRelease),
            60
        ),
    )

    customer.addRetail(
        new Retail(
            new Movie('Какой-то фильм 2', PRICE_CODE.children),
            90
        ),
    )

    customer.addRetail(
        new Retail(
            new Movie('Какой-то фильм 3', PRICE_CODE.newRelease),
            120
        ),
    )
})();

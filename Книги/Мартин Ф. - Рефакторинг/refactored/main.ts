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
import { MovieRegular } from './Movie/MovieRegular';
import { MovieChildren } from './Movie/MovieChildren';
import { MovieNewRelease } from './Movie/MovieNewRelease';

(() => {

    const customer = new Customer('Кинотеатр Сокол')

    customer.addRetail(
        new Retail(
            new MovieRegular('Какой-то фильм 1', 40),
            60
        ),
    )

    customer.addRetail(
        new Retail(
            new MovieChildren('Какой-то фильм 3', 80),
            120
        ),
    )

    customer.addRetail(
        new Retail(
            new MovieNewRelease('Какой-то фильм 2', 60),
            90
        ),
    )
})();

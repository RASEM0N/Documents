/*
*
* Movie                    Retail                     Customer
* -----               <--  ------                <--  --------
* priceCode: number        daysRented: number         statement(): void
*                          getAmount(): number
* */


import { Customer } from './Customer';
import { Retail } from './Retail';
import { Movie } from './Movie';

(() => {

    const customer = new Customer('Кинотеатр Сокол')

    customer.addRetail(
        new Retail(
            new Movie('Какой-то фильм 1', 40),
            60
        ),
    )

    customer.addRetail(
        new Retail(
            new Movie('Какой-то фильм 2', 40),
            90
        ),
    )
})();

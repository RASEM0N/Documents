import { Price, PRICE_CODE } from './Price';
import { PriceChildren } from './PriceChildren';
import { PriceRegular } from './PriceRegular';
import { PriceNewRelease } from './PriceNewRelease';

export class FactoryPrice {

    public getPrice(priceCode: PRICE_CODE): Price {

        switch (priceCode) {
            case PRICE_CODE.children:
                return new PriceChildren();
            case PRICE_CODE.regular:
                return new PriceRegular();
            case PRICE_CODE.newRelease:
                return new PriceNewRelease();
            default: {
                throw new Error(`PriceCode: ${priceCode} не обнаружен`)
            }
        }
    }
}
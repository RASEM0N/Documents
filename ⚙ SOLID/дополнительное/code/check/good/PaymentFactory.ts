import {Action, PAYMENT_METHOD, PaymentDetails, TicketDetails} from "../extra";
import {OnlinePaymentModel} from "./OnlinePaymentModel";
import {CashPaymentModel} from "./CashPaymentModel";
import {TerminalPaymentModel} from "./TerminalPaymentModel";
import {PaymentModel} from "./AbstractPaymentModel";

export class PaymentFabric {
    private _ticket: TicketDetails;
    private _payment: PaymentDetails
    private _onPayChangeToMobilePhone: Action;

    constructor(
        payment: PaymentDetails,
        ticket: TicketDetails,
        onPayChangeToMobilePhone: Action
    ) {
        this._payment = payment;
        this._ticket = ticket;
        this._onPayChangeToMobilePhone = onPayChangeToMobilePhone;
    }

    public getPaymentModelByPaymentMethod(method: PAYMENT_METHOD): PaymentModel | null {
        switch (method) {
            case PAYMENT_METHOD.online:
                return new OnlinePaymentModel(this._ticket, this._payment);
            case PAYMENT_METHOD.cash:
                return new CashPaymentModel(this._ticket, this._payment);
            case PAYMENT_METHOD.terminal:
                return new TerminalPaymentModel(this._ticket, this._onPayChangeToMobilePhone);
            default: {
                return null;
            }
        }
    }
}
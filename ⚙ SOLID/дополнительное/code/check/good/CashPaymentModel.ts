import {PaymentDetails, Printer, TicketDetails} from "../extra";
import {PaymentModel} from "./AbstractPaymentModel";

export class CashPaymentModel extends PaymentModel {
    private _payment: PaymentDetails
    private _printer: Printer;

    constructor(ticket: TicketDetails, payment: PaymentDetails) {
        super(ticket);
        this._payment = payment;
        this._printer = new Printer();
    }

    public buyTicket(): void {
        // ....
    }
}
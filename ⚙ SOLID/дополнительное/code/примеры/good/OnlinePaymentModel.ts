import {PaymentDetails, ProcessingPayment, TicketDetails} from "../extra";
import {PaymentModel} from "./AbstractPaymentModel";

export class OnlinePaymentModel extends PaymentModel {
    private _payment: PaymentDetails
    private _processing: ProcessingPayment;

    constructor(ticket: TicketDetails, payment: PaymentDetails) {
        super(ticket);
        this._payment = payment;
        this._processing = new ProcessingPayment();
    }

    public buyTicket(): void {
        // ....
    }
}
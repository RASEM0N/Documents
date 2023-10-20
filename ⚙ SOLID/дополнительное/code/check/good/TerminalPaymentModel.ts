import {Action, TicketDetails} from "../extra";
import {PaymentModel} from "./AbstractPaymentModel";

export class TerminalPaymentModel extends PaymentModel {
    private _cashAccepted: number;
    private _onPayChangeToMobilePhone: Action;

    constructor(ticket: TicketDetails, onPayChangeToMobilePhone: Action) {
        super(ticket);
        this._onPayChangeToMobilePhone = onPayChangeToMobilePhone;
    }

    public buyTicket(): void {
        this.acceptCash();
        this.dispenseChange();
    }

    public acceptCash(): void {
        this._cashAccepted = 0;
        // ...
    }

    public dispenseChange(): void {
        this._onPayChangeToMobilePhone();
        // ...
    }
}
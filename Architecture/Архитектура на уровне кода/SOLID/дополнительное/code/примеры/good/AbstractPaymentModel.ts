import {TicketDetails} from "../extra";

export abstract class PaymentModel {
    private _ticket: TicketDetails;

    protected constructor(ticket: TicketDetails) {
        this._ticket = ticket;
    }

    public abstract buyTicket(): void;
}
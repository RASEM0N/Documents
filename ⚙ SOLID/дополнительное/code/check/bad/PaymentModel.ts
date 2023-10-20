import {Action, PAYMENT_METHOD, PaymentDetails, Printer, ProcessingPayment, TicketDetails} from "../extra";

export class PaymentModel {
    private _cashAccepted: number;

    public buyTicket(
        ticket: TicketDetails,
        payment: PaymentDetails,
        onPayChangeToMobilePhone: Action
    ): void {

        switch (payment.method) {

            case PAYMENT_METHOD.online:
                this.chargeCard(ticket, payment);
                break;

            case PAYMENT_METHOD.cash:
                this.cashRegister(ticket, payment);
                break;

            default: {
                console.error('Какая-та ебанная ошибка', payment.method);
            }
        }
    }

    public chargeCard(ticket: TicketDetails, payment: PaymentDetails): void {
        const processing = new ProcessingPayment();
        // ....
    }

    public cashRegister(ticket: TicketDetails, payment: PaymentDetails): void {
        const printer = new Printer();
        // ...
    }

    public acceptCash(ticket: TicketDetails): void {
        this._cashAccepted = 0;
        // ...
    }

    public dispenseChange(ticket: TicketDetails, onPayChangeToMobilePhone: Action): void {
        onPayChangeToMobilePhone();
        // ...
    }
}
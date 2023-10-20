import type {TicketDetails, PaymentDetails} from '../extra'
import {PaymentModel} from './PaymentModel';

function startPayment(): void {
    let ticket: TicketDetails;
    let payment: PaymentDetails;
    let onPayChangeToMobilePhone = (): void => {
    }
    const model = new PaymentModel();

    model.buyTicket(ticket, payment, onPayChangeToMobilePhone);
    model.buyTicket(ticket, payment, onPayChangeToMobilePhone);
    model.buyTicket(ticket, payment, onPayChangeToMobilePhone);
}
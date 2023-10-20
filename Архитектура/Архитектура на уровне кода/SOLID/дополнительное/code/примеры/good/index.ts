import {PaymentDetails, TicketDetails} from "../extra";
import {PaymentFabric} from "./PaymentFactory";

function startPayment(): void {
    let ticket: TicketDetails;
    let payment: PaymentDetails;
    let onPayChangeToMobilePhone = (): void => {
    }

    const fabric = new PaymentFabric(
        payment,
        ticket,
        onPayChangeToMobilePhone
    )

    const model = fabric.getPaymentModelByPaymentMethod(payment.method);

    model.buyTicket();
    model.buyTicket();
    model.buyTicket();
}

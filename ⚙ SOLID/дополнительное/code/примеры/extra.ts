export interface TicketDetails {}
export interface PaymentDetails {
    method: PAYMENT_METHOD
}
export type Action = () => void
export class ProcessingPayment {}
export class Printer {}
export enum PAYMENT_METHOD {
    online,
    terminal,
    cash
}

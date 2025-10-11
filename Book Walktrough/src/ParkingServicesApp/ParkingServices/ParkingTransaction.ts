import { PaymentPayload } from "./PaymentPayload"

export type ParkingTransaction = {
    plateNo: string
    parkingZone: string
    paymentPayload: PaymentPayload
}
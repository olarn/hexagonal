import { PaymentPayload } from "ParkingServices/App/PaymentPayload"

export interface ForPaymentGateWay {
  submit(payload: PaymentPayload): string
}
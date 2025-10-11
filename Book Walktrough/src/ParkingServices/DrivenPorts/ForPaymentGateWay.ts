import { PaymentPayload } from "ParkingServices/ParkingServices/PaymentPayload"

export interface ForPaymentGateWay {
  submit(payload: PaymentPayload): string
}
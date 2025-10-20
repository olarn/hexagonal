import { PaymentPayload } from "../../ParkingServicesApp/ParkingServices/ParkingServices";

export interface ForPaymentGateWay {
  submit(payload: PaymentPayload): string
}
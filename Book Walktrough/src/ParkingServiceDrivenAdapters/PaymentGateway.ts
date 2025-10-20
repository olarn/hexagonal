import { ForPaymentGateWay } from "../ParkingServicesApp/DrivenPorts/ForPaymentGateWay";
import { PaymentPayload } from "../ParkingServicesApp/ParkingServices/ParkingServices";

export class MockPaymentGateWay implements ForPaymentGateWay {
  submit(payload: PaymentPayload): string {
    return 'Payment Success.';
  }
}
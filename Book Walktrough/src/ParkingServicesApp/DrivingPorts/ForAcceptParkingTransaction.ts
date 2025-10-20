import { ParkingTransaction } from "../../ParkingServicesApp/ParkingServices/ParkingServices";

export interface ForAcceptParkingTransaction {
  payFor(transaction: ParkingTransaction): string
}
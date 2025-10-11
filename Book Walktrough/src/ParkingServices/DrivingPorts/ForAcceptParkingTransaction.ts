import { ParkingTransaction } from "ParkingServices/ParkingServices/ParkingTransaction"

export interface ForAcceptParkingTransaction {
  payFor(transaction: ParkingTransaction): string
}
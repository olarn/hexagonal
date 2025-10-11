import { ParkingTransaction } from "ParkingServices/App/ParkingTransaction"

export interface ForAcceptParkingTransaction {
  payFor(transaction: ParkingTransaction): string
}
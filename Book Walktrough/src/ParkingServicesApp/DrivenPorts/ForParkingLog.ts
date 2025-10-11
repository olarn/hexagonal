import { ParkingTransaction } from "ParkingServices/App/ParkingTransaction"

export interface ForParkingLog {
  log(parkingTransaction: ParkingTransaction): string
}
import { ParkingTransaction } from "ParkingServices/ParkingServices/ParkingTransaction"

export interface ForParkingLog {
  log(parkingTransaction: ParkingTransaction): string
}
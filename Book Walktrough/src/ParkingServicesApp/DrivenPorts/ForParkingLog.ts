import { ParkingTransaction } from "ParkingServicesApp/ParkingServices/ParkingTransaction"
export interface ForParkingLog {
  log(parkingTransaction: ParkingTransaction): string
}
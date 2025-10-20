import { ParkingTransaction } from "ParkingServicesApp/ParkingServices/ParkingServices"
export interface ForParkingLog {
  log(parkingTransaction: ParkingTransaction): string
}
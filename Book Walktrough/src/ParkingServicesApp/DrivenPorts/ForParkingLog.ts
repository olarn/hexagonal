import { ParkingTransaction } from "ParkingServicesApp/ParkingServices/ParkingServices"

export interface ForParkingLog {
  write(parkingTransaction: ParkingTransaction): string
}
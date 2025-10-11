import { ParkingTransaction } from "ParkingServices/ParkingServices/ParkingTransaction"

export interface ForParkingRepository {
  save(transaction: ParkingTransaction): string
}
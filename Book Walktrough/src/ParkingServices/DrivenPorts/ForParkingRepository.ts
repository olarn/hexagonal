import { ParkingTransaction } from "ParkingServices/App/ParkingTransaction"

export interface ForParkingRepository {
  save(transaction: ParkingTransaction): string
}
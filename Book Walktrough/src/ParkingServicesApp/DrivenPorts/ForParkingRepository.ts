import { ParkingTransaction } from "../../ParkingServicesApp/ParkingServices/ParkingServices";

export interface ForParkingRepository {
  save(transaction: ParkingTransaction): string
}
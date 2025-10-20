import { ForParkingRepository } from "../ParkingServicesApp/DrivenPorts/ForParkingRepository";
import { ParkingTransaction } from "../ParkingServicesApp/ParkingServices/ParkingServices";

export class MockParkingRepo implements ForParkingRepository {
  save(transaction: ParkingTransaction): string {
    return 'Transaction saved.';
  }
}

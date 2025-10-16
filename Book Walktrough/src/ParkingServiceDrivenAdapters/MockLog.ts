import { ForParkingLog } from "ParkingServicesApp/DrivenPorts/ForParkingLog";
import { ParkingTransaction } from "ParkingServicesApp/ParkingServices/ParkingTransaction";

export class MockLog implements ForParkingLog {
  log(parkingTransaction: ParkingTransaction): string {
    return 'Logged.';
  }
}

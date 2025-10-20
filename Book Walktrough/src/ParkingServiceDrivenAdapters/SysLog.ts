import { ForParkingLog } from "../ParkingServicesApp/DrivenPorts/ForParkingLog";
import { ParkingTransaction } from "../ParkingServicesApp/ParkingServices/ParkingServices";

export class MockSysLog implements ForParkingLog {
  write(parkingTransaction: ParkingTransaction): string {
    return 'Logged.';
  }
}

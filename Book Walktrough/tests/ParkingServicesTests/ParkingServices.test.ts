import { ForAcceptParkingTransaction } from "ParkingServicesApp/DrivingPorts/ForAcceptParkingTransaction"
import { ParkingTransaction } from "../../src/ParkingServicesApp/ParkingServices/ParkingTransaction"
import { ParkingServices } from "../../src/ParkingServicesApp/ParkingServices/ParkingServices"
import { MockParkingRepo } from "../../src/ParkingServiceDrivenAdapters/MockParkingRepo"
import { MockPaymentGateWay } from "../../src/ParkingServiceDrivenAdapters/MockPaymentGateWay"
import { MockLog } from "../../src/ParkingServiceDrivenAdapters/MockLog"

describe('Parking Services', () => {
  it('should accept parking fee for 1 hour of choices.', () => {
    const transaction: ParkingTransaction = {
      plateNo: 'กก.1111',
      parkingZone: 'zone1',
      paymentPayload: {
        transaction: 'PARKING_FEE',
        cardNo: '0000 1111 2222 3333',
        expireDate: new Date(),
        ccv: '000'
      }
    }

    const parkingService: ForAcceptParkingTransaction = new ParkingServices(
      new MockParkingRepo(),
      new MockPaymentGateWay(),
      new MockLog()
    )

    expect(
      parkingService.payFor(transaction)
    ).toEqual(
      `{"save": "Transaction saved.","pay": "Payment Success.","log": "Logged."}`
    )
  })
})


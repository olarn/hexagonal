import { ForAcceptParkingTransaction } from "../../src/ParkingServicesApp/DrivingPorts/ForAcceptParkingTransaction"
import { ParkingServices, ParkingTransaction } from "../../src/ParkingServicesApp/ParkingServices/ParkingServices"
import { ForParkingRepository } from "../../src/ParkingServicesApp/DrivenPorts/ForParkingRepository"
import { ForPaymentGateWay } from "../../src/ParkingServicesApp/DrivenPorts/ForPaymentGateWay"
import { ForParkingLog } from "../../src/ParkingServicesApp/DrivenPorts/ForParkingLog"

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
      mockParkingRepo,
      mockPaymentGateWay,
      mockLog
    )

    expect(
      parkingService.payFor(transaction)
    ).toEqual(
      `{"save": "Transaction saved.","pay": "Payment Success.","log": "Logged."}`
    )
  })
})

// -------------------------------------------- mock classes 

const mockParkingRepo: ForParkingRepository = {
  save: jest.fn().mockReturnValue('Transaction saved.')
}
const mockPaymentGateWay: ForPaymentGateWay = {
  submit: jest.fn().mockReturnValue('Payment Success.')
}
const mockLog: ForParkingLog = {
  write: jest.fn().mockReturnValue('Logged.')
}


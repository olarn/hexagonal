import { ForAcceptParkingTransaction } from "ParkingServices/DrivingPorts/ForAcceptParkingTransaction"
import { ParkingTransaction }  from "../../src/ParkingServices/App/ParkingTransaction"
import { PaymentPayload } from "../../src/ParkingServices/App/PaymentPayload"
import { ParkingServices } from "../../src/ParkingServices/App/ParkingServices"
import { ForParkingRepository } from "ParkingServices/DrivenPorts/ForParkingRepository"
import { ForPaymentGateWay } from "ParkingServices/DrivenPorts/ForPaymentGateWay"
import { ForParkingLog } from "ParkingServices/DrivenPorts/ForParkingLog"

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

class MockParkingRepo implements ForParkingRepository {
  save(transaction: ParkingTransaction): string {
    return 'Transaction saved.'
  }
}

class MockPaymentGateWay implements ForPaymentGateWay {
  submit(payload: PaymentPayload): string {
    return 'Payment Success.'
  }
}

class MockLog implements ForParkingLog {
  log(parkingTransaction: ParkingTransaction): string {
    return 'Logged.'
  }
}
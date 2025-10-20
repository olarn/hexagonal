import { ForParkingLog } from "ParkingServicesApp/DrivenPorts/ForParkingLog"
import { ForParkingRepository } from "ParkingServicesApp/DrivenPorts/ForParkingRepository"
import { ForPaymentGateWay } from "ParkingServicesApp/DrivenPorts/ForPaymentGateWay"
import { ForAcceptParkingTransaction } from "ParkingServicesApp/DrivingPorts/ForAcceptParkingTransaction"

export type ParkingTransaction = {
  plateNo: string
  parkingZone: string
  paymentPayload: PaymentPayload
}

export type PaymentPayload = {
  transaction: string
  cardNo: string
  expireDate: Date
  ccv: string
}

export class ParkingServices implements ForAcceptParkingTransaction {
  constructor(
    private repository: ForParkingRepository,
    private paymentGateWay: ForPaymentGateWay,
    private syslog: ForParkingLog
  ) { }

  payFor(transaction: ParkingTransaction): string {
    const saveRepoResult = this.repository.save(transaction)
    const paymentResult = this.paymentGateWay.submit(transaction.paymentPayload)
    const logResult = this.syslog.write(transaction)
    return `{"save": "${saveRepoResult}","pay": "${paymentResult}","log": "${logResult}"}`
  }
}
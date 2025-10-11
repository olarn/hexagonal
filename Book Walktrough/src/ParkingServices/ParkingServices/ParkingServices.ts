import { ForAcceptParkingTransaction } from "ParkingServices/DrivingPorts/ForAcceptParkingTransaction"
import { ParkingTransaction } from "./ParkingTransaction"
import { ForParkingRepository } from "ParkingServices/DrivenPorts/ForParkingRepository"
import { ForPaymentGateWay } from "ParkingServices/DrivenPorts/ForPaymentGateWay"
import { ForParkingLog } from "ParkingServices/DrivenPorts/ForParkingLog"

export class ParkingServices implements ForAcceptParkingTransaction {
  constructor(
    private repository: ForParkingRepository,
    private paymentGateWay: ForPaymentGateWay,
    private log: ForParkingLog
  ) { }

  payFor(transaction: ParkingTransaction): string {
    const saveRepoResult = this.repository.save(transaction)
    const paymentResult = this.paymentGateWay.submit(transaction.paymentPayload)
    const logResult = this.log.log(transaction)
    return `{"save": "${saveRepoResult}","pay": "${paymentResult}","log": "${logResult}"}`
  }
}
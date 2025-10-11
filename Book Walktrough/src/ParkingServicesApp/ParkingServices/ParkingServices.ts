import { ForParkingLog } from "ParkingServicesApp/DrivenPorts/ForParkingLog"
import { ForParkingRepository } from "ParkingServicesApp/DrivenPorts/ForParkingRepository"
import { ForPaymentGateWay } from "ParkingServicesApp/DrivenPorts/ForPaymentGateWay"
import { ForAcceptParkingTransaction } from "ParkingServicesApp/DrivingPorts/ForAcceptParkingTransaction"
import { ParkingTransaction } from "./ParkingTransaction"

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
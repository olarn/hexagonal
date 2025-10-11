import { ForCalculatingTax } from "../DrivingPorts/ForCalculatingTax"
import { ForGettingTaxRates } from "../DrivenPorts/ForGettingTaxRates"

// app that implement port
export class TaxCalculator implements ForCalculatingTax {
  constructor(private taxRateRepository: ForGettingTaxRates) { }

  taxOn(amount: number): number {
    return amount + this.taxRateRepository.getTaxRateFor(amount)
  }
}
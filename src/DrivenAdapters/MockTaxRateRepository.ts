import { ForGettingTaxRate } from "../TaxCalculatorApp/DrivenPorts/ForGettingTaxRate";

export class TaxRateRepository implements ForGettingTaxRate {
  taxRate(amount: number): number {
    return 0.061;
  }
}
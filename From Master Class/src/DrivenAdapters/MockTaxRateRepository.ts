import { ForGettingTaxRate } from "../TaxCalculatorApp/DrivenPorts/ForGettingTaxRate";

export class MockTaxRateRepository implements ForGettingTaxRate {
  taxRate(amount: number): number {
    return 0.061;
  }
}
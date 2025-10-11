import { ForGettingTaxRate } from "../DrivenPorts/ForGettingTaxRate";
import { ForTaxCalculator } from "../DrivingPorts/ForTaxCalculator";

export class TaxCalculator implements ForTaxCalculator {
  constructor(private readonly forGettingTaxRate: ForGettingTaxRate) { }

  taxFor(amount: number): number {
    return amount * this.forGettingTaxRate.taxRate(amount);
  }
}
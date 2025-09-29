import * as fs from "fs";
import { ForGettingTaxRate } from "../TaxCalculatorApp/DrivenPorts/ForGettingTaxRate";

export class ExternalTaxRateRepository implements ForGettingTaxRate {
  taxRate(amount: number): number {
    const taxRate = fs.readFileSync(__dirname + "/taxRate.json", "utf8");
    return JSON.parse(taxRate).taxRate;
  }
}
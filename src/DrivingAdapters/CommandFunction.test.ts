import { ExternalTaxRateRepository } from "../DrivenAdapters/ExternalTaxRateRepository";
import { ForGettingTaxRate } from "../TaxCalculatorApp/DrivenPorts/ForGettingTaxRate";
import { ForTaxCalculator } from "../TaxCalculatorApp/DrivingPorts/ForTaxCalculator";
import { TaxCalculator } from "../TaxCalculatorApp/TaxCalculator/TaxCalculator";

describe("CommandFunction", () => {
  it("should return the tax for a given price", () => {
    const commandFunction: ForGettingTaxRate = new ExternalTaxRateRepository();
    const taxCalculator: ForTaxCalculator = new TaxCalculator(commandFunction);

    expect(taxCalculator.taxFor(100)).toBe(5);
  });
});
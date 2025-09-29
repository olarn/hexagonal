import { TaxCalculator } from "../TaxCalculatorApp/TaxCalculator/TaxCalculator";
import { ForTaxCalculator } from "../TaxCalculatorApp/DrivingPorts/ForTaxCalculator";
import { ForGettingTaxRate } from "../TaxCalculatorApp/DrivenPorts/ForGettingTaxRate";
import { TaxRateRepository as MockTaxRateRepository } from "../DrivenAdapters/MockTaxRateRepository";

describe("ForTaxCalculator", () => {
  it("should return the tax for a given price", () => {
    const mockGettingTaxRate: ForGettingTaxRate = new MockTaxRateRepository();

    const taxCalculator: ForTaxCalculator = new TaxCalculator(mockGettingTaxRate);
    expect(
      taxCalculator.taxFor(100)
    ).toBe(6.1);
  });
});
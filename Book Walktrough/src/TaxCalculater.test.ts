import {
  ForCalculatingTax,
  ForGettingTaxRates,
  TaxCalculator
} from "./TaxCalculater"

// Driving Adapter - in this case, it's a test case
describe('Tax Calculator', () => {
  it('should calculate with simple tax rate 10% with amount 100', () => {
    const forFixedTax = new FixedTaxRateRepository()
    const taxCalculater = new TaxCalculator(forFixedTax)

    expect(taxCalculater.taxOn(100)).toEqual(110.00)
  })

  it('should work with different fixed tax rate, like 7%', () => {
    const for7percentTax = new SevenPercentTaxRepository()
    const taxCalculater = new TaxCalculator(for7percentTax)
    expect(taxCalculater.taxOn(100)).toEqual(107.0)
  })
})

// Driven Adapter - in this case, it's a mocking class
class FixedTaxRateRepository implements ForGettingTaxRates {
  getTaxRateFor(amount: number): number {
    return amount * 0.1
  }
}

class SevenPercentTaxRepository implements ForGettingTaxRates {
  getTaxRateFor(amount: number): number {
      return amount * 0.07
  }
}


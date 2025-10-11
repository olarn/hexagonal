import { TaxCalculator, FixTaxRatesCalculator } from './taxCalculator';

describe('Tax Calculator', () => {
  it('should calculate taxes with fixed rates', () => {
    const taxCalculator = new TaxCalculator(new FixTaxRatesCalculator());
    expect(
      taxCalculator.textOn(100)
    ).toBe(15)
  })

  it('should calculate taxes with step rates', () => {
    
  })
})
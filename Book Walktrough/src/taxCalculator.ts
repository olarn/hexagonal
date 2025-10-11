// Driving adapters
interface ForCalculatingTaxes {
  textOn(amount: number): number;
}

// Driven adapters
interface ForGettingTaxRates {
  taxRate(amount: number): number;
}

export class TaxCalculator implements ForCalculatingTaxes {
  constructor(private forGettingTaxRates: ForGettingTaxRates) { }

  textOn(amount: number): number {
    return amount * this.forGettingTaxRates!.taxRate(amount);
  }
}

export class FixTaxRatesCalculator implements ForGettingTaxRates {
  taxRate(amount: number): number {
    return 0.15;
  }
}
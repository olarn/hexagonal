
// driver port
interface ForCalculatingTax {
  taxOn(amount: number): number
}

// app that implement port
class TaxCalculator implements ForCalculatingTax {
  constructor(private taxRateRepository: ForGettingTaxRates) { }

  taxOn(amount: number): number {
    return amount + this.taxRateRepository.getTaxRateFor(amount)
  }
}

// driven port
interface ForGettingTaxRates {
  getTaxRateFor(amount: number): number
}

export {
  ForCalculatingTax,
  ForGettingTaxRates,
  TaxCalculator
}
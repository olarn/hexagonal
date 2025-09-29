import { ExternalTaxRateRepository } from "./DrivenAdapters/ExternalTaxRateRepository";
import { TaxCalculator } from "./TaxCalculatorApp/TaxCalculator/TaxCalculator";

// Get command line arguments
const args = process.argv.slice(2);

const price = parseFloat(args[0]);
const qty = parseFloat(args[1]);
const tax = parseFloat(args[2]);

const orderValue = price * qty;

const taxCalculator = new TaxCalculator(new ExternalTaxRateRepository());
console.log(taxCalculator.taxFor(orderValue));

// console.log(
//   `price: ${price} \n` +
//   `qty: ${qty} \n` +
//   `order value: ${orderValue} \n` +
//   `tax rate: ${tax} \n` +
//   `tax amount: ${orderValue * tax / 100} \n` +
//   `final price ${orderValue + (orderValue * tax / 100)}`);

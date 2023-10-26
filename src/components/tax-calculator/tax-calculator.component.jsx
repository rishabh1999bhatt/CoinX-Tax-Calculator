import InputFYAndCountry from "../input-financial-year-and-country/input-financial-year-and-country.component";
import InputInvestmentLogistics from "../input-investment-logistics/input-investment-logistics.component";
import CapitalGainsAndDiscount from "../capital-gains-and-discount/capital-gains-and-discount.component";
import TaxToPay from "../tax-to-pay/tax-to-pay.component";

import "./tax-calculator.styles.css";
const TaxCalculator = () => {
  return (
    <section className="tax-calculator-container">
      <div className="tax-calculator-body ">
        <header>Free Crypto Tax Calculator Australia</header>
        <div className="tax-calculator-body-inputs">
          <InputFYAndCountry />
          <div className="hr-divider"></div>
          <InputInvestmentLogistics />
          <CapitalGainsAndDiscount />
          <TaxToPay />
        </div>
      </div>
    </section>
  );
};

export default TaxCalculator;

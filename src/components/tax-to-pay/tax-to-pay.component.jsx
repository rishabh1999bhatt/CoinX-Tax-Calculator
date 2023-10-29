import { useSelector } from "react-redux";
import {
  selectInvestmentType,
  selectNetCapitalGainsAndTaxAmountShortTerm,
  selectNetCapitalGainsAndTaxAmountLongTerm,
  selectFinancialYearAndCountry,
} from "../../store/user-inputs/user-inputs.selector";

import { countryCurrency } from "../../utils/country-currency";

import "./tax-to-pay.styles.css";

const TaxToPay = () => {
  const { netCapitalGainsLong, netTaxAmountLong } = useSelector(
    selectNetCapitalGainsAndTaxAmountLongTerm
  );
  const { netCapitalGainsShort, netTaxAmountShort } = useSelector(
    selectNetCapitalGainsAndTaxAmountShortTerm
  );
  const investmentType = useSelector(selectInvestmentType);

  const { country } = useSelector(selectFinancialYearAndCountry);

  return (
    <div className="tax-to-pay-container">
      <div className="tax-t-p-left">
        <div className="tax-t-p-left-top">Net Capital gains tax amount</div>
        <div className="tax-t-p-left-bottom">
          {investmentType === "Long Term"
            ? `${countryCurrency[country]} ${
                netCapitalGainsLong >= 0 ? netCapitalGainsLong : 0
              }`
            : `${countryCurrency[country]} ${
                netCapitalGainsShort >= 0 ? netCapitalGainsShort : 0
              }`}
        </div>
      </div>
      <div className="tax-t-p-right">
        <div className="tax-t-p-right-top">The tax you need to pay*</div>
        <div className="tax-t-p-right-bottom">
          {investmentType === "Long Term"
            ? `${countryCurrency[country]} ${
                netTaxAmountLong >= 0 ? netTaxAmountLong : 0
              }`
            : `${countryCurrency[country]} ${
                netTaxAmountShort >= 0 ? netTaxAmountShort : 0
              }`}
        </div>
      </div>
    </div>
  );
};

export default TaxToPay;

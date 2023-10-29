import { useSelector } from "react-redux";

import {
  selectReturns,
  selectInvestmentType,
} from "../../store/user-inputs/user-inputs.selector";

import { selectFinancialYearAndCountry } from "../../store/user-inputs/user-inputs.selector";

import { countryCurrency } from "../../utils/country-currency";

import "./capital-gains-and-discount.styles.css";

const CapitalGainsAndDiscount = () => {
  const { capitalGains, longTermDiscount } = useSelector(selectReturns);
  const investmentType = useSelector(selectInvestmentType);

  const { country } = useSelector(selectFinancialYearAndCountry);
  return (
    <div
      className={`capital-gains-and-discount-container ${
        investmentType === "Short Term" || investmentType === ""
          ? "hide-gains-and-discount-container"
          : ""
      }`}
    >
      <div className="cap-gains-and-discount-first-row-left">
        <label className="cap-gains-and-discount-label">
          Capital gains amount
        </label>
        <div className="cap-gains-and-discount-input">
          {`${countryCurrency[country]} ${
            capitalGains >= 0 ? capitalGains : 0
          }`}
        </div>
      </div>
      <div className="cap-gains-and-discount-first-row-right">
        <label className="cap-gains-and-discount-label">
          Discount for long term gains
        </label>
        <div className="cap-gains-and-discount-input">
          {`${countryCurrency[country]} ${
            longTermDiscount >= 0 ? longTermDiscount : 0
          }`}
        </div>
      </div>
    </div>
  );
};

export default CapitalGainsAndDiscount;

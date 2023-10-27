import { useRef, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { incomeRange } from "../../utils/incomes.utils";
import { taxRates } from "../../utils/tax-rates.utils";

import { ReactComponent as Checked } from "../../assets/checked.svg";
import { ReactComponent as SelectDown } from "../../assets/select-down.svg";

import {
  selectInvestmentType,
  selectInvestmentLogistics,
} from "../../store/user-inputs/user-inputs.selector";
import {
  setInvestmentType,
  setInvestmentLogistics,
} from "../../store/user-inputs/user-inputs.action";

import "./input-investment-logistics.styles.css";

const InputInvestmentLogistics = () => {
  const inputRef = useRef();
  const dispatch = useDispatch();
  const investmentType = useSelector(selectInvestmentType);
  const investmentLogistics = useSelector(selectInvestmentLogistics);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleChangeTerm = (event) => {
    const { className } = event.target;
    if (
      className === "short-term-top" ||
      className === "short-term-top-left" ||
      className === "short-term-top-right"
    ) {
      dispatch(setInvestmentType("Short Term"));
    } else {
      dispatch(setInvestmentType("Long Term"));
    }
  };

  const handleChangeInvestmentLogistics = (event) => {
    const { id, value } = event.target;
    dispatch(setInvestmentLogistics({ ...investmentLogistics, [id]: value }));
  };
  const { purchasePrice, sellPrice, expanses, annualIncome } =
    investmentLogistics;

  return (
    <div className="investment-logistics-container">
      <div className="inv-log-first-row">
        <div className="inv-log-first-row-left input-prefix-fix">
          <label className="inv-log-label">
            Enter purchase price of Crypto
          </label>
          <span className="input-sign">$ </span>
          <input
            type="number"
            ref={inputRef}
            className="inv-log-input input-padding-fix"
            id="purchasePrice"
            onChange={handleChangeInvestmentLogistics}
            value={purchasePrice}
          />
        </div>
        <div className="inv-log-first-row-right input-prefix-fix">
          <label className="inv-log-label">Enter sale price of Crypto</label>
          <span className="input-sign">$ </span>
          <input
            type="number"
            className="inv-log-input input-padding-fix"
            id="sellPrice"
            onChange={handleChangeInvestmentLogistics}
            value={sellPrice}
          />
        </div>
      </div>
      <div className="inv-log-second-row">
        <div className="inv-log-second-row-left input-prefix-fix">
          <label className="inv-log-label">Enter your Expenses</label>
          <span className="input-sign">$ </span>
          <input
            type="number"
            className="inv-log-input input-padding-fix"
            id="expanses"
            onChange={handleChangeInvestmentLogistics}
            value={expanses}
          />
        </div>
        <div className="inv-log-second-row-right">
          <label className="inv-log-label">Investment Type</label>
          <div className="inv-log-duration">
            <div className="short-term">
              <div
                onClick={handleChangeTerm}
                className={`short-term-top ${
                  investmentType === "Short Term" ? "selected-investment" : ""
                }`}
              >
                <div className="short-term-top-left">Short Term</div>
                <div
                  className={`short-term-top-right ${
                    investmentType === "Short Term" ? "show-checkbox" : ""
                  }`}
                >
                  <Checked className="svg-checked" />
                </div>
              </div>
              <div className="short-term-bottom">&lt; 12 months</div>
            </div>
            <div className="long-term">
              <div
                onClick={handleChangeTerm}
                className={`long-term-top ${
                  investmentType === "Long Term" ? "selected-investment" : ""
                }`}
              >
                <div className="long-term-top-left">Long Term</div>
                <div
                  className={`long-term-top-right ${
                    investmentType === "Long Term" ? "show-checkbox" : ""
                  }`}
                >
                  <Checked className="svg-checked" />
                </div>
              </div>
              <div className="long-term-bottom">&gt; 12 months</div>
            </div>
          </div>
        </div>
      </div>
      <div className="inv-log-third-row">
        <div className="inv-log-third-row-left">
          <label className="inv-log-label">Select Your Annual Income</label>
          <SelectDown className="select-down-3" />
          <select
            className="inv-log-input select-tag"
            id="annualIncome"
            onChange={handleChangeInvestmentLogistics}
            value={annualIncome}
          >
            {incomeRange.map(({ id, range }) => {
              return (
                <option key={id} value={`${range}`}>
                  {range}
                </option>
              );
            })}
          </select>
        </div>
        <div className="inv-log-third-row-right">
          <div className="tax-rate-label">Tax Rate</div>
          <div className="tax-rate">{taxRates[annualIncome]}</div>
        </div>
      </div>
    </div>
  );
};

export default InputInvestmentLogistics;

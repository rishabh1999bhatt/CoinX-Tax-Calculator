import { useDispatch, useSelector } from "react-redux";

import { setFinancialYearAndCountry } from "../../store/user-inputs/user-inputs.action";
import { selectFinancialYearAndCountry } from "../../store/user-inputs/user-inputs.selector";

import { countries } from "../../utils/countries.utils";
import { financialYears } from "../../utils/financial-year.utils";

import { ReactComponent as SelectDown } from "../../assets/select-down.svg";

import "./input-financial-year-and-country.styles.css";

const InputFYAndCountry = () => {
  const dispatch = useDispatch();
  const financialYearAndCountry = useSelector(selectFinancialYearAndCountry);

  const handleSelectFY_Country = (event) => {
    const { id, value } = event.target;
    dispatch(
      setFinancialYearAndCountry({ ...financialYearAndCountry, [id]: value })
    );
  };
  return (
    <div className="select-financial-year-countries">
      <div className="select-year">
        <label>Financial Year</label>
        <SelectDown className="select-down-1" />
        <select
          id="financialYear"
          className="select-tag-1"
          onChange={handleSelectFY_Country}
          value={financialYearAndCountry.financialYear}
        >
          {financialYears.map(({ id, year }) => {
            return (
              <option key={id} value={`${year}`}>
                {year}
              </option>
            );
          })}
        </select>
      </div>
      <div className="select-country">
        <label>Country</label>
        <SelectDown className="select-down-2" />
        <select
          id="country"
          className="select-tag-2"
          onChange={handleSelectFY_Country}
          value={financialYearAndCountry.country}
        >
          {countries.map(({ id, name, logo }) => {
            return (
              <option key={id} value={`${name}`}>
                {name}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default InputFYAndCountry;

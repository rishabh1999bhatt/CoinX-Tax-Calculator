import { createSelector } from "reselect";

import { taxRatesInPercent } from "../../utils/tax-rates.utils";

const selectUserInputsReducer = (state) => state.userInputs;

export const selectFinancialYearAndCountry = createSelector(
  [selectUserInputsReducer],
  (userInputs) => userInputs.financialYearAndCountry
);

export const selectInvestmentType = createSelector(
  [selectUserInputsReducer],
  (userInputs) => userInputs.investmentType
);

export const selectInvestmentLogistics = createSelector(
  [selectUserInputsReducer],
  (userInputs) => userInputs.investmentLogistics
);

export const selectReturns = createSelector(
  [selectInvestmentLogistics],
  (investmentLogistics) => {
    const { purchasePrice, sellPrice, expanses } = investmentLogistics;
    return {
      capitalGains: `${sellPrice - purchasePrice - expanses}`,
      longTermDiscount: `${(sellPrice - purchasePrice - expanses) / 2}`,
    };
  }
);

export const selectNetCapitalGainsAndTaxAmountLongTerm = createSelector(
  [selectReturns, selectInvestmentLogistics],
  (returns, investmentLogistics) => {
    const { capitalGains, longTermDiscount } = returns;
    const { annualIncome } = investmentLogistics;
    return {
      netCapitalGainsLong: `${capitalGains - longTermDiscount}`,
      netTaxAmountLong: `${
        ((capitalGains - longTermDiscount) * taxRatesInPercent[annualIncome]) /
        100
      }`,
    };
  }
);

export const selectNetCapitalGainsAndTaxAmountShortTerm = createSelector(
  [selectReturns, selectInvestmentLogistics],
  (returns, investmentLogistics) => {
    const { capitalGains, longTermDiscount } = returns;
    const { annualIncome } = investmentLogistics;
    return {
      netCapitalGainsShort: `${capitalGains}`,
      netTaxAmountShort: `${
        (capitalGains * taxRatesInPercent[annualIncome]) / 100
      }`,
    };
  }
);

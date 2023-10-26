import { USER_ACTION_TYPES } from "./user-inputs.types";

import { createAction } from "../../utils/action-creator/action-creator.utils";

export const setFinancialYearAndCountry = (fy_and_country) =>
  createAction(
    USER_ACTION_TYPES.SET_FINANCIAL_YEAR_AND_COUNTRY,
    fy_and_country
  );

export const setInvestmentType = (investmentType) =>
  createAction(USER_ACTION_TYPES.SET_INVESTMENT_TYPE, investmentType);

export const setInvestmentLogistics = (investmentLogistics) =>
  createAction(USER_ACTION_TYPES.SET_INVESTMENT_LOGISTICS, investmentLogistics);

import { USER_ACTION_TYPES } from "./user-inputs.types";

export const USER_INPUTS_INITIAL_STATE = {
  financialYearAndCountry: { financialYear: "", country: "" },
  investmentLogistics: {
    purchasePrice: "",
    sellPrice: "",
    expanses: "",
    annualIncome: "",
  },
  investmentType: "Long Term",
};

export const userInputsReducer = (
  state = USER_INPUTS_INITIAL_STATE,
  action = {}
) => {
  const { type, payload } = action;
  switch (type) {
    case USER_ACTION_TYPES.SET_FINANCIAL_YEAR_AND_COUNTRY:
      return { ...state, financialYearAndCountry: payload };
    case USER_ACTION_TYPES.SET_INVESTMENT_LOGISTICS:
      return { ...state, investmentLogistics: payload };
    case USER_ACTION_TYPES.SET_INVESTMENT_TYPE:
      return { ...state, investmentType: payload };
    default:
      return state;
  }
};

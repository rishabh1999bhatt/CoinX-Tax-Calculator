import { useSelector } from "react-redux";
import { selectNetCapitalGainsAndTaxAmount } from "../../store/user-inputs/user-inputs.selector";
import "./tax-to-pay.styles.css";

const TaxToPay = () => {
  const { netCapitalGains, netTaxAmount } = useSelector(
    selectNetCapitalGainsAndTaxAmount
  );
  return (
    <div className="tax-to-pay-container">
      <div className="tax-t-p-left">
        <div className="tax-t-p-left-top">Net Capital gains tax amount</div>
        <div className="tax-t-p-left-bottom">
          $ {netCapitalGains >= 0 ? netCapitalGains : 0}
        </div>
      </div>
      <div className="tax-t-p-right">
        <div className="tax-t-p-right-top">The tax you need to pay*</div>
        <div className="tax-t-p-right-bottom">
          $ {netTaxAmount >= 0 ? netTaxAmount : 0}
        </div>
      </div>
    </div>
  );
};

export default TaxToPay;

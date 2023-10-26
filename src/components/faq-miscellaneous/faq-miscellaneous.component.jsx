import { incomeRange } from "../../utils/incomes.utils";
import { taxRates } from "../../utils/tax-rates.utils";

import "./faq-miscellaneous.styles.css";

const MissedFAQ = () => {
  return (
    <>
      <div className="faq-question-container">
        <p className="faq-question">
          10. How do I use a cryptocurrency tax calculator?
        </p>
        <p className="faq-answer">
          In order to use a cryptocurrency tax calculator, you need to input
          information about your cryptocurrency transactions.<br></br>After you
          enter your information, the cryptocurrency tax calculator will
          calculate the gain or loss on every transaction.<br></br>
          <br></br>This includes:<br></br> 1. The financial year you want to
          calculate your taxes for.<br></br> 2. The country you want to
          calculate your taxes for.<br></br> 3. The purchase price of the coin.
          <br></br> 4. The sale price of the coin.<br></br>
          <br></br>You will get results that mention the following:<br></br> 1.
          The total profit/loss you made<br></br> 2. The tax you’re liable to
          pay
        </p>

        <p className="still-have-doubts">
          Still have doubts?{" "}
          <span className="blue-1">Consult with a crypto taxation expert</span>
        </p>
        <div className="question-hr-line"></div>
      </div>
      <div className="faq-question-container">
        <p className="faq-question">
          11. How do I calculate my crypto tax in Australia?
        </p>
        <p className="faq-answer">
          To calculate your crypto tax in Australia accurately, you need to
          consider both income tax and capital gains tax.<br></br>
          <br></br> <span className="bold-1">Income Tax</span>
          <br></br> In Australia, when an individual (investor) sells, trades,
          spends, earns (salary, mining, interest) or gifts cryptocurrency, the
          net capital gain is taxed at the same rate as their Income Tax. This
          tax rate is determined based on their total income for the tax year.
        </p>
        <div className="tax-rates">
          <p>ATO Individual Income Tax Rates 2022–2023</p>
          <div className="tax-rates-container">
            <div className="tax-rate-left">
              <div className="income-range-heading">Income</div>
              {incomeRange.map(({ range }) => (
                <div key={range} className="income-range-box">
                  {range}
                </div>
              ))}
            </div>
            <div className="tax-rate-right">
              <div className="tax-rates-heading">Tax Rate</div>
              {Object.values(taxRates).map((taxRate) => (
                <div key={taxRate} className="tax-rate-box">
                  {taxRate}
                </div>
              ))}
            </div>
          </div>
        </div>
        <p className="capital-gains-tax">Capital Gains Tax (CGT)</p>
        <p className="capital-gains-tax-content">
          Calculate your capital gains or losses on cryptocurrency transactions
          using this formula:
        </p>
        <p className="capital-gains-formula">
          Capital Gain/Loss = Capital Proceeds - Cost Basis
        </p>
        <div className="final-note">
          <p className="final-note-1">
            Note:<br></br> Capital Proceeds (sale value or any form of receipt)
            <br></br> Cost Basis (costs incurred to acquire, hold, and dispose
            of the asset)
          </p>
          <p className="final-note-2">
            Your tax rate depends on whether you held the cryptocurrency for
            more than 12 months (long-term) or less (short-term). Long-term
            gains receive a 50% discount.
          </p>
          <p className="final-note-2">
            Calculate your Australian crypto taxes accurately and effortlessly
            with KoinX's free crypto tax calculator for Australia. It simplifies
            the process, ensuring compliance with the latest tax rates and
            regulations making crypto tax calculations easy and precise.
          </p>
        </div>
        <div className="question-hr-line"></div>
      </div>
    </>
  );
};

export default MissedFAQ;

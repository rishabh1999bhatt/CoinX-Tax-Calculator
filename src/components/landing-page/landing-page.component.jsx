import "./landing-page.styles.css";

import TaxCalculator from "../tax-calculator/tax-calculator.component";
import WebsiteCard from "../website-card/website-card.component";
import FAQ from "../faq/faq-component";
import CTA from "../cta/cta.component";

const LandingPage = () => {
  return (
    <div className="landing-page-container">
      <div className="landing-page-left">
        <TaxCalculator />
        <FAQ />
      </div>
      <WebsiteCard />
    </div>
  );
};

export default LandingPage;

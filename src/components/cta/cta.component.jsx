import { ReactComponent as CTALogo } from "../../assets/cta-logo.svg";

import "./cta.styles.css";

const CTA = () => {
  return (
    <div className="cta-container">
      <div className="cta-card">
        <CTALogo />
        <div className="cta-content">
          <p>
            Stay up to date with latest crypto news and events. Subscribe to our
            newsletter
          </p>
          <div className="email-field">
            <input type="email" placeholder="Enter your email address" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;

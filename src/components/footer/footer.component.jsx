import { ReactComponent as FooterLogo } from "../../assets/footer-logo.svg";
import { ReactComponent as AngelList } from "../../assets/footer-angelist.svg";
import { ReactComponent as Facebook } from "../../assets/footer-facebook.svg";
import { ReactComponent as Instagram } from "../../assets/footer-instagram.svg";
import { ReactComponent as LinkedIn } from "../../assets/footer-linkedin.svg";
import { ReactComponent as Twitter } from "../../assets/footer-twitter.svg";
import { ReactComponent as YouTube } from "../../assets/footer-youtube.svg";

import "./footer.styles.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-top">
        <FooterLogo />
        <div className="footer-links-container">
          <AngelList className="footer-svg" />
          <Facebook className="footer-svg" />
          <Instagram className="footer-svg" />
          <LinkedIn className="footer-svg" />
          <Twitter className="footer-svg" />
          <YouTube className="footer-svg" />
        </div>
      </div>
      <div className="divider"></div>
      <div className="footer-middle">
        <div className="f-m-1">
          <p className="f-m-heading">Crypto Taxes for</p>
          <p className="f-m-item">Individuals and investors</p>
          <p className="f-m-item">Tax Professionals and Accountants</p>
          <p className="f-m-item">Exchanges and Web3 projects</p>
        </div>
        <div className="f-m-missed">
          <p className="f-m-heading">Free Tools</p>
          <p className="f-m-item">Crypto Prices Live</p>
          <p className="f-m-item">Crypto Tax Calculator</p>
          <p className="f-m-item">Crypto Tax Saving Speculator</p>
          <p className="f-m-item">Crypto Profit Calculator</p>
          <p className="f-m-item">Crypto Converter</p>
          <p className="f-m-item">Crypto Staking ROI Calculator</p>
        </div>
        <div className="f-m-2">
          <p className="f-m-heading">Resource Center</p>
          <p className="f-m-item">Crypto Tax Guides</p>
          <p className="f-m-item">Dumb Ways To Lose Money</p>
          <p className="f-m-item">Crypto Tax Savings Guide</p>
          <p className="f-m-item">Blogs</p>
          <p className="f-m-item">Crypto Buying Guides</p>
          <p className="f-m-item">Crypto Staking Guides</p>
          <p className="f-m-item">Crypto Mining Guides</p>
          <p className="f-m-item">Crypto Price Predictions</p>
        </div>
        <div className="f-m-3">
          <p className="f-m-heading">Help And Support</p>
          <p className="f-m-item">Product Guides</p>
          <p className="f-m-item">How To Guides</p>
          <p className="f-m-item">Blogs</p>
          <p className="f-m-item">Templates</p>
          <p className="f-m-item">Contact us</p>
        </div>
        <div className="f-m-4">
          <p className="f-m-heading">Company</p>
          <p className="f-m-item">About Us</p>
          <p className="f-m-item">Backed by</p>
          <p className="f-m-item">Media and Press</p>
          <p className="f-m-item">Careers</p>
          <p className="f-m-item">Refund Policy</p>
          <p className="f-m-item">Brand Assets</p>
          <p className="f-m-item">Terms of use</p>
          <p className="f-m-item">Privacy Policy</p>
        </div>
      </div>
      <div className="divider"></div>
      <p className="footer-end">
        © All rights reserved by Simplify Infotech Pvt. Ltd.
      </p>
    </div>
  );
};
export default Footer;

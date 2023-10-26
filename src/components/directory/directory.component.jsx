import NavBar from "../navbar/navbar.component";
import LandingPage from "../landing-page/landing-page.component";
import CTA from "../cta/cta.component";
import Footer from "../footer/footer.component";

const Directory = () => {
  return (
    <div className="directory-container">
      <NavBar />
      <LandingPage />
      <CTA />
      <Footer />
    </div>
  );
};

export default Directory;

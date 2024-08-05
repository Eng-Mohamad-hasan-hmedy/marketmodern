import { FaInstagram, FaTwitter } from "react-icons/fa";
import "../Shop/shop.css";
const Footer = () => {
  return (
    <div className="breadCrumbs link__look">
      <h1>
        <a href="#" className="lookbook__link">
          SS — 22 Lookbook
        </a>
      </h1>
      <div className="soctial_links_shop">
        <a href="#">
          <FaInstagram className="social___icones__shop" />
        </a>
        <a href="#">
          <FaTwitter className="social___icones__shop" />
        </a>
      </div>
      <p className="footer_para">Sign up to receive news and updates.</p>
      <div className="form_subscribe">
        <input type="email" placeholder="Email Address" />
        <button className="btn">Sign in</button>
      </div>
      <p className="footer_para_last">
        Made with UI/UX <br />
        <span className="span_copyright">Squarespace </span>& programming
        <span className="span_copyright">Mohamad Hasan Hmedy</span>
      </p>
    </div>
  );
};

export default Footer;

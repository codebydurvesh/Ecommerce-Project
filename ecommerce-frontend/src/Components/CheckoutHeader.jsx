import "./CheckoutHeader.css";
import { NavLink, useNavigate, Link } from "react-router-dom";
import CheckoutLockIcon from "../assets/images/icons/checkout-lock-icon.png";
import Logo from "../assets/images/logo.png";
import MobileLogo from "../assets/images/mobile-logo.png";

function CheckoutHeader() {
  const navigate = useNavigate();

  return (
    <>
      <div className="checkout-header">
        <div className="header-content">
          <div className="checkout-header-left-section">
            <NavLink to="/" style={{ textDecoration: "none" }}>
              <p className="logo">CodeByDurvesh</p>

              <div className="mobile-logo">
                <p className="text-1">CodeBy</p>
                <p className="text-3">Durvesh</p>
              </div>
            </NavLink>
          </div>

          <div className="checkout-header-middle-section">
            Checkout (
            <Link className="return-to-home-link" to="/">
              3 items
            </Link>
            )
          </div>

          <div className="checkout-header-right-section">
            <img src={CheckoutLockIcon} />
          </div>
        </div>
      </div>
    </>
  );
}

export default CheckoutHeader;

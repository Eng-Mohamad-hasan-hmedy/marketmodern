import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { PiShoppingCartLight } from "react-icons/pi";
import { ItemsLinks } from "../../ArrayData/DataApi";
import { CartContext } from "../CartContext"; // Import CartContext
import "./header.css";

const Header = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [showItems, setShowItems] = useState(true);
  const { getTotalItemCount } = useContext(CartContext); // Use CartContext

  const handleActiveClass = (index) => {
    setActiveIndex(index);
  };

  function handleMobileList() {
    setShowItems(!showItems);
  }

  return (
    <div className="main__header_nav">
      <div className="container container__header">
        <div onClick={handleMobileList} className="spanList">
          <div className="list__span">
            <span className="list s-1"></span>
            <span className="list s-2"></span>
            <span className="list s-3"></span>
          </div>
          <ul
            className={showItems ? "mobile__list activeList" : "mobile__list"}
          >
            {ItemsLinks.map((item, index) => (
              <li key={item.key} onClick={() => handleActiveClass(index)}>
                <Link
                  to={item.LinkRouter}
                  className={
                    activeIndex === index ? "active text_mobile" : "text_mobile"
                  }
                >
                  {item.ListeItem}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <ul className="nav_items">
          {ItemsLinks.map((item, index) => (
            <li key={item.key} onClick={() => handleActiveClass(index)}>
              <Link
                to={item.LinkRouter}
                className={activeIndex === index ? "active" : ""}
              >
                {item.ListeItem}
              </Link>
            </li>
          ))}
        </ul>
        <h1 className="site_title">Alpha Market</h1>
        <ul className="links__items">
          <li>
            <a className="logIn" href="#">
              Login
            </a>
          </li>
          <div className="soctial_links">
            <li>
              <a href="#">
                <FaInstagram className="icons" />
              </a>
            </li>
            <li>
              <a href="#">
                <FaTwitter className="icons" />
              </a>
            </li>
          </div>
          <li className="cart">
            <Link to="/cart">
              <PiShoppingCartLight className="icon_cart" />
            </Link>
            <span>{getTotalItemCount()}</span>{" "}
            {/* Display the cart item count */}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

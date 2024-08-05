import "./shop.css";
import { Products, BreadCrumbshandler } from "../../Helpers/Helpers";
import Footer from "../Footer/Footer";
const Shop = () => {
  return (
    <div className="container">
      <div className="breadCrumbs">{BreadCrumbshandler}</div>
      <hr />
      <div className="product">{Products}</div>
      <Footer />
    </div>
  );
};

export default Shop;

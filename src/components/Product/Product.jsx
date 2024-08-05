import { useParams } from "react-router-dom";
import { productsItems } from "../../ArrayData/DataApi";
import "./product.css";
import Footer from "../Footer/Footer";
import { CartContext } from "../CartContext";
import { useContext, useState } from "react";
const Product = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext); // Use CartContext
  const product = productsItems.find((item) => item.key === parseInt(id));

  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [message, setMessage] = useState("");

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  const handleQuantityChange = (change) => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity + change));
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      setMessage("Please select a size.");
      return;
    }

    if (quantity <= 0) {
      setMessage("Please select a valid quantity.");
      return;
    }

    addToCart({ ...product, size: selectedSize, quantity });
    setMessage("Item added to cart successfully!");
  };

  return (
    <div className="mainSectionDetail">
      <div className="container">
        <div className="productDetailes">
          <div className="smallImages">
            <img
              src={product.ImageSrc}
              className="manyImageBtn"
              alt={product.TitleName}
            />
            <img
              src={product.ImageSrc}
              className="manyImageBtn"
              alt={product.TitleName}
            />
          </div>
          <img
            src={product.ImageSrc}
            className="ImageProductDetail"
            alt={product.TitleName}
          />
          <div className="contentDetails">
            <h2 className="content-text-product">{product.TitleName}</h2>
            <p className="content-text-product chip">
              SEK {product.PriceProduct}
              {product.OriginalPrice && (
                <>
                  &nbsp; Original Price <strike>{product.OriginalPrice}</strike>
                </>
              )}
            </p>
            <p className="titleDescription">DESCRIPTION</p>
            <p className="content-text-product">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="titleDescription">DETAILS</p>
            <ul>
              <li className="content-text-product">100% Cotton</li>
              <li className="content-text-product">Machine wash cold</li>
              <li className="content-text-product">Tumble dry low</li>
            </ul>
            <p className="titleDescription">Size:</p>
            <div className="btnsSizes">
              {["0", "1", "2", "3", "4"].map((size) => (
                <button
                  key={size}
                  className={`content-text-product btn ${
                    selectedSize === size ? "selected" : ""
                  }`}
                  onClick={() => handleSizeChange(size)}
                >
                  {size}
                </button>
              ))}
            </div>
            <p className="selectedSize">Selected Size: {selectedSize}</p>
            <label className="titleDescription">Quantity:</label>
            <div className="Quantity">
              <span
                className="btnsize"
                onClick={() => handleQuantityChange(-1)}
              >
                -
              </span>
              <span className="content-text-productsize">{quantity}</span>
              <span className="btnsize" onClick={() => handleQuantityChange(1)}>
                +
              </span>
            </div>
            <button
              className="content-text-product btn btnadd"
              style={{ width: "100%" }}
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
            {message && <p className="message">{message}</p>}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Product;

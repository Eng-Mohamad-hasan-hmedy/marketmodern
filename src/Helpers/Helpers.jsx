import { Link } from "react-router-dom";
import { AboutInfo } from "../ArrayData/DataApi";
import { productsItems } from "../ArrayData/DataApi";
import { BreadCrumbs } from "../ArrayData/DataApi";

export const Products = productsItems.map((product) => (
  <div className="product_items" key={product.key}>
    <Link to={`/product/${product.key}`}>
      <img src={product.ImageSrc} alt={product.TitleName} />
      <h2>{product.TitleName}</h2>
      <p style={{ display: "inline" }}>
        SEK &nbsp;
        {product.PriceProduct}
        {product.OriginalPrice !== "" ? (
          <>
            &nbsp; Original Price <strike> {product.OriginalPrice} </strike>
          </>
        ) : (
          ""
        )}
      </p>
    </Link>
  </div>
));

export const BreadCrumbshandler = BreadCrumbs.map((bread) => (
  <h5 key={bread.key}>
    {bread.NameBreadcrumb} <span>{bread.Separetor}</span>
  </h5>
));

export const ContentAbout = AboutInfo.map((info) => (
  <div className="content__about" key={info.key}>
    <img src={info.imageAbout} alt="about" className="about_image" />
    <p>{info.Info}</p>
  </div>
));

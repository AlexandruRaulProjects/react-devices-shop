import { Link } from "react-router-dom";
import { urlFor } from "../helpers/client";

function Product({ product }) {
  return (
    <div>
      <Link to={`products/${product.slug.current}`}>
        <div className="product-card">
          <img src={urlFor(product.image[0])} alt="" 
            className="product-image"
            width={250}
            height={250}
          />
          <p className="product-name">{product.name}</p>
          <p className="product-price">${product.price}</p>
        </div>
      </Link>
    </div>
  );
}

export default Product;

import { Link } from "react-router-dom";
type P_object = {
  id: number,
  name: string,
  price: number,
  rate: number
}

export default function productItem({product, image, open}:{product: P_object, image: string, open: any}) {
  return (
    <div className="product-wrapper" key={product.id}>
      <Link to="/product">
          <img src={image} alt="" width={250} height={187} onClick={() => open(product)}/>
      </Link>
      <div className="name-price-wrapper">
        <div className="product-name">{product.name}</div>
        <div className="product-price">{product.price}</div>
      </div>
      <div className="rate-bascet-wrapper">
        <div className="product-rate">{product.rate}</div>
        <button className="in-bascet">в корзину</button>
      </div>
    </div>
  );
}

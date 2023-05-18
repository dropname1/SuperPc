
export default function productItem({product, image}:{product: any, image: any}) {
  return (
    <div className="product-wrapper" key={product.id}>
      <img src={image} alt="" width={250} height={187} />
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

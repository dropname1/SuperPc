
export default function ProductPage({product}:{product: any}) {
  return (
    <div>
      <div className="image"></div>
      <h1 className="product-name">{product.name}</h1>
      <div className="product-price">{product.price}</div>
    </div>
  )
}

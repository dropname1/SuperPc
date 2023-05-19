import videocart from '../assets/content/video-cart.jpg'
import basket from '../assets/basket.svg'

export default function BasketProduct({product} : {product: any}) {
  return (
    <div className='basket-product-wrapper'>
      <img src={videocart} alt="" height={150} />
      <div className="product-name-price-bascet">
        <div className="product-name-bascet">{product.name}</div>
        <div className="product-price-basket">{product.price}</div>
      </div>
      <div className="remove-price-product">
        <img src={basket} alt="" width={19} height={17}/>
        <div className="product-price-basket-2">{product.price}</div>
      </div>
    </div>
  );
}

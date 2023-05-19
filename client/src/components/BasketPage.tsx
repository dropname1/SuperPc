import NavbarItem from "./NavbarItem";
import BasketProduct from "./BasketProduct";
import FooterItem from "./FooterItem";

import { useState } from "react";

export default function BasketPage() {
  const [basket, setBasket] = useState([
    { id: 1, name: "Rayzen 3", price: 5550, rate: 4.5 },
    { id: 2, name: "intel core i3", price: 3550, rate: 4.7 },
    { id: 3, name: "Rayzen x5", price: 7550, rate: 4.2 },
    { id: 4, name: "Intel core i7", price: 2550, rate: 4.3 },
    { id: 5, name: "AMD rayzen 7", price: 3550, rate: 3.9 },
    { id: 6, name: "Intel i9", price: 1550, rate: 4.3 },
  ]);

  function sumBascetProducts(): number {
    let sum = 0;
    basket.forEach((p: any) => {
      sum += p.price;
    });
    return sum;
  }
  return (
    <div className="basket-page-main-wrapper">
      <NavbarItem />
      <div className="bascet-page-title">Корзина</div>
      <div className="bascet-page-wrapper">
        <div className="basket-products">
          {basket &&
            basket.map((product: any) => {
              return <BasketProduct key={product.id} product={product} />;
            })}
        </div>

        <div className="shopping">
          <div className="in-total-sum">
            <div className="in-total">ИТОГО</div>
            <div className="sum">{sumBascetProducts()}</div>
          </div>
          <button className="shopping-button">Перейти к оформлению</button>
        </div>
      </div>
      <FooterItem />
    </div>
  );
}

import NavbarItem from "./NavbarItem";
import ProductItem from "./ProductItem";
import FooterItem from "./FooterItem";

import poccesor from "../assets/content/processor.jpg";
import { useState } from "react";

export default function ProductPage({ product }: { product: any }) {
  const [recProduct, setRecProduct] = useState([
    { id: 5, name: "AMD rayzen 7", price: 3550, rate: 3.9 },
    { id: 6, name: "Intel i9", price: 1550, rate: 4.3 },
  ]);

  return (
    <div className="product-page-main-wrapper">
      <NavbarItem />
      <div className="product-page-wrpper">
        <div className="product-page">
          <div className="product-title">Страница товара</div>
          <div className="product-wrapper-product-page">
            <img src={poccesor} width={284} height={250} alt="" />
            <div className="name-price-buy-bascet">
              <div className="name-price">
                <div className="product-name-product-page">{product.name}</div>
                <div className="product-price-product-page">
                  {product.price}
                </div>
              </div>
              <div className="buy-basket">
                <button className="button-buy">Купить !</button>
                <button className="button-in-bascet">Добавить в корзину</button>
              </div>
            </div>
          </div>
          <div className="product-info">
            <div className="info-title">Описание и характеристики</div>
            <div className="info-text">
              Активное шумоподавление: Нет <br /> Вес: 10 гр <br /> Влагозащита:
              Нет <br /> Длина кабеля: 1.2 м <br /> Комплектация: Наушники{" "}
              <br /> Материал корпуса: Пластик, <br />
              резина Микрофон: Да <br /> Назначение: Проводные наушники <br />
              Ответить/закончить разговор: Да <br /> Разъем наушников: Lightning{" "}
              <br />
              Регулятор громкости: Да <br /> Тип крепления: Без крепления <br />{" "}
              Тип наушников: Вкладыши &#39;таблетки&#39; <br /> Тип подключения:
              Проводное <br /> Частотный диапазон: 20 Гц - 20000 Гц <br />{" "}
              Чувствительность: 109 дБ
            </div>
          </div>
        </div>
        <div className="rec-products">
          <div className="rec-title">Рекомендуемые товары</div>
          {recProduct &&
            recProduct.map((product) => {
              return (
                <ProductItem
                  open={""}
                  key={product.id}
                  product={product}
                  image={poccesor}
                />
              );
            })}
        </div>
      </div>
      <FooterItem />
    </div>
  );
}

import { useState } from 'react';

import pc from '../assets/pc-header.png'
import processorImg from '../assets/content/processor.jpg' 
import videocartImg from '../assets/content/video-cart.jpg' 
import ramImg from '../assets/content/ram.jpg' 

import ProductItem from './ProductItem';
import NavbarItem from './NavbarItem';
import SearchItem from './SearchItem';
import FilterItem from './FilterItem';
import FooterItem from './FooterItem';


export default function MainPage({open}:{open: any}) {

const [proccesor, setProccesor] = useState([
  {id: 1, name: 'Rayzen 3', price: 5550, rate: 4.5,},
  {id: 2, name: 'intel core i3', price: 3550, rate: 4.7,},
  {id: 3, name: 'Rayzen x5', price: 7550, rate: 4.2,},
  {id: 4, name: 'Intel core i7', price: 2550, rate: 4.3,},
  {id: 5, name: 'AMD rayzen 7', price: 3550, rate: 3.9,},
  {id: 6, name: 'Intel i9', price: 1550, rate: 4.3,},
])

const [ram, setRam] = useState([
  { id: 1, name: "Samsung 8gb 3200hz", price: 5550, rate: 4.5 },
  { id: 2, name: "Bory 4gb 2800hz", price: 3550, rate: 4.7 },
  { id: 3, name: "Hyper 8gb 2800hz", price: 7550, rate: 4.0 },
  { id: 4, name: "Corsar 8gb 320hz", price: 2550, rate: 4.3 },
  { id: 5, name: "Hynix", price: 3550, rate: 3.9 },
  { id: 6, name: "Qumo 8gb 3800hz", price: 1550, rate: 4.3 },
]);

const [videocart, setVideocart] = useState([
  { id: 1, name: "Gigabyte Rtx4070", price: 75550, rate: 4.5 },
  { id: 2, name: "Coloful", price: 3550, rate: 4.7 },
  { id: 3, name: "Gainvard", price: 7550, rate: 4.0 },
  { id: 4, name: "Amd radeon", price: 2550, rate: 4.3 },
  { id: 5, name: "Geforce GTX", price: 3550, rate: 3.9 },
  { id: 6, name: "Palit Geforce", price: 1550, rate: 4.3 },
]);

  return (
    <div className="main-page">
      <NavbarItem />
      <div className="header">
        <div className="header-title">
          SuperPc - Комплектующие <br />
          для компьютеров
        </div>
        <img src={pc} className="header-image" alt="pc" />
      </div>
      <SearchItem />
      {/* <div className="filter-wrapper"><FilterItem /></div> */}
      <div className="products-block">
        <div className="proccesor-block">
          <div className="product-title">процессоры</div>
          <div className="products">
            {proccesor &&
              proccesor.map((product) => {
                return (
                  <ProductItem
                    open={open}
                    key={product.id}
                    product={product}
                    image={processorImg}
                  />
                );
              })}
          </div>
        </div>
        <div className="videocart-block">
          <div className="product-title">видеокарты</div>
          <div className="products">
            {videocart &&
              videocart.map((product) => {
                return (
                  <ProductItem
                    open={open}
                    key={product.id}
                    product={product}
                    image={videocartImg}
                  />
                );
              })}
          </div>
        </div>
        <div className="ram-blovk">
          <div className="product-title">оперативная память</div>
          <div className="products">
            {ram &&
              ram.map((product) => {
                return (
                  <ProductItem
                    open={open}
                    key={product.id}
                    product={product}
                    image={ramImg}
                  />
                );
              })}
          </div>
        </div>
      </div>
      <FooterItem />
    </div>
  );
}

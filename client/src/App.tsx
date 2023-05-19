import MainPage from "./components/MainPage"
import BascetPage from "./components/BasketPage"
import ProductPage from "./components/ProductPage"

import {Routes, Route} from 'react-router-dom'
import { useState } from "react"

export default function App() {

  // async function serve (): Promise<any> {
  //   const responce = await fetch("http://localhost:3000/");
  //   const serverText = await responce.json()
  //   return serverText;
    
  // }

  // serve().then((data => console.log(data)))

  const [currentProoduct, setCurrentProduct] = useState()
  function open (product: any):void {
    setCurrentProduct(product)
  }
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage open={open} />}></Route>
        <Route path="/bascet" element={<BascetPage />}></Route>
        <Route
          path="/product"
          element={<ProductPage product={currentProoduct} />}
        ></Route>
      </Routes>
    </div>
  );
}

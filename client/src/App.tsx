import MainPage from "./components/MainPage"
import BascetPage from "./components/BascetPage"

import {Routes, Route} from 'react-router-dom'

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage/>}></Route>
        <Route path="/bascet" element={<BascetPage/>}></Route>
      </Routes>
    </div>
  )
}

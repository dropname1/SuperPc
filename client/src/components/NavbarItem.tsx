import bascet from '../assets/bascet.svg'
import { Link } from 'react-router-dom';


export default function NavbarItem() {
  return (
    <div className="navbar">
      <div className="navbar-title">SuperPc</div>
      <Link to="/bascet">
        <img src={bascet} alt="" className="navbar-bascet" />
      </Link>
    </div>
  );
}

import { NavLink } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import './Navigation.css'

import { FaShoppingCart } from "react-icons/fa";

export default function Navigation() {
  const { itemCount } = useCart()

  return (
    <header className="nav">
      <div className="nav__brand">
        <span className="nav__logo" aria-hidden>
          ☕
        </span>
        <div>
          <h1>Shraddha Cafe</h1>
          <p className="nav__tagline">Scan QR → Order → Pay</p>
        </div>
      </div>

      <nav className="nav__links" aria-label="Primary">
        <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>
          Menu
        </NavLink>

        
<NavLink
  to="/cart"
  className={({ isActive }) => (isActive ? "active cart-link" : "cart-link")}
>
  <div className="cart-icon-wrapper">
    <FaShoppingCart className="cart-icon" />
    {itemCount > 0 && <span className="cart-badge">{itemCount}</span>}
  </div>
  Cart
</NavLink>


        <NavLink to="/checkout" className={({ isActive }) => (isActive ? 'active' : '')}>
          Checkout
        </NavLink>
      </nav>
    </header>
  )
}

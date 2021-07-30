import logo from '../../img/logo.jpg'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__row">
          <div className="header__logo">
            <NavLink to="/">
              <img src={logo} alt="Рокфор - интернет-магазин" />
            </NavLink>
          </div>
          <div className="header__nav">
            <nav className="header__menu">
              <ul className="header__list">
                <li>
                  <NavLink to="/about">О нас</NavLink>
                </li>
                <li>
                  <NavLink to="/delivery">Доставка</NavLink>
                </li>
                <li>
                  <NavLink to="/payment">Оплата</NavLink>
                </li>
              </ul>
            </nav>
          </div>
          <div className="header__icons">
            <NavLink to="/lk">
              <div className="fas fa-user"></div>
            </NavLink>
            <NavLink to="/basket">
              <div className="fas fa-shopping-cart"></div>
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

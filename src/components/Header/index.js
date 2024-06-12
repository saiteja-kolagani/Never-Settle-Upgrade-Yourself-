import {Link, withRouter} from 'react-router-dom'
import {FiLogOut} from 'react-icons/fi'
import {FaHome, FaShoppingCart} from 'react-icons/fa'
import {IoBagHandleSharp} from 'react-icons/io5'

import Cookies from 'js-cookie'

import './index.css'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <nav className="nav-header">
      <div className="nav-content">
        <div className="nav-bar-mobile-logo-container">
          <Link to="/">
            <img
              className="website-logo"
              src="https://res.cloudinary.com/dmy1fpyxm/image/upload/v1718199261/never-settle-high-resolution-logo-transparent_bjw0xv.png"
              alt="website logo"
            />
          </Link>
          <button type="button" className="nav-mobile-btn" aria-label="Log out">
            <FiLogOut className="nav-bar-image" onClick={onClickLogout} />
          </button>
        </div>

        <div className="nav-bar-large-container">
          <Link to="/">
            <img
              className="website-logo"
              src="https://res.cloudinary.com/dmy1fpyxm/image/upload/v1718199261/never-settle-high-resolution-logo-transparent_bjw0xv.png"
              alt="website logo"
            />
          </Link>
          <ul className="nav-menu">
            <li className="nav-menu-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>

            <li className="nav-menu-item">
              <Link to="/products" className="nav-link">
                Products
              </Link>
            </li>

            <li className="nav-menu-item">
              <Link to="/cart" className="nav-link">
                Cart
              </Link>
            </li>
          </ul>
          <button
            type="button"
            className="logout-desktop-btn"
            onClick={onClickLogout}
            id="logoutBtn"
          >
            Logout
          </button>
        </div>
      </div>
      <div className="nav-menu-mobile">
        <ul className="nav-menu-list-mobile">
          <li className="nav-menu-item-mobile">
            <Link to="/" className="nav-link">
              <FaHome className="nav-bar-image" />
            </Link>
          </li>

          <li className="nav-menu-item-mobile">
            <Link to="/products" className="nav-link">
              <IoBagHandleSharp className="nav-bar-image" />
            </Link>
          </li>
          <li className="nav-menu-item-mobile">
            <Link to="/cart" className="nav-link">
              <FaShoppingCart className="nav-bar-image" />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default withRouter(Header)

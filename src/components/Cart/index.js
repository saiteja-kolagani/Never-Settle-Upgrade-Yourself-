import {ImSpinner9} from 'react-icons/im'

import Header from '../Header'
import './index.css'

const Cart = () => (
  <>
    <Header />
    <div className="cart-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-img.png"
        alt="cart"
        className="cart-img"
      />
      <div className="cart-progress-container">
        <ImSpinner9 className="cart-spinner animate-spin" />
        <h1 className="cart-progress-text">DEVELOPMENT IN PROGRESS</h1>
      </div>
    </div>
  </>
)

export default Cart

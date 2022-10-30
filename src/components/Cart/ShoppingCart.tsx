import { FC } from 'react';
import './shoppingCart.scss';
import CloseIcon from '@mui/icons-material/Close';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import CartItem from './CartItem/CartItem';

interface IShoppingCart {
  className: string;
  handleShowShoppingCart: (e: React.MouseEvent<Element, MouseEvent>) => void;
}

const ShoppingCart: FC<IShoppingCart> = ({
  className,
  handleShowShoppingCart,
}) => {
  return (
    <div className={className}>
      <div className="right-shopping-cart">
        <div className="right-shopping-cart-tittle">
          <h3>Shopping Cart</h3>
          <span className="right-shopping-cart-quantity">1</span>
        </div>
        <CloseIcon
          className="right-shopping-cart-close"
          onClick={handleShowShoppingCart}
        />
      </div>
      <div className="cart-inner">
        <ShoppingBagOutlinedIcon className="cart-icon" />
        <span className="title-cart-empty">Your cart is empty.</span>
        <button className="btn-return-shop">RETURN TO SHOP</button>
        <CartItem />
      </div>
      <div className="right-cart-bottom">
        <div className="subtotal">
          <h4>Total</h4>
          <span className="total-price">$00</span>
        </div>
        <button className="btn-view-cart">VIEW CART</button>
        <button className="btn-check">CHECK OUT</button>
      </div>
    </div>
  );
};

export default ShoppingCart;

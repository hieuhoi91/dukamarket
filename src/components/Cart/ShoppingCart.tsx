import { FC } from 'react';
import './shoppingCart.scss';
import { Link } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import CartItem from './CartItem/CartItem';
import { useAppSelector, useAppDispatch } from '../../store/hook';
import { selectCart } from '../../Features/cartSlice';
import { closeShoppingCart } from '../../Features/cartSlice';

interface IShoppingCart {
  className: string;
}

const ShoppingCart: FC<IShoppingCart> = ({ className }) => {
  const cart = useAppSelector(selectCart);
  const dispatch = useAppDispatch();
  const totalCart = cart.reduce((acc, item) => acc + item.quantity, 0);

  const totalMoney = cart.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  const handleShowShoppingCart = () => {
    dispatch(closeShoppingCart());
  };

  return (
    <>
      <div className={className}>
        <div className="right-shopping-cart">
          <div className="right-shopping-cart-tittle">
            <h3>Shopping Cart</h3>
            <span className="right-shopping-cart-quantity">{totalCart}</span>
          </div>
          <CloseIcon
            className="right-shopping-cart-close"
            onClick={handleShowShoppingCart}
          />
        </div>
        <div className="cart-inner cart-inner--simple">
          {cart.length === 0 && (
            <>
              <ShoppingBagOutlinedIcon className="cart-icon" />
              <span className="title-cart-empty">Your cart is empty.</span>
              <button className="btn-return-shop">RETURN TO SHOP</button>
            </>
          )}

          {cart.map(item => (
            <CartItem item={{ ...item }} />
          ))}
        </div>
        <div className="right-cart-bottom">
          <div className="subtotal">
            <h4>TOTAL</h4>
            <span className="total-price">${totalMoney}</span>
          </div>
          <Link
            to="/cart"
            onClick={handleShowShoppingCart}
            className="btn-view-cart"
          >
            VIEW CART
          </Link>
          <Link
            to="/cart"
            onClick={handleShowShoppingCart}
            className="btn-check"
          >
            CHECK OUT
          </Link>
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;

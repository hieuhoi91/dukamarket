import './cart.scss';
import { selectCart } from '../../Features/cartSlice';
import { useAppSelector, useAppDispatch } from '../../store/hook';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import { removeItem } from '../../Features/cartSlice';

const Cart = () => {
  const cart = useAppSelector(selectCart);
  const dispatch = useAppDispatch();

  const totalMoneyCart = cart.forEach(item => {
    let total: number;
    total = item.quantity * item.price;
    console.log(total);
    return total;
  });

  const subTotal = cart.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );

  return (
    <div className="cart">
      <div className="wrap-breadcrum">
        <img
          src="//cdn.shopify.com/s/files/1/0606/6867/4281/files/breadcrumb-cart_394f2656-9a1a-4c59-a12d-029b4f75c034_1920x.jpg?v=1637052367"
          alt=""
        />
        <h1>Cart</h1>
      </div>
      {cart.length === 0 ? (
        <div className="empty-cart">
          <div className="empty-item">
            <p>Your Carts Is Empty.</p>
            <Link className="return-shop" to="/">
              CONTINUE SHOPPING
            </Link>
          </div>
        </div>
      ) : (
        <div className="checkout-cart">
          <div className="cart-product">
            <table className="cart-table">
              <tr className="cart-content">
                <th></th>
                <th>
                  <div className="cart-content-product">PRODUCT</div>
                </th>
                <th>
                  <div className="cart-content-price">PRICE</div>
                </th>
                <th>
                  <div className="cart-content-quantity">QUANTITY</div>
                </th>
                <th>
                  <div className="cart-content-total">TOTAL</div>
                </th>
              </tr>
              {cart.map(item => (
                <tr className="product-cart-item">
                  <td
                    onClick={() => dispatch(removeItem(item))}
                    className="close-icon-cart"
                  >
                    <CloseIcon className="close-icon" />
                  </td>
                  <td className="cart-itemm">
                    <img src={item.image} alt="" />
                    <h3>{item.name_product}</h3>
                  </td>
                  <td className="cart-item-price">${item.price}</td>
                  <td className="cart-item-quantity">{item.quantity}</td>
                  <td className="cart-item-total">$a.00</td>
                </tr>
              ))}
            </table>
          </div>
          <div className="cart-total">
            <h2>Cart totals</h2>
            <div>
              <span>Subtotal</span>
              <span>{subTotal}</span>
            </div>
            <div>
              <span>Total</span>
              <span>{subTotal}</span>
            </div>
            <div>
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div>
              <div>
                <span>Change Address</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;

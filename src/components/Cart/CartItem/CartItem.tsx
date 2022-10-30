import './cartItem.scss';

import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import CloseIcon from '@mui/icons-material/Close';

const CartItem = () => {
  return (
    <div className="cart-item">
      <img
        src="//cdn.shopify.com/s/files/1/0606/6867/4281/products/6_small.jpg?v=1636001309"
        alt=""
      />
      <div className="product-item-qty">
        <h3>alo 123</h3>

        <div className="product-quantity-btn">
          <div className="number-quantity">
            <span className="qty">1x</span>
            <span className="money">$49.00</span>
          </div>
          <div className="group-btn">
            <span className="minus-btn">
              <RemoveOutlinedIcon className="btn-quantity" />
            </span>
            <input type="text" value="1" className="value-quantity" />
            <span className="plus-btn">
              <AddOutlinedIcon className="btn-quantity" />
            </span>
          </div>
        </div>
      </div>
      <CloseIcon className="close-item-quantity" />
    </div>
  );
};

export default CartItem;

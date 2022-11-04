import './cartItem.scss';
import { ChangeEvent, FC, useRef } from 'react';
import { useAppDispatch } from '../../../store/hook';
import { removeItem, increment, decrement } from '../../../Features/cartSlice';

import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import CloseIcon from '@mui/icons-material/Close';
import { IProducts } from '../../../data/products';
import { changeQuantity } from '../../../Features/cartSlice';

const CartItem = ({ item }: { item: IProducts }) => {
  const dispatch = useAppDispatch();

  const handleQuantity = (e: ChangeEvent<HTMLInputElement>) => {
    let q = Number(e.target.value);

    if (q > 50) q = 50;

    if (q < 1) q = 1;
    dispatch(changeQuantity({ image: item.image, quantity: q }));
  };

  return (
    <div className="cart-item">
      <img src={item.image} alt="" />
      <div className="product-item-qty">
        <h3>{item.name_product}</h3>

        <div className="product-quantity-btn">
          <div className="number-quantity">
            <span className="money">${item.price}</span>
          </div>
          <div className="group-btn">
            <span
              className="minus-btn"
              onClick={() => dispatch(decrement(item))}
            >
              <RemoveOutlinedIcon className="btn-quantity" />
            </span>
            <input
              value={item.quantity}
              type="number"
              className="value-quantity"
              onChange={handleQuantity}
              min="1"
              max="50"
            />
            <span
              className="plus-btn"
              onClick={() => dispatch(increment(item))}
            >
              <AddOutlinedIcon className="btn-quantity" />
            </span>
          </div>
        </div>
      </div>
      <CloseIcon
        className="close-item-quantity"
        onClick={() => dispatch(removeItem(item))}
      />
    </div>
  );
};

export default CartItem;

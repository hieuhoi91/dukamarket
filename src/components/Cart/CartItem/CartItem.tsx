import './cartItem.scss';
import { FC } from 'react';
import { useAppDispatch } from '../../../store/hook';
import { removeItem } from '../../../Features/cartSlice';

import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import CloseIcon from '@mui/icons-material/Close';
import { IProducts } from '../../../data/products';

const CartItem = ({ item }: { item: IProducts }) => {
  const dispatch = useAppDispatch();
  return (
    <div className="cart-item">
      <img src={item.image} alt="" />
      <div className="product-item-qty">
        <h3>{item.name_product}</h3>

        <div className="product-quantity-btn">
          <div className="number-quantity">
            <span className="money">{item.price}</span>
          </div>
          <div className="group-btn">
            <span className="minus-btn">
              <RemoveOutlinedIcon className="btn-quantity" />
            </span>
            <input
              type="text"
              value={item.quantity}
              className="value-quantity"
            />
            <span className="plus-btn">
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

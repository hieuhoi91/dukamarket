import ReactDOM from 'react-dom';
import './potal.scss';
import { closeShoppingCart } from '../../Features/cartSlice';
import { useAppDispatch } from '../../store/hook';

// TODO: Need refactoring
const Potal = () => {
  const dispatch = useAppDispatch();
  const handleCloseShoppingCart = () => {
    dispatch(closeShoppingCart());
  };

  return ReactDOM.createPortal(
    <div className="potal-ovelay" onClick={handleCloseShoppingCart}></div>,
    document.querySelector('body') as HTMLElement
  );
};

export default Potal;

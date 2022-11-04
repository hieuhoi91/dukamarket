import { FC } from 'react';
import ReactDOM from 'react-dom';
import './potal.scss';

interface IPotal {
  onClick: (e: React.MouseEvent<Element, MouseEvent>) => void;
}

const Potal: FC<IPotal> = ({ onClick }) => {
  return ReactDOM.createPortal(
    <div className="potal-ovelay" onClick={onClick}></div>,
    document.querySelector('body') as HTMLElement
  );
};

export default Potal;

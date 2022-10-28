import './viewAllProduct.scss';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const ViewAllProduct = ({ title }: { title: string }) => {
  return (
    <div>
      <div className="view-all">
        <a href="/">
          <span>{title}</span>
          <ArrowForwardIosIcon className="arrow-icon" />
        </a>
      </div>
    </div>
  );
};

export default ViewAllProduct;

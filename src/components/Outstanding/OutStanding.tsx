import './outStanding.scss';
import { OutStanding as dataOutStanding } from '../../data/outStanding';
import { Product as dataProduct } from '../../data/products';
import StarRating from 'react-star-ratings';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SectionTittle from '../SectionTitle/SectionTittle';
import ViewAllProduct from '../ViewAllProduct/ViewAllProduct';

const OutStanding = () => {
  return (
    <div>
      <SectionTittle title={'Hot Trending Products'}>
        <ViewAllProduct title={'View All Product'} />
      </SectionTittle>
      <div className="container">
        <div className="out-standing">
          {dataOutStanding.map(item => (
            <div key={item.img} className="out-item">
              <img src={item.img} alt="" />
              <span className="product-discount">- {item.sale}%</span>
              <div className="out-item-content">
                <h3>{item.name}</h3>
                <StarRating rating={item.star} starRatedColor="yellow" />
                <span className="out-item-price">${item.price}</span>
                <p>{item.description}</p>
                <div className="btn-out-content">
                  <button className="btn-add-content">Add To Cart</button>
                  <span className="btn-heart">
                    <FavoriteBorderIcon className="icon-heart" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="list-product-otd">
          {dataProduct
            .filter((_, idx) => idx < 6)
            .map(item => (
              <div key={item.image} className="product-otd-item">
                <img src={item.image} alt="" />
                <div className="product-sale-otd">
                  {item.isHot && <span className="hot-product-otd">HOT</span>}
                  {item.isNew && <span className="new-product-otd">NEW</span>}
                  <span className="product-discount-otd">- {item.sale}%</span>
                </div>
                <div className="item-name">
                  <h3>{item.name_product}</h3>
                  <StarRating rating={item.star} starRatedColor="yellow" />
                  <span>${item.price}</span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default OutStanding;

import { FC, useState, useEffect, Fragment } from 'react';
import { Product as dataProducts, IProducts } from '../../data/products';
import { Swiper, SwiperSlide } from 'swiper/react';
import StarRating from 'react-star-ratings';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import LayersIcon from '@mui/icons-material/Layers';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import './products.scss';
import { Autoplay } from 'swiper';

const ItemProduct: FC<IProducts> = item => {
  const [showAddToCart, setShowAddToCart] = useState<boolean>(false);

  const handleshowAddToCart = () => {
    setShowAddToCart(!showAddToCart);
  };

  return (
    <Fragment>
      <div
        className="contain"
        onMouseEnter={handleshowAddToCart}
        onMouseLeave={handleshowAddToCart}
      >
        <img src={item.image} alt="" className="image-product" />
        <div className="product-sale">
          {item.isHot && <span className="hot-product">HOT</span>}
          {item.isNew && <span className="new-product">NEW</span>}
          <span className="product-discount">- {item.sale}%</span>
        </div>
        <div className="description-product">
          <h2 className="product-name">{item.name_product}</h2>
          <StarRating rating={item.star} starRatedColor="yellow" />
          <span className="product-price">$ {item.price}.00</span>
        </div>
        <div className="product-inner">
          <span className="icon-eyes">
            <RemoveRedEyeIcon className="icon-inner" />
          </span>
          <span className="icon-layer">
            <LayersIcon className="icon-inner" />
          </span>
          <span className="icon-favorite">
            <FavoriteBorderIcon className="icon-inner" />
          </span>
        </div>
        {showAddToCart && (
          <div>
            <button title="Add" type="button" className="show-cart">
              ADD TO CART
            </button>
          </div>
        )}
      </div>
    </Fragment>
  );
};

const ProductSlider = () => {
  const [swiper, setSwiper] = useState<any>();

  useEffect(() => {
    const s = document.querySelector('.list-product-swiper') as any;
    setSwiper(s.swiper);
  }, []);

  const handlerPrev = () => {
    swiper.slidePrev();
  };

  const handlerNext = () => {
    swiper.slideNext();
  };

  return (
    <div className="list-product">
      <div className="wrap-title">
        <h3 className="title">Hot Trending products</h3>
        <div className="view-all">
          <a href="/">
            <span>View All Products</span>
            <ArrowForwardIosIcon className="arrow-icon" />
          </a>
        </div>
      </div>
      <span className="product-arrow-left" onClick={handlerPrev}>
        <ArrowBackIosNewIcon className="arrow-icon" />
      </span>
      <Swiper
        modules={[Autoplay]}
        slidesPerView={8}
        spaceBetween={20}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        speed={800}
        className="list-product-swiper"
      >
        {dataProducts.map(item => (
          <SwiperSlide>
            <ItemProduct {...item} key={item.image} />
          </SwiperSlide>
        ))}
      </Swiper>
      <span className="product-arrow-right" onClick={handlerNext}>
        <ArrowForwardIosIcon className="arrow-icon" />
      </span>
    </div>
  );
};

export default ProductSlider;

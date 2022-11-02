import { FC, useState, useEffect } from 'react';
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
import SectionTittle from '../SectionTitle/SectionTittle';
import ViewAllProduct from '../ViewAllProduct/ViewAllProduct';
import { useAppDispatch } from '../../store/hook';
import { addItem } from '../../Features/cartSlice';

const ItemProduct: FC<IProducts> = item => {
  const [showAddToCart, setShowAddToCart] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  const handleshowAddToCart = () => {
    setShowAddToCart(!showAddToCart);
  };

  return (
    <>
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
          <button
            title="Add"
            type="button"
            className="show-cart"
            onClick={() => {
              dispatch(addItem(item));
            }}
          >
            ADD TO CART
          </button>
        )}
      </div>
    </>
  );
};

const ProductSlider = ({ title }: { title: string }) => {
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
      <SectionTittle title={title}>
        <ViewAllProduct title={'View All Product'} />
      </SectionTittle>
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
          <SwiperSlide key={item.image}>
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

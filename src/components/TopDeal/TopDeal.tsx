import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import StarRating from 'react-star-ratings';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import 'swiper/css';
import 'swiper/css/navigation';
import './topDeal.scss';
import { Product as dataProduct } from '../../data/products';
import SectionTittle from '../SectionTitle/SectionTittle';
import Countdown from '../Countdown/Countdown';

const TopDeal = () => {
  const [swiper, setSwiper] = useState<any>();

  useEffect(() => {
    const s = document.querySelector('.top-deal-swiper') as any;
    setSwiper(s.swiper);
  }, []);

  const handlerPrev = () => {
    swiper.slidePrev();
  };

  const handlerNext = () => {
    swiper.slideNext();
  };

  return (
    <div className="top-deal">
      <SectionTittle title={'Top Deals Of The Day'}>
        <Countdown />
      </SectionTittle>
      <span className="product-arrow-left" onClick={handlerPrev}>
        <ArrowBackIosNewIcon className="arrow-icon" />
      </span>
      <Swiper
        className="top-deal-swiper"
        modules={[Autoplay]}
        slidesPerView={2}
        spaceBetween={20}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        speed={800}
      >
        {dataProduct.map(item => (
          <SwiperSlide key={item.image}>
            <div className="product-item">
              <img src={item.image} alt="" />
              <div className="product-sale">
                {item.isHot && <span className="hot-product">HOT</span>}
                {item.isNew && <span className="new-product">NEW</span>}
                <span className="product-discount">- {item.sale}%</span>
              </div>
              <div className="product-content">
                <h3>{item.name_product}</h3>
                <StarRating rating={item.star} starRatedColor="yellow" />
                <p>{item.description}</p>
                <span className="product-price">${item.price}</span>
                <Box sx={{ width: '100%' }}>
                  <LinearProgress variant="determinate" value={85} />
                </Box>
                <div className="product-quantity">
                  <span>Sold: 85</span>
                  <span>Available: 15</span>
                </div>
                <button type="button" className="add-btn">
                  Add to Cart
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <span className="product-arrow-right" onClick={handlerNext}>
        <ArrowForwardIosIcon className="arrow-icon" />
      </span>
    </div>
  );
};

export default TopDeal;

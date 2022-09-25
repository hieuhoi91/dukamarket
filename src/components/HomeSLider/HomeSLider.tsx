import React, { useState, useEffect } from 'react';
import './homeSlider.scss';
import {
  homeSlide as HomeSlideData,
  highlightItems as highlightItemsData,
  IHomeSlide,
  IHighlightItem,
} from '../../data/homeSlide';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

const SlideItem = (item: IHomeSlide) => {
  return (
    <div className="slider-item">
      <img src={item.image} alt="" />
      <div className="slider-main">
        <div className="slider-title">
          <h2>{item.main_label}</h2>
          <h2>{item.label}</h2>
          <p>{item.detail}</p>
        </div>
        <button title="discover" type="button" className="btn">
          DISCOVER NOW
        </button>
      </div>
    </div>
  );
};

interface IHighlight extends IHighlightItem {
  idx: number;
}

const Highlight: React.FC<{ item: IHighlight }> = props => {
  return (
    <div className="highlight-item">
      <img src={props.item.image} alt="" />
      <div className="highlight-content">
        <h3>{props.item.name}</h3>
        <p>{props.item.category}</p>
      </div>
    </div>
  );
};

const HomeSlider = () => {
  return (
    <div className="home-slider">
      <div className="slider">
        <Swiper
          className="swiper"
          modules={[Autoplay, Pagination]}
          spaceBetween={20}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          loop={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          speed={800}
        >
          {HomeSlideData.map(item => (
            <SwiperSlide>
              <SlideItem {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="home-highlight">
        {highlightItemsData.map((item, idx) => (
          <Highlight item={{ ...item, idx }} />
        ))}
      </div>
    </div>
  );
};

export default HomeSlider;

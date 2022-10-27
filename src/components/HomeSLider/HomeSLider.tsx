import { FC } from 'react';
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

interface IHomeSlider extends IHomeSlide {
  idx: number;
}

const SlideItem: FC<{ item: IHomeSlider }> = props => {
  return (
    <div className="slider-item">
      <img src={props.item.image} alt="" />
      <div className="slider-main">
        <div className="slider-title">
          <h2 className="slider-label">{props.item.main_label}</h2>
          <h2 className="slider-label">{props.item.label}</h2>
          <p className="slider-detail">{props.item.detail}</p>
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

const Highlight: FC<{ item: IHighlight }> = props => {
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
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          loop={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          speed={800}
        >
          {HomeSlideData.map((item, idx) => (
            <SwiperSlide>
              <SlideItem item={{ ...item, idx }} />
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

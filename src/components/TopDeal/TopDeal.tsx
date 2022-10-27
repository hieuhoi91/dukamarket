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

const CountDownTimer = ({ countdownTime }: { countdownTime: number }) => {
  const [date, setDate] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() + countdownTime);

    return d;
  });
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  function CountDownTimer() {
    var end = new Date(date);

    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;

    var now = new Date();
    var distance = end.valueOf() - now.valueOf();
    var days = Math.floor(distance / _day);
    var hours = Math.floor((distance % _day) / _hour);
    var minutes = Math.floor((distance % _hour) / _minute);
    var seconds = Math.floor((distance % _minute) / _second);
    const c = {
      days,
      hours,
      minutes,
      seconds,
    };
    setCountdown(c);
    return c;
  }

  useEffect(() => {
    setInterval(() => {
      CountDownTimer();
    }, 1000);
  }, []);
  return (
    <div className="top-deal-countdown">
      <span>{countdown?.days} Days </span>
      <span>{countdown?.hours} Hrs </span>
      <span>{countdown?.minutes} Mins </span>
      <span>{countdown?.seconds} Secs </span>
    </div>
  );
};

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

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(oldProgress => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="top-deal">
      <div className="top-deal-title">
        <h2>Top Deals Of The Days</h2>
        <div className="countdown">
          <span className="countdown-lable">Hurry Up! Offer ends in: </span>
          <span className="countdown-timer">
            <CountDownTimer countdownTime={72} />
          </span>
        </div>
      </div>
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
          <SwiperSlide>
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
                  <LinearProgress variant="determinate" value={progress} />
                </Box>
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

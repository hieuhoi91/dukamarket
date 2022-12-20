import { useState, useEffect } from 'react';
import './countdown.scss';

const CountDownTimer = ({ countdownTime }: { countdownTime: number }) => {
  const [date] = useState(() => {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

const Countdown = () => {
  return (
    <div className="countdown">
      <span className="countdown-lable">Hurry Up! Offer ends in: </span>
      <span className="countdown-timer">
        <CountDownTimer countdownTime={72} />
      </span>
    </div>
  );
};

export default Countdown;

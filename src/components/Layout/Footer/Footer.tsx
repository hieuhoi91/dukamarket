import { FC } from 'react';
import './footer.scss';
import { Shopify as dataShopify } from '../../../data/shopify';
import { MainFooter as dataMainFooter } from '../../../data/mainFooter';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const dataIcon: React.ReactNode[] = [
  <TwitterIcon />,
  <FacebookIcon />,
  <PinterestIcon />,
  <InstagramIcon />,
  <YouTubeIcon />,
];
const Footer: FC = () => {
  return (
    <div className="footer">
      <div className="shopify">
        {dataShopify.map(item => (
          <div className="shopify-item">
            <span>{<item.icon />}</span>
            <div className="shopify-content">
              <h3>{item.tittle}</h3>
              <span>{item.content}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="main-footer">
        <div className="section-1">
          <h3>Download App</h3>
          <div>
            <p>Dukamarket App is now available on App Store & Google Play.</p>
            <p>Get it now.</p>
          </div>
          <div className="footer-app">
            <img
              src="//cdn.shopify.com/s/files/1/0606/6867/4281/files/img-foter1_181x45_dd66ca63-ec20-48ee-858c-7af76565385c_181x45.png?v=1638781572"
              alt=""
            />
            <img
              src="//cdn.shopify.com/s/files/1/0606/6867/4281/files/img-foter2_181x45_fd0b62b4-e6ed-4908-81d5-29c2b8091ece_181x45.png?v=1638781583"
              alt=""
            />
          </div>
          <div className="social">
            {dataIcon.map((item, idx) => (
              <span className={`icon-social color-${idx + 1} `}>{item}</span>
            ))}
          </div>
        </div>
        <div className="section-2">
          {dataMainFooter.map(item => (
            <div className="list-title">
              <h3>{item.title}</h3>
              {item.content.map(item => (
                <a href="/">{item}</a>
              ))}
            </div>
          ))}
        </div>
        <div className="section-3">
          <h3>Subcribe To Our Newsletter</h3>
          <p>
            Join 60.000+ subscribers and get a new discount coupon on every
            Saturday.
          </p>
          <form action="">
            <input type="text" placeholder="Your email address..." required />
            <button>SUBSCRIBE</button>
          </form>
          <p>I would like to receive news and special offers.</p>
          <p>Mail: alothemes@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import HomeSlider from '../../components/HomeSLider/HomeSLider';
import ProductSlider from '../../components/ProductSlider/ProductSlider';
import Category from '../../components/Category/Category';
import TopDeal from '../../components/TopDeal/TopDeal';
import Content from '../../components/Content/Content';
import OutStanding from '../../components/Outstanding/OutStanding';
import Marquee from 'react-fast-marquee';
import './home.scss';

const Home = () => {
  return (
    <div>
      <div className="home">
        <HomeSlider />
        <ProductSlider title="Hot Trending Products" />
        <Category />
        <TopDeal />
        <Content />
        <OutStanding />
      </div>
      <Marquee
        style={{
          fontSize: '1rem',
          backgroundColor: '#263c97',
          color: '#fff',
          height: '50px',
          margin: '48px 0',
        }}
        gradient={false}
        speed={100}
      >
        Free UK delivery - Return over $100.00 ( Excluding Homeware ) | Free UK
        Collect From Store
      </Marquee>
      <div className="home">
        <ProductSlider title="Recommended For You" />
      </div>
    </div>
  );
};

export default Home;

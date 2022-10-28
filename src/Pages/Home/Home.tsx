import HomeSlider from '../../components/HomeSLider/HomeSLider';
import ProductSlider from '../../components/ProductSlider/ProductSlider';
import Category from '../../components/Category/Category';
import TopDeal from '../../components/TopDeal/TopDeal';
import Content from '../../components/Content/Content';
import OutStanding from '../../components/Outstanding/OutStanding';
import './home.scss';

const Home = () => {
  return (
    <div className="home">
      <HomeSlider />
      <ProductSlider />
      <Category />
      <TopDeal />
      <Content />
      <OutStanding />
    </div>
  );
};

export default Home;

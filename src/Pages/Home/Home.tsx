import HomeSlider from '../../components/HomeSLider/HomeSLider';
import ProductSlider from '../../components/ProductSlider/ProductSlider';
import Category from '../../components/Category/Category';
import TopDeal from '../../components/TopDeal/TopDeal';
import './home.scss';

const Home = () => {
  return (
    <div className="home">
      <HomeSlider />
      <ProductSlider />
      <Category />
      <TopDeal />
    </div>
  );
};

export default Home;

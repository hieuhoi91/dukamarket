import { Category as dataCategory } from '../../data/category';
import SectionTittle from '../SectionTitle/SectionTittle';
import './category.scss';

const Category = () => {
  return (
    <div className="category">
      <SectionTittle title="Popular Categories" />
      <div className="category-list">
        {dataCategory.map(item => (
          <div key={item.img} className="category-item">
            <img src={item.img} alt="" />
            <div className="category-collection">
              <span className="collection-name">{item.name}</span>
              <span className="collection-quantity">
                ({item.quantity} items)
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;

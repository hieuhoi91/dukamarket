import { Category as dataCategory } from '../../data/category';
import './category.scss';

const Category = () => {
  return (
    <div className="category">
      <div className="category-header">
        <h3 className="category-title">Popular Categories</h3>
      </div>
      <div className="category-list">
        {dataCategory.map(item => (
          <div className="category-item">
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

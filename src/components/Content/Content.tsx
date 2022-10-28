import './content.scss';
import { Content as dataContent } from '../../data/content';

const Content = () => {
  return (
    <div className="content-container">
      {dataContent.map(item => (
        <div key={item.img} className="content-item">
          <img src={item.img} alt="" />
          <div className="content-decription">
            <span className="content">{item.label_content}</span>
            <span className="content">{item.content}</span>
            <span className="discount">Up to -{item.discount}%</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Content;

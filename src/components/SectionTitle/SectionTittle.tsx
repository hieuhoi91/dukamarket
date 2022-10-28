import './sectionTittle.scss';
import { FC } from 'react';

interface SectionTittleProps {
  title: string;
  children?: React.ReactNode;
}

const SectionTittle: FC<SectionTittleProps> = props => {
  return (
    <div>
      <div className="wrap-title">
        <h3 className="title">{props.title}</h3>
        {props.children}
      </div>
    </div>
  );
};

export default SectionTittle;

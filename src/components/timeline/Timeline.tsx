import { combineClasses } from '../../utils/ClassNameUtil';
import TimelineStyles from './Timeline.module.css';
import { Icon } from '../icon/Icon';

const c = combineClasses({ styles: TimelineStyles });

export interface TimelineItem {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  icon: string;
}

export interface TimelineProps {
  items: TimelineItem[];
}

export function Timeline({ items }: TimelineProps) {
  return (
    <div className={c('timeline')}>
      {items.map((item, index) => (
        <div key={item.id} className={c('timelineItem')}>
          <div className={c('iconContainer')}>
            <div className={c('icon')}>
              <Icon name={item.icon} size="medium" className="white" />
            </div>
            {index < items.length - 1 && <div className={c('connector')} />}
          </div>
          <div className={c('content')}>
            <div className={c('header')}>
              <h3 className={c('title')}>{item.title}</h3>
              <div className={c('datetime')}>
                <span className={c('date')}>{item.date}</span>
                <span className={c('time')}>{item.time}</span>
              </div>
            </div>
            <p className={c('description')}>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
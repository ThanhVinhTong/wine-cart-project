import { Blog, DailyDeals } from '@/components';
import styles from './Combine.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

export function Combine() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <div className={cx('row')}>
          <Blog />
          <DailyDeals />
        </div>
      </div>
    </div>
  );
}
